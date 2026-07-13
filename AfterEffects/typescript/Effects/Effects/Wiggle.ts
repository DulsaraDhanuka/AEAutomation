//@include "../../Playhead.js"
//@include "../Effect.js"
//@include "../../Element/Element.js"

class Wiggle extends Effect {
    getID(): string {
        return "wiggle";
    }

    applyHelper(element: Element, properties: ElementPropertyGroup): [Property[], string, number[], number, number] {
        let wiggleType: string = "position";
        let dims: number[] = [1];
        let amp: number = 0;
        let freq: number = 0;

        if ((<ElementProperty>properties.get("wiggleType")) != null) {
            wiggleType = (<ElementProperty>properties.get("wiggleType")).getValue();

            if (wiggleType == "rotation") {
                dims = [2];
                freq = 5;
                amp = 5;
            } else if (wiggleType == "position") {
                amp = 5;
                freq = 5;
            }
        }

        if ((<ElementProperty>properties.get("wiggleDims")) != null) {
            let dimsStr = (<string>(<ElementProperty>properties.get("wiggleDims")).getValue()).replace(/ /g, "").split(",");

            for (var i = 0; i < dimsStr.length; i++) {
                if (dimsStr[i] == "x") {
                    dims.push(0);
                } else if (dimsStr[i] == "y") {
                    dims.push(1);
                } else if (dimsStr[i] == "z") {
                    dims.push(2);
                }
            }
        }

        if ((<ElementProperty>properties.get("wiggleAmp")) != null) {
            amp = parseFloat((<ElementProperty>properties.get("wiggleAmp")).getValue());
        }

        if ((<ElementProperty>properties.get("wiggleAmount")) != null) {
            amp = parseFloat((<ElementProperty>properties.get("wiggleAmount")).getValue());
        }

        
        if ((<ElementProperty>properties.get("wiggleFreq")) != null) {
            freq = parseFloat((<ElementProperty>properties.get("wiggleFreq")).getValue());
        }


        /*let [layerTop, layerLeft, layerRight, layerBottom] = getLayerPoints(layer, true, startTime);
        let [layerWidth, layerHeight] = [layerRight - layerLeft, layerBottom - layerTop];
        (<Property>layer.property("Anchor Point")).setValue([layerWidth/2, layerHeight, (<Property>layer.property("Anchor Point")).value[2]]);*/


        let props: Property[] = this.getPropsToBeChanged(element, wiggleType, dims);

        return [props, wiggleType, dims, freq, amp];
    }

    getPropsToBeChanged(element: Element | ElementGroup, wiggleType: string, dims: number[]): Property[] {
        let props: Property[] = [];
        
        if (wiggleType == "position") {
            if (isType(element, Element)) {
                (<Property>(<Element>element).getLayer().property("Position")).dimensionsSeparated = true;
            } else if (isType(element, ElementGroup)) {
                let group: ElementGroup = (<ElementGroup>element);
                group.iterate(function(ele: Element) {
                    (<Property>ele.getLayer().property("Position")).dimensionsSeparated = true;
                }, true);
            }

            for (var i = 0; i < dims.length; i++) {
                let dim: number = dims[i];

                
                if (isType(element, Element)) {
                    props.push((<Property>(<Element>element).getLayer().property("Position")).getSeparationFollower(dim));
                } else if (isType(element, ElementGroup)) {
                    let group: ElementGroup = (<ElementGroup>element);
                    group.iterate(function(ele: Element) {
                        props.push((<Property>ele.getLayer().property("Position")).getSeparationFollower(dim));
                    }, true);
                }
            }
        } else if (wiggleType == "rotation") {
            for (var i = 0; i < dims.length; i++) {
                let dim: number = dims[i];
                let rotDims: string[] = ["X", "Y", "Z"];
                if (isType(element, Element)) {
                    props.push((<Property>(<Element>element).getLayer().property(rotDims[dim] + " Rotation")));
                } else if (isType(element, ElementGroup)) {
                    let group: ElementGroup = (<ElementGroup>element);
                    group.iterate(function(ele: Element) {
                        props.push((<Property>ele.getLayer().property(rotDims[dim] + " Rotation")));
                    }, true);
                }
            }
        }

        return props;
    }

    revertChanges(element: Element | ElementGroup, wiggleType: string): void {
        if (wiggleType == "position") {
            if (isType(element, Element)) {
                (<Property>(<Element>element).getLayer().property("Position")).dimensionsSeparated = false;
            } else if (isType(element, ElementGroup)) {
                let group: ElementGroup = (<ElementGroup>element);
                group.iterate(function(ele: Element) {
                    (<Property>ele.getLayer().property("Position")).dimensionsSeparated = false;
                }, true);
            }
        } else if (wiggleType == "rotation") {
            
        }
    }

    applyElement(element: Element, startTime: number, properties: ElementPropertyGroup): number {
        let layer: AVLayer = element.getLayer();
        let [props, wiggleType, dims, freq, amp] = this.applyHelper(element, properties);

        let animationPlayhead = new Playhead(layer.containingComp.frameRate);
        animationPlayhead.moveSeconds(startTime);

        for (var i = 0; i < props.length; i++) {
            let prop: Property = props[i];

            //prop.expression = "wiggle(" + freq + ", " + amp + ");";
            wiggle(layer, prop, freq, amp, animationPlayhead.getCurrentSecond());
        }

        this.revertChanges(element, wiggleType);

        return animationPlayhead.getCurrentSecond()-startTime;
    }

    applyElementGroup(group: ElementGroup, startTime: number, properties: ElementPropertyGroup): number {
        let animationPlayhead = new Playhead(group.getComp().frameRate);
        animationPlayhead.moveSeconds(startTime);

        let [groupTop, groupLeft, groupRight, groupBottom]: [number, number, number, number] = getGroupBoundaries(group, true, animationPlayhead.getCurrentSecond());
        let [groupXCenter, groupYCenter]: [number, number] = [groupLeft + ((groupRight - groupLeft) / 2), groupTop + ((groupBottom - groupTop) / 2)];
        let groupDepth = getGroupDepthAverage(group, true, animationPlayhead.getCurrentSecond());

        let elementPlayheadframes: number = 0;
        let $this = this;
        group.iterate(function(element: Element) {
            let elementPlayhead: Playhead = new Playhead(animationPlayhead.fps);
            elementPlayhead.moveFrames(animationPlayhead.getCurrentFrame());
            let currentAnchorPointPos: [number, number, number] = <[number, number, number]>(<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).valueAtTime(animationPlayhead.getCurrentSecond(), true);
            let currentPosition: [number, number, number] = <[number, number, number]>(<Property>(<AVLayer>element.getLayer()).property("Position")).valueAtTime(animationPlayhead.getCurrentSecond(), true);
            (<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementPlayhead.moveFrames(1);
            let [xChange, yChange, zChange]: [number, number, number] = [groupXCenter - currentPosition[0], groupYCenter - currentPosition[1], groupDepth - currentPosition[2]];
            (<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);

            elementPlayhead.moveSeconds($this.applyElement(element, elementPlayhead.getCurrentSecond(), properties));

            /*(<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);
            elementPlayhead.moveFrames(1);
            (<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementPlayheadframes = elementPlayhead.getCurrentFrame() - animationPlayhead.getCurrentFrame();*/
        }, true);
        $this = undefined;
        animationPlayhead.moveFrames(elementPlayheadframes);

        return animationPlayhead.getCurrentSecond()-startTime;
    }

    pauseElement(element: Element, time: number, properties: ElementPropertyGroup): void {}
    pauseElementGroup(element: ElementGroup, time: number, properties: ElementPropertyGroup): void {}
}