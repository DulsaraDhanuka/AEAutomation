//@include "../Drawer.js"
//@include "../../utils.js"

class VectorDrawer extends Drawer {
    protected handMoveDuration: number;
    protected animationSpeedFac: number;
    protected masks: Item[];

    constructor(drawingHand: AVLayer, erasingHand: AVLayer) {
        super(drawingHand, erasingHand);

        this.handMoveDuration = 15;
        this.animationSpeedFac = 100;
        this.masks = [];

        let maskFolder: Folder = Folder(File($.fileName).parent.absoluteURI + "/VectorDrawerMasks/");
        let maskFiles: File[] = <File[]>maskFolder.getFiles(function(f) {
            if (f instanceof Folder) {
                return false;
            }

            return true;
        });

        let projectMasks = app.project.items.addFolder("VECTOR_DRAWER_MASKS");
        for (var i = 0; i < maskFiles.length; i++) {
            let mask = importAsset(maskFiles[i].absoluteURI, ImportAsType.FOOTAGE);
            mask.parentFolder = projectMasks;
            this.masks.push(mask);
        }
    }

    drawElement(element: Element, playhead: Playhead): void {
        ;
    }
    
    drawGroup(group: ElementGroup, playhead: Playhead): void {
        let fadeDuration: number = 30;
        if (<ElementProperty>group.getProperties().get("fadeDuration")) {
            fadeDuration = parseInt((<ElementProperty>group.getProperties().get("fadeDuration")).getValue());
        }

        let fadeDelay: number = 0;
        if (<ElementProperty>group.getProperties().get("fadeDelay")) {
            fadeDelay = parseInt((<ElementProperty>group.getProperties().get("fadeDelay")).getValue());
        }

        let hidePrevious: boolean = true;
        if (<ElementProperty>group.getProperties().get("hidePrevious") && (<ElementProperty>group.getProperties().get("hidePrevious")).getValue() == "false") {
            hidePrevious = false;
        }

        let revealType: string = "mask";
        if (<ElementProperty>group.getProperties().get("revealType")) {
            revealType = (<ElementProperty>group.getProperties().get("revealType")).getValue();
        }
        
        let sketchLayer: Element = <Element>group.get("sketch");
        let vectorLayer: Element = <Element>group.get("vector");

        if (sketchLayer != null && vectorLayer != null) {
            let defaultHandPosition: [number, number, number] = <[number, number, number]>(<Property>this.drawingHand.property("Position")).value;
            if ((<Property>this.drawingHand.property("Position")).numKeys > 0) {
                defaultHandPosition = <[number, number, number]>(<Property>this.drawingHand.property("Position")).valueAtTime(playhead.getCurrentSecond(), true);
            }

            (<CompItem>vectorLayer.getComp()).openInViewer();
            (<AVLayer>vectorLayer.getLayer()).selected = true;
            app.executeCommand(app.findMenuCommandId("Create Shapes from Vector Layer"));
            (<AVLayer>vectorLayer.getLayer()).selected = false;
            (<AVLayer>vectorLayer.getLayer()).remove();
            vectorLayer.setLayer(<AVLayer>vectorLayer.getComp().layer(vectorLayer.getRawName() + " Outlines"));
            vectorLayer.getLayer().name = vectorLayer.getRawName();

            (<Property>this.drawingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
            playhead.moveFrames(this.handMoveDuration);

            let pathShapes: PropertyGroup = <PropertyGroup>vectorLayer.getLayer().property("Contents");
            for (var i = 0; i < pathShapes.numProperties; i++) {
                let pathShape: PropertyGroup = <PropertyGroup>pathShapes.property(i + 1);
                (<Property>pathShape.property("Contents").property("Stroke 1").property("Stroke Width")).setValue(10);
                let path: Shape = <Shape>(<Property>pathShape.property("Contents").property("Path 1").property("Path")).value;
                let trimPaths: Property = (<Property>(<PropertyGroup>pathShape.property("Contents")).addProperty("ADBE Vector Filter - Trim"));
                let pathAnimation: AVLayer = this.drawingHand.containingComp.layers.addNull();
                pathAnimation.threeDLayer = true;

                pathAnimation.inPoint = playhead.getCurrentSecond();
                pathAnimation.containingComp.time = playhead.getCurrentSecond();
                app.executeCommand(2004);
                (<Property>pathShape.property("Contents").property("Path 1").property("Path")).selected = true;
                app.executeCommand(19);
                app.executeCommand(2004);
                (<Property>pathAnimation.property("Position")).selected = true;
                app.executeCommand(20);

                let startKeyframe: number = (<Property>pathAnimation.property("Position")).nearestKeyIndex(playhead.getCurrentSecond());
                let endKeyframe: number = (<Property>pathAnimation.property("Position")).numKeys;
                let startKeyframeTime: number = (<Property>pathAnimation.property("Position")).keyTime(startKeyframe);
                let endKeyframeTime: number = (<Property>pathAnimation.property("Position")).keyTime(endKeyframe);
                let offset: [number, number] = [pathVertexPositionToAbsolutePosition(path.vertices[0], vectorLayer.getLayer(), playhead.getCurrentSecond(), pathShape)[0] - (<Property>pathAnimation.property("Position")).keyValue(startKeyframe)[0], pathVertexPositionToAbsolutePosition(path.vertices[0], vectorLayer.getLayer(), playhead.getCurrentSecond(), pathShape)[1] - (<Property>pathAnimation.property("Position")).keyValue(startKeyframe)[1]];
                (<Property>pathAnimation.property("Position")).expression = "[transform.position[0] + " + offset[0] + ", transform.position[1] + " + offset[1] + ", thisComp.layer('" + (<AVLayer>sketchLayer.getLayer()).name + "').transform.position[2]];";
                pathAnimation.outPoint = endKeyframeTime;
                let oldInPoint = pathAnimation.inPoint;
                pathAnimation.stretch = 100;
                pathAnimation.startTime = oldInPoint - pathAnimation.inPoint;
                let pathAnimationStart = pathAnimation.inPoint;
                let pathAnimationEnd = pathAnimation.outPoint;
                (<Property>trimPaths.property("End")).setValueAtTime(playhead.getCurrentSecond(), 0);
                (<Property>this.drawingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), (<Property>pathAnimation.property("Position")).valueAtTime(pathAnimationStart, false));
                playhead.moveSeconds(pathAnimationEnd - pathAnimationStart);
                (<Property>this.drawingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), (<Property>pathAnimation.property("Position")).valueAtTime(pathAnimationEnd, false));
                (<Property>trimPaths.property("End")).setValueAtTime(pathAnimationEnd, 100);
                
                playhead.moveFrames(this.handMoveDuration);

                if ((<Property>this.drawingHand.property("Position")).expression == "") {
                    (<Property>this.drawingHand.property("Position")).expression = "transform.position;";
                }
                (<Property>this.drawingHand.property("Position")).expression = `if(time >= ${pathAnimationStart} && time <= ${pathAnimationEnd}) { comp("${pathAnimation.containingComp.name}").layer("${pathAnimation.name}").transform.position;} else {${(<Property>this.drawingHand.property("Position")).expression}}`;
                pathAnimation.locked = true;
            }
            (<Property>this.drawingHand.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);

            sketchLayer.getLayer().moveAfter(vectorLayer.getLayer());
            sketchLayer.getLayer().trackMatteType = TrackMatteType.ALPHA;
        }

        let colorElements: Array<Element | ElementGroup> = [];
        for (var i = 0; i < group.length; i++) {
            if (group.get(i).getName().search(/color_[0-9]+/) != -1) {
                colorElements.push(group.get(i));
            }
        }

        colorElements.sort(function (a: Element | ElementGroup, b: Element | ElementGroup): number {
            let aIndex: number = parseInt(a.getName().replace("color_", ""));
            let bIndex: number = parseInt(b.getName().replace("color_", ""));

            return aIndex - bIndex;
        });

        this.revealColorLayers(colorElements, playhead, fadeDelay, fadeDuration, revealType, hidePrevious);
    }

    revealColorLayers(colorElements: Array<Element | ElementGroup>, playhead: Playhead, fadeDelay: number, fadeDuration: number, revealType: string, hidePrevious: boolean) {
        for (var i = 0; i < colorElements.length; i++) {
            if (i != 0) {
                playhead.moveFrames(fadeDelay);
            }
            if (isType(colorElements[i], Element)) {
                (<Property>(<Element>colorElements[i]).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
                if (revealType == "mask") {
                    playhead.moveFrames(1);
                } else {
                    playhead.moveFrames(fadeDuration);
                }
                if (i > 0 && hidePrevious && revealType != "mask") {
                    playhead.moveFrames(-1);
                    (<Property>(<Element>colorElements[i - 1]).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
                    playhead.moveFrames(1);
                    (<Property>(<Element>colorElements[i - 1]).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
                }
                (<Property>(<Element>colorElements[i]).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);

                if (revealType == "mask") {
                    let maskLayer = (<CompItem>(<Element>colorElements[i]).getComp()).layers.add(<AVItem>this.masks[Math.floor(Math.random() * this.masks.length)]);
                    maskLayer.threeDLayer = true;
                    maskLayer.moveBefore((<AVLayer>(<Element>colorElements[i]).getLayer()));
                    maskLayer.startTime = playhead.getCurrentSecond();
                    playhead.moveSeconds(maskLayer.outPoint - maskLayer.inPoint);
                    (<AVLayer>(<Element>colorElements[i]).getLayer()).trackMatteType = TrackMatteType.LUMA_INVERTED;
                    playhead.moveFrames(-1);

                    (<Property>maskLayer.property("Position")).expression = `comp("${(<Element>colorElements[i]).getLayer().containingComp.name}").layer("${(<Element>colorElements[i]).getLayer().name.replace(/\"/g, '\\"')}").transform.position`;

                    let colorLayerPosition: [number, number, number, number] = getLayerPoints((<Element>colorElements[i]).getLayer(), true, 0);
                    let colorLayerSize: [number, number] = [colorLayerPosition[1] - colorLayerPosition[2], colorLayerPosition[3] - colorLayerPosition[0]];
                    //let maskPosition: [number, number, number, number] = getLayerPoints(maskLayer, true, 0);
                    //let maskSize: [number, number] = [maskPosition[1] - maskPosition[2], maskPosition[3] - maskPosition[0]];
                    let maskSize: [number, number] = [maskLayer.source.width, maskLayer.source.height];

                    (<Property>maskLayer.property("Scale")).setValue([colorLayerSize[0] / maskSize[0] * 100, colorLayerSize[1] / maskSize[1] * 100, 100]);

                    if (i > 0 && hidePrevious) {
                        (<Property>(<Element>colorElements[i - 1]).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
                        playhead.moveFrames(1);
                        (<Property>(<Element>colorElements[i - 1]).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
                    }
                }
            } else if (isType(colorElements[i], ElementGroup)) {
                let innerColorLayers: Array<Element | ElementGroup> = [];
                for (var ii = 0; ii < (<ElementGroup>colorElements[i]).length; ii++) {
                    innerColorLayers.push((<ElementGroup>colorElements[i]).get(ii));
                }

                innerColorLayers.sort(function(a: Element | ElementGroup, b: Element | ElementGroup): number {
                    let aIndex: number = parseInt(a.getName());
                    let bIndex: number = parseInt(b.getName());

                    return aIndex - bIndex;
                });
                
                this.revealColorLayers(innerColorLayers, playhead, fadeDelay, fadeDuration, revealType, hidePrevious);
            }
        }
    }
    
    eraseElement(element: Element, playhead: Playhead): void {
        ;
    }

    eraseGroup(group: ElementGroup, playhead: Playhead): void {

    }

    condition(element: Element | ElementGroup, containerSize: [number, number]): boolean {
        if (isType(element, ElementGroup)) {
            if ((<ElementGroup>element).get("sketch") != null && (<ElementGroup>element).get("vector") != null) {
                return true;
            }
        }

        return false;
    }

    getID(): string {
        return "sketcher";
    }
}