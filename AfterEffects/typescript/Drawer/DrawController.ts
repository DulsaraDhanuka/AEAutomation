//@include "./DrawTypes/NoneDrawer.js"
//@include "./DrawTypes/Fader.js"
//@include "./DrawTypes/VectorDrawer.js"
//@include "./DrawTypes/GridDrawer.js"
//@include "./DrawTypes/PopDrawer.js"
//@include "./DrawTypes/Pusher.js"

class DrawController {
    protected drawers: Array<Drawer>;
    protected playhead: Playhead;
    protected containerSize: [number, number];

    constructor(playhead: Playhead, containerSize: [number, number], hands: { drawingHand, BTT_pushing_Hand, TTB_pushing_Hand, LTR_pushing_Hand, RTL_pushing_Hand, erasingHand, highlightingHand }) {
        this.playhead = playhead;
        this.containerSize = containerSize;

        this.drawers = new Array<Drawer>();
        //this.drawers.push(new PusherController(hands.BTT_pushing_Hand, hands.TTB_pushing_Hand, hands.LTR_pushing_Hand, hands.RTL_pushing_Hand));
        this.drawers.push(new Fader(hands.drawingHand, hands.erasingHand));
        this.drawers.push(new VectorDrawer(hands.drawingHand, hands.erasingHand));
        this.drawers.push(new NoneDrawer(hands.drawingHand, hands.erasingHand));
        this.drawers.push(new GridDrawer(hands.drawingHand, hands.erasingHand));

        /*this.drawers.push(new BottomToTopPusher(hands.BTT_pushing_Hand, hands.BTT_pushing_Hand));
        this.drawers.push(new TopToBottomPusher(hands.TTB_pushing_Hand, hands.TTB_pushing_Hand));
        this.drawers.push(new LeftToRightPusher(hands.LTR_pushing_Hand, hands.LTR_pushing_Hand));
        this.drawers.push(new RightToLeftPusher(hands.RTL_pushing_Hand, hands.RTL_pushing_Hand));*/
        this.drawers.push(new Pusher([hands.BTT_pushing_Hand, hands.TTB_pushing_Hand, hands.LTR_pushing_Hand, hands.RTL_pushing_Hand]));

        this.drawers.push(new PopDrawer(hands.drawingHand, hands.erasingHand));
    }

    draw(element: Element | ElementGroup, drawerID: string = null): void {
        let drawer: Drawer = null;
        if (drawerID != null) {
            drawer = this.getDrawerName(drawerID);
        }

        if (!drawer) {
            drawer = this.getDrawer(element);
        }

        if (drawer) {
            drawer.draw(element, this.playhead);
        }
    }

    erase(element: Element | ElementGroup, drawerID: string = null): void {
        let drawer: Drawer = null;
        if (drawerID != null) {
            drawer = this.getDrawerName(drawerID);
        }

        if (!drawer) {
            drawer = this.getDrawer(element);
        }

        if (drawer) {
            drawer.erase(element, this.playhead);
        }
    }

    getDrawer(element: Element | ElementGroup): Drawer {
        for (var i = 0; i < this.drawers.length; i++) {
            if (this.drawers[i].condition(element, this.containerSize)) {
                return this.drawers[i];
            }
        }

        return null;
    }

    getDrawerName(id: string): Drawer {
        for (var i = 0; i < this.drawers.length; i++) {
            if (this.drawers[i].getID() == id) {
                return this.drawers[i];
            }
        }

        return null;
    }
}