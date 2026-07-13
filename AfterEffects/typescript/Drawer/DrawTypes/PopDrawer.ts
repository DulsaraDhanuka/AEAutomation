//@include "../Drawer.js"
//@include "../../utils.js"

class PopDrawer extends Drawer {
    animationDuration: number = .3;

    constructor(drawingHand: AVLayer, erasingHand: AVLayer) {
        super(drawingHand, erasingHand);
    }

    drawElement(element: Element, playhead: Playhead): void {
        (<Property>element.getLayer().property("Scale")).setValueAtTime(playhead.getCurrentSecond(), [0, 0, 0]);
        (<Property>element.getLayer().property("Scale")).setValueAtTime(playhead.getCurrentSecond()+this.animationDuration*0.8, [105, 105, 105]);
        playhead.moveSeconds(this.animationDuration);
        (<Property>element.getLayer().property("Scale")).setValueAtTime(playhead.getCurrentSecond(), [100, 100, 100]);
    }

    drawGroup(group: ElementGroup, playhead: Playhead): void {
        let [groupTop, groupLeft, groupRight, groupBottom]: [number, number, number, number] = getGroupBoundaries(group, true, playhead.getCurrentSecond());
        let [groupXCenter, groupYCenter]: [number, number] = [groupLeft + ((groupRight - groupLeft) / 2), groupTop + ((groupBottom - groupTop) / 2)];
        let groupDepth = getGroupDepthAverage(group, true, playhead.getCurrentSecond());
        let elementTime: number = 0;
        let animationDuration: number = 0;

        group.iterate(function(element: Element) {
            let elementPlayhead = new Playhead(playhead.fps);
            elementPlayhead.moveFrames(playhead.getCurrentFrame());

            let currentAnchorPointPos: [number, number, number] = <[number, number, number]>(<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).valueAtTime(elementPlayhead.getCurrentSecond(), true);
            let currentPosition: [number, number, number] = <[number, number, number]>(<Property>(<AVLayer>element.getLayer()).property("Position")).valueAtTime(elementPlayhead.getCurrentSecond(), true);
            (<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementPlayhead.moveFrames(1);
            let [xChange, yChange, zChange]: [number, number, number] = [groupXCenter - currentPosition[0], groupYCenter - currentPosition[1], groupDepth - currentPosition[2]];
            (<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);



            (<Property>element.getLayer().property("Scale")).setValueAtTime(elementPlayhead.getCurrentSecond(), [0, 0, 0]);
            (<Property>element.getLayer().property("Scale")).setValueAtTime(elementPlayhead.getCurrentSecond()+animationDuration*0.8, [105, 105, 105]);
            elementPlayhead.moveSeconds(animationDuration);
            (<Property>element.getLayer().property("Scale")).setValueAtTime(elementPlayhead.getCurrentSecond(), [100, 100, 100]);


            
            (<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);
            elementPlayhead.moveFrames(1);
            (<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementTime = elementPlayhead.getCurrentFrame() - playhead.getCurrentFrame();
        }, true);
    }

    eraseElement(element: Element, playhead: Playhead): void {
        (<Property>element.getLayer().property("Scale")).setValueAtTime(playhead.getCurrentSecond(), [100, 100, 100]);
        (<Property>element.getLayer().property("Scale")).setValueAtTime(playhead.getCurrentSecond()+this.animationDuration*0.8, [105, 105, 105]);
        playhead.moveSeconds(this.animationDuration);
        (<Property>element.getLayer().property("Scale")).setValueAtTime(playhead.getCurrentSecond(), [0, 0, 0]);
    }

    eraseGroup(group: ElementGroup, playhead: Playhead): void {
        let [groupTop, groupLeft, groupRight, groupBottom]: [number, number, number, number] = getGroupBoundaries(group, true, playhead.getCurrentSecond());
        let [groupXCenter, groupYCenter]: [number, number] = [groupLeft + ((groupRight - groupLeft) / 2), groupTop + ((groupBottom - groupTop) / 2)];
        let groupDepth = getGroupDepthAverage(group, true, playhead.getCurrentSecond());
        let elementTime: number = 0;
        let animationDuration: number = this.animationDuration;
        group.iterate(function(element: Element) {
            let elementPlayhead = new Playhead(playhead.fps);
            elementPlayhead.moveFrames(playhead.getCurrentFrame());

            let currentAnchorPointPos: [number, number, number] = <[number, number, number]>(<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).valueAtTime(elementPlayhead.getCurrentSecond(), true);
            let currentPosition: [number, number, number] = <[number, number, number]>(<Property>(<AVLayer>element.getLayer()).property("Position")).valueAtTime(elementPlayhead.getCurrentSecond(), true);
            (<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementPlayhead.moveFrames(1);
            let [xChange, yChange, zChange]: [number, number, number] = [groupXCenter - currentPosition[0], groupYCenter - currentPosition[1], groupDepth - currentPosition[2]];
            (<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);



            (<Property>element.getLayer().property("Scale")).setValueAtTime(elementPlayhead.getCurrentSecond(), [100, 100, 100]);
            elementPlayhead.moveSeconds(animationDuration);
            (<Property>element.getLayer().property("Scale")).setValueAtTime(elementPlayhead.getCurrentSecond(), [0, 0, 0]);
            (<Property>element.getLayer().property("Scale")).setValueAtTime(elementPlayhead.getCurrentSecond()+animationDuration*0.8, [105, 105, 105]);


            
            (<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);
            elementPlayhead.moveFrames(1);
            (<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementTime = elementPlayhead.getCurrentFrame() - playhead.getCurrentFrame();
        }, true);
    }

    condition(element: Element | ElementGroup, containerSize: [number, number]): boolean {
        return true;
    }

    validateOptions(element: Element | ElementGroup): string {
        let direction = "bottom";

        if (element.getProperties().get("direction")) {
            direction = (<ElementProperty>element.getProperties().get("direction")).getValue();
        }

        return direction;
    }

    getID(): string {
        return "pop";
    }
}