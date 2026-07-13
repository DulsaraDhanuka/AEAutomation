//@include "../../Playhead.js"
//@include "../Effect.js"
//@include "../../Element/Element.js"

class Zoom extends Effect {
    getID(): string {
        return "zoom";
    }

    applyElement(element: Element, startTime: number, properties: ElementPropertyGroup): number {
        let playhead: Playhead = new Playhead(element.getLayer().containingComp.frameRate);
        playhead.moveSeconds(startTime);

        let zoomValue: [number, number, number] = [150, 150, 150];
        let zoomDuration: number = 15;

        if ((<ElementProperty>properties.get("zoomValue")) != null) {
            let zoomValueProp: string = (<ElementProperty>properties.get("zoomValue")).getValue();
            let arrayPattern: RegExp = /\[\s?[0-9]+\s?,\s?[0-9]+\s?,\s?[0-9]+\s?\]/g;

            if (arrayPattern.test(zoomValueProp)) {
                zoomValue = eval(zoomValueProp);
            } else {
                zoomValue = [parseInt(zoomValueProp), parseInt(zoomValueProp), parseInt(zoomValueProp)]
            }
        }

        let currentValue: [number, number, number] = <[number, number, number]>(<Property>element.getLayer().property("Scale")).value;
        if ((<Property>element.getLayer().property("Scale")).numKeys > 0) {
            currentValue = <[number, number, number]>(<Property>element.getLayer().property("Scale")).valueAtTime(playhead.getCurrentSecond(), true);
        }
        (<Property>element.getLayer().property("Scale")).setValueAtTime(playhead.getCurrentSecond(), currentValue);
        playhead.moveFrames(zoomDuration);
        (<Property>element.getLayer().property("Scale")).setValueAtTime(playhead.getCurrentSecond(), zoomValue);

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
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);*/
            elementPlayheadframes = elementPlayhead.getCurrentFrame() - animationPlayhead.getCurrentFrame();
        }, true);
        $this = undefined;
        animationPlayhead.moveFrames(elementPlayheadframes);

        return animationPlayhead.getCurrentSecond()-startTime;
    }

    pauseElement(element: Element, time: number, properties: ElementPropertyGroup): void {}
    pauseElementGroup(element: ElementGroup, time: number, properties: ElementPropertyGroup): void {}
}