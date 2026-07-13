var Drawer = /** @class */ (function () {
    function Drawer(drawingHand, erasingHand) {
        this.drawingHand = drawingHand;
        this.erasingHand = erasingHand;
    }
    Drawer.prototype.draw = function (element, playhead) {
        if (isType(element, Element)) {
            this.drawElement(element, playhead);
        }
        else if (isType(element, ElementGroup)) {
            this.drawGroup(element, playhead);
        }
    };
    Drawer.prototype.erase = function (element, playhead) {
        if (isType(element, Element)) {
            this.eraseElement(element, playhead);
        }
        else if (isType(element, ElementGroup)) {
            this.eraseGroup(element, playhead);
        }
    };
    return Drawer;
}());
