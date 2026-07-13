abstract class Drawer {
    protected drawingHand: AVLayer;
    protected erasingHand: AVLayer;

    constructor(drawingHand: AVLayer, erasingHand: AVLayer) {
        this.drawingHand = drawingHand;
        this.erasingHand = erasingHand;
    }

    draw(element: Element | ElementGroup, playhead: Playhead) : void {
        if (isType(element, Element)) {
            this.drawElement(<Element>element, playhead);
        } else if (isType(element, ElementGroup)) {
            this.drawGroup(<ElementGroup>element, playhead);
        }
    }

    erase(element: Element | ElementGroup, playhead: Playhead) : void {
        if (isType(element, Element)) {
            this.eraseElement(<Element>element, playhead);
        } else if (isType(element, ElementGroup)) {
            this.eraseGroup(<ElementGroup>element, playhead);
        }
    }

    abstract drawElement(element: Element | ElementGroup, playhead: Playhead) : void;
    abstract eraseElement(element: Element | ElementGroup, playhead: Playhead) : void;
    abstract drawGroup(element: ElementGroup, playhead: Playhead) : void;
    abstract eraseGroup(element: ElementGroup, playhead: Playhead) : void;
    abstract condition(element: Element | ElementGroup, containerSize: [number, number]): boolean;
    abstract getID(): string;
}