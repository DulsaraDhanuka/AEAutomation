//@include "../Drawer.js"
//@include "../../utils.js"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NoneDrawer = /** @class */ (function (_super) {
    __extends(NoneDrawer, _super);
    function NoneDrawer(drawingHand, erasingHand) {
        return _super.call(this, drawingHand, erasingHand) || this;
    }
    NoneDrawer.prototype.drawElement = function (element, playhead) {
        element.getLayer().property("Opacity").setValue(100);
    };
    NoneDrawer.prototype.drawGroup = function (group, playhead) {
        group.iterate(function (element) {
            element.getLayer().property("Opacity").setValue(100);
        }, true);
    };
    NoneDrawer.prototype.eraseElement = function (element, playhead) {
        element.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
        playhead.moveFrames(1);
        element.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
    };
    NoneDrawer.prototype.eraseGroup = function (group, playhead) {
        group.iterate(function (element) {
            element.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
        }, true);
        playhead.moveFrames(1);
        group.iterate(function (element) {
            element.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
        }, true);
    };
    NoneDrawer.prototype.condition = function (element, containerSize) {
        return false;
    };
    NoneDrawer.prototype.getID = function () {
        return "none";
    };
    return NoneDrawer;
}(Drawer));
