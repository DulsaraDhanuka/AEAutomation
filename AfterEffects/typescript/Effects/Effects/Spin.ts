//@include "../../Playhead.js"
//@include "../Effect.js"
//@include "../../Element/Element.js"

class Spin extends Effect {
    getID(): string {
        return "spin";
    }

    applyElement(element: Element, startTime: number, properties: ElementPropertyGroup): number {
        let spinDuration: number = 15;
        if ((<ElementProperty>properties.get("spinDuration")) != null) {
            spinDuration = parseInt((<ElementProperty>properties.get("spinDuration")).getValue());
        }

        let spinTo: number = 90;
        if ((<ElementProperty>properties.get("spinTo")) != null) {
            spinTo = parseInt((<ElementProperty>properties.get("spinTo")).getValue());
        }

        let playhead: Playhead = new Playhead(element.getLayer().containingComp.frameRate);
        playhead.moveSeconds(startTime);
        
        let [layerTop, layerLeft, layerRight, layerBottom] = getLayerPoints(element.getLayer(), true, startTime);

        let currentValue: number = <number>(<Property>element.getLayer().property("Rotation")).valueAtTime(playhead.getCurrentSecond(), true);
        (<Property>element.getLayer().property("Rotation")).setValueAtTime(playhead.getCurrentSecond(), currentValue);
        playhead.moveFrames(spinDuration);
        (<Property>element.getLayer().property("Rotation")).setValueAtTime(playhead.getCurrentSecond(), spinTo);

        return playhead.getCurrentSecond()-startTime;
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
}