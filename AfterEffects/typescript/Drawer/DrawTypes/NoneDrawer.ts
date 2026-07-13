//@include "../Drawer.js"
//@include "../../utils.js"

class NoneDrawer extends Drawer {
    constructor(drawingHand: AVLayer, erasingHand: AVLayer) {
        super(drawingHand, erasingHand);
    }

    drawElement(element: Element, playhead: Playhead): void {
        (<Property>element.getLayer().property("Opacity")).setValue(100);
    }

    drawGroup(group: ElementGroup, playhead: Playhead): void {
        group.iterate(function (element: Element) {
            (<Property>element.getLayer().property("Opacity")).setValue(100);
        }, true);
    }

    eraseElement(element: Element, playhead: Playhead): void {
        (<Property>element.getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
        playhead.moveFrames(1);
        (<Property>element.getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);        
    }

    eraseGroup(group: ElementGroup, playhead: Playhead): void {
        group.iterate(function (element: Element) {
            (<Property>element.getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
        }, true);
        playhead.moveFrames(1);
        group.iterate(function (element: Element) {
            (<Property>element.getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
        }, true);        
    }

    condition(element: Element | ElementGroup, containerSize: [number, number]): boolean {
        return false;
    }

    getID(): string {
        return "none";
    }
}