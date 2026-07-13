//@include "../../Playhead.js"
//@include "../Effect.js"
//@include "../../Element/Element.js"

 class Fall extends Effect {
    getID(): string {
        return "fall";
    }

    applyElement(element: Element, startTime: number, properties: ElementPropertyGroup): number {
        let fallDuration: number = 15;
        if ((<ElementProperty>properties.get("fallDuration")) != null) {
            fallDuration = parseInt((<ElementProperty>properties.get("fallDuration")).getValue());
        }

        let fallAmount: number = 1080;
        if ((<ElementProperty>properties.get("fallAmount")) != null) {
            fallAmount = parseInt((<ElementProperty>properties.get("fallAmount")).getValue());
        }

        let playhead: Playhead = new Playhead(element.getLayer().containingComp.frameRate);
        playhead.moveSeconds(startTime);
        
        let [layerTop, layerLeft, layerRight, layerBottom] = getLayerPoints(element.getLayer(), true, startTime);

        let currentValue: [number, number, number] = <[number, number, number]>(<Property>element.getLayer().property("Position")).valueAtTime(playhead.getCurrentSecond(), true);
        (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentValue);
        (<Property>element.getLayer().property("Position")).setTemporalEaseAtKey((<Property>element.getLayer().property("Position")).numKeys, [new KeyframeEase(0, 0.1)], [new KeyframeEase(35.4199, 100)]);
        (<Property>element.getLayer().property("Position")).setSpatialTangentsAtKey((<Property>element.getLayer().property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        playhead.moveFrames(fallDuration);
        (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), [currentValue[0], currentValue[1] + fallAmount, currentValue[2]]);
        (<Property>element.getLayer().property("Position")).setTemporalEaseAtKey((<Property>element.getLayer().property("Position")).numKeys, [new KeyframeEase(1038.6511, 0.1)], [new KeyframeEase(0, 0.1)]);
        (<Property>element.getLayer().property("Position")).setSpatialTangentsAtKey((<Property>element.getLayer().property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);

        return playhead.getCurrentSecond()-startTime;
    }

    applyElementGroup(group: ElementGroup, startTime: number, properties: ElementPropertyGroup): number {
        group.sort(function (e1: Element | ElementGroup, e2: Element | ElementGroup) {
            let n1 = parseInt(e1.getName());
            let n2 = parseInt(e2.getName());
            return n1 - n2;
        });

        let groupPlayhead = new Playhead(group.getComp().frameRate);
        groupPlayhead.moveSeconds(startTime);

        let $this = this;
        group.iterate(function(element: Element) {
            let frames: number = groupPlayhead.secondsToFrames($this.applyElement(element, groupPlayhead.getCurrentSecond(), properties));
            groupPlayhead.moveFrames(frames+getRandomInt(-12, -7));
        }, true);

        return groupPlayhead.getCurrentSecond()-startTime;
    }
}