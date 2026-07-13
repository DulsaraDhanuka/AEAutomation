//@include "../Drawer.js"
//@include "../../utils.js"

// TODO: Make redrawable
class GridDrawer extends Drawer {
    handMoveDuration: number;
    handPointDelay: number;
    handPointMoveDelay: number;
    groupElementDelay: number;

    constructor(drawingHand: AVLayer, erasingHand: AVLayer) {
        super(drawingHand, erasingHand);

        this.handMoveDuration = 2;
        this.handPointDelay = 1;
        this.handPointMoveDelay = 1;
        this.groupElementDelay = 3;
    }

    drawElement(element: Element, playhead: Playhead): void {
        let elementComp: CompItem = element.getComp();

        var layer = element.getLayer();
        let [top, left, right, bottom]: [number, number, number, number] = getLayerPoints(layer, false);
        let [width, height]: [number, number] = [right - left, bottom - top];
        let matte: AVLayer = null;

        let maskGrid: Array<Array<[number, Array<[number, number]>]>> = new Array<Array<[number, Array<[number, number]>]>>();
        let xn: number = 5;
        let yn: number = 5;

        let xs = Math.floor(width / xn);
        let ys = Math.floor(height / yn);

        let f: boolean = false;
        let randomize = true;

        if (width >= height * 3) {
            f = false;
        } else {
            f = true;
            xn = 10;
            yn = 2;
        }

        if ((<ElementProperty>element.getProperties().get("gridX")) != null) {
            xn = parseInt((<ElementProperty>element.getProperties().get("gridX")).getValue());
        }

        if ((<ElementProperty>element.getProperties().get("gridY")) != null) {
            yn = parseInt((<ElementProperty>element.getProperties().get("gridY")).getValue());
        }

        if ((<ElementProperty>element.getProperties().get("direction")) != null) {
            let direction: string = (<ElementProperty>element.getProperties().get("direction")).getValue();

            if (direction == "x") {
                f = true;
            } else if (direction == "y") {
                f = false;
            }
        }

        if ((<ElementProperty>element.getProperties().get("shuffle")) != null) {
            let shuffleProp: string = (<ElementProperty>element.getProperties().get("shuffle")).getValue();
            

            if (shuffleProp == "true") {
                randomize = true;
            } else {
                randomize = false;
            }
        }

        var matteFolder = createFolder(this.getID() + "_MATTES");
        matte = elementComp.layers.addSolid([255, 255, 255], layer.name + "_" + this.getID() + "_MATTE", Math.floor(right - left), Math.floor(bottom - top), 1, elementComp.duration);
        matte.threeDLayer = layer.threeDLayer;
        (<FootageItem>matte.source).parentFolder = matteFolder;
        matte.moveBefore(layer);
        layer.trackMatteType = TrackMatteType.ALPHA;
        matte.quality = LayerQuality.DRAFT;
        matte.enabled = false;
        parentToLayer(layer, matte);

        (<Property>matte.property("Position")).setValue([width / 2, height / 2]);
        //(<Property>matte.property("Anchor Point")).setValue([0, 0, 0]);

        if (f) {
            for (var i = 0; i < yn; i++) {
                let column: Array<[number, Array<[number, number]>]> = new Array<[number, Array<[number, number]>]>();

                for (var ii = 0; ii < xn; ii++) {
                    let newMask: MaskPropertyGroup = <MaskPropertyGroup>matte.mask.addProperty("Mask");
                    let myMaskShape: Property = <Property>newMask.property("maskShape");

                    let v: [Shape, Array<[number, number]>] = this.createShape(width / xn * ii, height / yn * i, width / xn, height / yn);

                    myMaskShape.setValue(v[0]);

                    column.push([matte.mask.numProperties, v[1]]);
                }

                if (randomize) {
                    column = shuffle(column);
                }
                maskGrid.push(column);
            }
        } else {
            for (var i = 0; i < xn; i++) {
                let column: Array<[number, Array<[number, number]>]> = new Array<[number, Array<[number, number]>]>();
                for (var ii = 0; ii < yn; ii++) {
                    let newMask: MaskPropertyGroup = <MaskPropertyGroup>matte.mask.addProperty("Mask");
                    let myMaskShape: Property = <Property>newMask.property("maskShape");

                    let v: [Shape, Array<[number, number]>] = this.createShape((width / xn * i), height / yn * ii, width / xn, height / yn);

                    myMaskShape.setValue(v[0]);

                    column.push([matte.mask.numProperties, v[1]]);
                }

                if (randomize) {
                    column = shuffle(column);
                }
                maskGrid.push(column);
            }
        }

        let masks: Array<[number, Array<[number, number]>]> = [].concat.apply([], maskGrid);

        let defaultHandPosition: [number, number, number] = <[number, number, number]>(<Property>this.drawingHand.property("Position")).valueAtTime(playhead.getCurrentSecond(), true);

        (<Property>this.drawingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        (<Property>this.drawingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.drawingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        playhead.moveFrames(this.handMoveDuration);
        for (var i = 0; i < masks.length; i++) {
            let mask: MaskPropertyGroup = <MaskPropertyGroup>matte.mask.property(masks[i][0]);
            let mShape: Shape = (<Shape>(<Property>mask.property("maskShape")).value);

            (<Property>mask.property("Mask Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
            for (var ii = 0; ii < masks[i][1].length; ii++) {
                if (ii != 0) {
                    playhead.moveFrames(this.handPointDelay);
                }

                (<Property>this.drawingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), pathVertexPositionToAbsolutePosition(masks[i][1][ii], matte, playhead.getCurrentSecond()));
                (<Property>this.drawingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.drawingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
            }

            (<Property>mask.property("Mask Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);

            playhead.moveFrames(this.handPointMoveDelay);
        
        }
        playhead.moveFrames(this.handMoveDuration);
        (<Property>this.drawingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        (<Property>this.drawingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.drawingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
    }
    
    drawGroup(group: ElementGroup, playhead: Playhead): void {
        group.sort(function (a: Element, b: Element): number {
            let a_int: number = parseInt(a.getName());
            let b_int: number = parseInt(b.getName());

            if (a_int > b_int) {
                return 1;
            } else if (a_int < b_int) {
                return -1;
            } else {
                return 0;
            }
        });

        let defaultHandPosition: [number, number, number] = <[number, number, number]>(<Property>this.drawingHand.property("Position")).valueAtTime(playhead.getCurrentSecond(), true);

        (<Property>this.drawingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        (<Property>this.drawingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.drawingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        playhead.moveFrames(this.handMoveDuration);

        let index = 0;
        for (var i = 0; i < group.length; i++) {
            let element = group.get(i);

            if (isType(element, Element)) {
                if (index != 0) {
                    playhead.moveFrames(this.handPointDelay);
                }

                let [top, left, right, bottom] = getLayerPoints((<Element>element).getLayer(), true, playhead.getCurrentSecond());
                let [width, height] = [right-left, bottom-top];
                (<Property>this.drawingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), [left+(width/2), top]);
                (<Property>this.drawingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.drawingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
                (<Property>(<Element>element).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
                playhead.moveFrames(this.handMoveDuration);
                (<Property>(<Element>element).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
                (<Property>this.drawingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), [left + (width / 2), bottom]);
                (<Property>this.drawingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.drawingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);

                index++;
            }
        }

        playhead.moveFrames(this.handMoveDuration);
        (<Property>this.drawingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        (<Property>this.drawingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.drawingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
    }

    firstElement(group: ElementGroup): Element {
        if (isType(group.get(0), ElementGroup)) {
            return this.firstElement(<ElementGroup>group.get(0))
        } else {
            return <Element>group.get(0);
        }
    }

    eraseElement(element: Element, playhead: Playhead): void {
        let elementComp: CompItem = element.getComp();

        var layer = element.getLayer();
        let [top, left, right, bottom]: [number, number, number, number] = getLayerPoints(layer, false);
        let [width, height]: [number, number] = [right - left, bottom - top];
        let matte: AVLayer = null;

        let maskGrid: Array<Array<[number, Array<[number, number]>]>> = new Array<Array<[number, Array<[number, number]>]>>();
        let xn: number = 5;
        let yn: number = 5;

        let xs = Math.floor(width / xn);
        let ys = Math.floor(height / yn);

        let f: boolean = false;

        if (width >= height * 3) {
            f = false;
        } else {
            f = true;
        }

        if (elementComp.layer(layer.name + "_" + this.getID() + "_MATTE") == null) {
            var matteFolder = createFolder(this.getID() + "_MATTES");
            matte = elementComp.layers.addSolid([255, 255, 255], layer.name + "_" + this.getID() + "_MATTE", Math.floor(right - left), Math.floor(bottom - top), 1, elementComp.duration);
            matte.threeDLayer = layer.threeDLayer;
            (<FootageItem>matte.source).parentFolder = matteFolder;
            matte.moveBefore(layer);
            layer.trackMatteType = TrackMatteType.ALPHA;
            matte.quality = LayerQuality.DRAFT;
            matte.enabled = false;
            parentToLayer(layer, matte);

            (<Property>matte.property("Position")).setValue([0, 0, 0]);
            (<Property>matte.property("Anchor Point")).setValue([0, 0, 0]);

            if (f) {
                for (var i = 0; i < yn; i++) {

                    let column: Array<[number, Array<[number, number]>]> = new Array<[number, Array<[number, number]>]>();

                    for (var ii = 0; ii < xn; ii++) {
                        let newMask: MaskPropertyGroup = <MaskPropertyGroup>matte.mask.addProperty("Mask");
                        let myMaskShape: Property = <Property>newMask.property("maskShape");

                        let v: [Shape, Array<[number, number]>] = this.createShape(width / xn * ii, height / yn * i, width / xn, height / yn);

                        myMaskShape.setValue(v[0]);

                        column.push([matte.mask.numProperties, v[1]]);
                    }

                    column = shuffle(column);
                    maskGrid.push(column);
                }
            } else {
                for (var i = 0; i < xn; i++) {

                    let column: Array<[number, Array<[number, number]>]> = new Array<[number, Array<[number, number]>]>();

                    for (var ii = 0; ii < yn; ii++) {
                        let newMask: MaskPropertyGroup = <MaskPropertyGroup>matte.mask.addProperty("Mask");
                        let myMaskShape: Property = <Property>newMask.property("maskShape");

                        let v: [Shape, Array<[number, number]>] = this.createShape(width / xn * i, height / yn * ii, width / xn, height / yn);

                        myMaskShape.setValue(v[0]);

                        column.push([matte.mask.numProperties, v[1]]);
                    }

                    column = shuffle(column);
                    maskGrid.push(column);
                }
            }
        } else {
            matte = <AVLayer>elementComp.layer(layer.name + "_" + this.getID() + "_MATTE");

            let index: number = 1;
            if (f) {
                for (var i = 0; i < yn; i++) {

                    let column: Array<[number, Array<[number, number]>]> = new Array<[number, Array<[number, number]>]>();

                    for (var ii = 0; ii < xn; ii++) {
                        let v: [Shape, Array<[number, number]>] = this.createShape(width / xn * ii, height / yn * i, width / xn, height / yn);

                        column.push([index, v[1]]);
                        index++;
                    }

                    column = shuffle(column);
                    maskGrid.push(column);
                }
            } else {
                for (var i = 0; i < xn; i++) {

                    let column: Array<[number, Array<[number, number]>]> = new Array<[number, Array<[number, number]>]>();

                    for (var ii = 0; ii < yn; ii++) {
                        let v: [Shape, Array<[number, number]>] = this.createShape(width / xn * i, height / yn * ii, width / xn, height / yn);

                        column.push([index, v[1]]);
                        index++;
                    }

                    column = shuffle(column);
                    maskGrid.push(column);
                }
            }
        }

        let masks: Array<[number, Array<[number, number]>]> = [].concat.apply([], maskGrid);

        let defaultHandPosition: [number, number, number] = <[number, number, number]>(<Property>this.erasingHand.property("Position")).valueAtTime(playhead.getCurrentSecond(), true);

        (<Property>this.erasingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        (<Property>this.erasingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.erasingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        playhead.moveFrames(this.handMoveDuration);
        for (var i = 0; i < masks.length; i++) {
            let mask: MaskPropertyGroup = <MaskPropertyGroup>matte.mask.property(masks[i][0]);
            let mShape: Shape = (<Shape>(<Property>mask.property("maskShape")).value);

            (<Property>mask.property("Mask Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
            for (var ii = 0; ii < masks[i][1].length; ii++) {
                if (ii != 0) {
                    playhead.moveFrames(this.handPointDelay);
                }

                (<Property>this.erasingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), pathVertexPositionToAbsolutePosition(masks[i][1][ii], matte, playhead.getCurrentSecond()));
                (<Property>this.erasingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.erasingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
            }

            (<Property>mask.property("Mask Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);

            playhead.moveFrames(this.handPointMoveDelay);

        }
        playhead.moveFrames(this.handMoveDuration);
        (<Property>this.erasingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        (<Property>this.erasingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.erasingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
    }

    eraseGroup(group: ElementGroup, playhead: Playhead): void {
        group.sort(function (a: Element, b: Element): number {
            let a_int: number = parseInt(a.getName());
            let b_int: number = parseInt(b.getName());

            if (a_int > b_int) {
                return 1;
            } else if (a_int < b_int) {
                return -1;
            } else {
                return 0;
            }
        });

        let defaultHandPosition: [number, number, number] = <[number, number, number]>(<Property>this.erasingHand.property("Position")).valueAtTime(playhead.getCurrentSecond(), true);

        (<Property>this.erasingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        (<Property>this.erasingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.erasingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        playhead.moveFrames(this.handMoveDuration);

        let index = 0;
        for (var i = 0; i < group.length; i++) {
            let element = group.get(i);

            if (isType(element, Element)) {
                if (index != 0) {
                    playhead.moveFrames(this.handPointDelay);
                }

                let [top, left, right, bottom] = getLayerPoints((<Element>element).getLayer(), true, playhead.getCurrentSecond());
                let [width, height] = [right - left, bottom - top];
                (<Property>this.erasingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), [left + (width / 2), top]);
                (<Property>this.erasingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.erasingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
                (<Property>(<Element>element).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
                playhead.moveFrames(this.handMoveDuration);
                (<Property>(<Element>element).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
                (<Property>this.erasingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), [left + (height / 2), bottom]);
                (<Property>this.erasingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.erasingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);

                index++;
            }
        }

        playhead.moveFrames(this.handMoveDuration);
        (<Property>this.erasingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        (<Property>this.erasingHand.property("Position")).setSpatialTangentsAtKey((<Property>this.erasingHand.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
    }

    condition(element: Element | ElementGroup, containerSize: [number, number]): boolean {
        return true;
    }

    createShape(left: number, top: number, width: number, height: number): [Shape, Array<[number, number]>] {
        let shape: Shape = new Shape();
        shape.vertices = [[left, top], [left + width, top], [left + width, top + height], [left, top + height]];
        shape.inTangents = [[0, 0], [0, 0], [0, 0], [0, 0]];
        shape.outTangents = [[0, 0], [0, 0], [0, 0], [0, 0]];

        let points: Array<[number, number]> = new Array<[number, number]>();

        points.push([left + (width / 2), top]);
        points.push([left + (width / 2), top + height]);

        return [shape, points];
    }

    getID(): string {
        return "grider";
    }
}