//@include "./DrawTypes/NoneDrawer.js"
//@include "./DrawTypes/Fader.js"
//@include "./DrawTypes/VectorDrawer.js"
//@include "./DrawTypes/GridDrawer.js"
//@include "./DrawTypes/PopDrawer.js"
//@include "./DrawTypes/Pusher.js"
var DrawController = /** @class */ (function () {
    function DrawController(playhead, containerSize, hands) {
        this.playhead = playhead;
        this.containerSize = containerSize;
        this.drawers = new Array();
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
    DrawController.prototype.draw = function (element, drawerID) {
        if (drawerID === void 0) { drawerID = null; }
        var drawer = null;
        if (drawerID != null) {
            drawer = this.getDrawerName(drawerID);
        }
        if (!drawer) {
            drawer = this.getDrawer(element);
        }
        if (drawer) {
            drawer.draw(element, this.playhead);
        }
    };
    DrawController.prototype.erase = function (element, drawerID) {
        if (drawerID === void 0) { drawerID = null; }
        var drawer = null;
        if (drawerID != null) {
            drawer = this.getDrawerName(drawerID);
        }
        if (!drawer) {
            drawer = this.getDrawer(element);
        }
        if (drawer) {
            drawer.erase(element, this.playhead);
        }
    };
    DrawController.prototype.getDrawer = function (element) {
        for (var i = 0; i < this.drawers.length; i++) {
            if (this.drawers[i].condition(element, this.containerSize)) {
                return this.drawers[i];
            }
        }
        return null;
    };
    DrawController.prototype.getDrawerName = function (id) {
        for (var i = 0; i < this.drawers.length; i++) {
            if (this.drawers[i].getID() == id) {
                return this.drawers[i];
            }
        }
        return null;
    };
    return DrawController;
}());
