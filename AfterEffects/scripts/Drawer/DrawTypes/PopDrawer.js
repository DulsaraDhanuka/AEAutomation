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
var PopDrawer = /** @class */ (function (_super) {
    __extends(PopDrawer, _super);
    function PopDrawer(drawingHand, erasingHand) {
        var _this = _super.call(this, drawingHand, erasingHand) || this;
        _this.animationDuration = .3;
        return _this;
    }
    PopDrawer.prototype.drawElement = function (element, playhead) {
        element.getLayer().property("Scale").setValueAtTime(playhead.getCurrentSecond(), [0, 0, 0]);
        element.getLayer().property("Scale").setValueAtTime(playhead.getCurrentSecond() + this.animationDuration * 0.8, [105, 105, 105]);
        playhead.moveSeconds(this.animationDuration);
        element.getLayer().property("Scale").setValueAtTime(playhead.getCurrentSecond(), [100, 100, 100]);
    };
    PopDrawer.prototype.drawGroup = function (group, playhead) {
        var _a = getGroupBoundaries(group, true, playhead.getCurrentSecond()), groupTop = _a[0], groupLeft = _a[1], groupRight = _a[2], groupBottom = _a[3];
        var _b = [groupLeft + ((groupRight - groupLeft) / 2), groupTop + ((groupBottom - groupTop) / 2)], groupXCenter = _b[0], groupYCenter = _b[1];
        var groupDepth = getGroupDepthAverage(group, true, playhead.getCurrentSecond());
        var elementTime = 0;
        var animationDuration = 0;
        group.iterate(function (element) {
            var elementPlayhead = new Playhead(playhead.fps);
            elementPlayhead.moveFrames(playhead.getCurrentFrame());
            var currentAnchorPointPos = element.getLayer().property("Anchor Point").valueAtTime(elementPlayhead.getCurrentSecond(), true);
            var currentPosition = element.getLayer().property("Position").valueAtTime(elementPlayhead.getCurrentSecond(), true);
            element.getLayer().property("Anchor Point").setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            element.getLayer().property("Position").setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementPlayhead.moveFrames(1);
            var _a = [groupXCenter - currentPosition[0], groupYCenter - currentPosition[1], groupDepth - currentPosition[2]], xChange = _a[0], yChange = _a[1], zChange = _a[2];
            element.getLayer().property("Anchor Point").setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            element.getLayer().property("Position").setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);
            element.getLayer().property("Scale").setValueAtTime(elementPlayhead.getCurrentSecond(), [0, 0, 0]);
            element.getLayer().property("Scale").setValueAtTime(elementPlayhead.getCurrentSecond() + animationDuration * 0.8, [105, 105, 105]);
            elementPlayhead.moveSeconds(animationDuration);
            element.getLayer().property("Scale").setValueAtTime(elementPlayhead.getCurrentSecond(), [100, 100, 100]);
            element.getLayer().property("Anchor Point").setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            element.getLayer().property("Position").setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);
            elementPlayhead.moveFrames(1);
            element.getLayer().property("Anchor Point").setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            element.getLayer().property("Position").setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementTime = elementPlayhead.getCurrentFrame() - playhead.getCurrentFrame();
        }, true);
    };
    PopDrawer.prototype.eraseElement = function (element, playhead) {
        element.getLayer().property("Scale").setValueAtTime(playhead.getCurrentSecond(), [100, 100, 100]);
        element.getLayer().property("Scale").setValueAtTime(playhead.getCurrentSecond() + this.animationDuration * 0.8, [105, 105, 105]);
        playhead.moveSeconds(this.animationDuration);
        element.getLayer().property("Scale").setValueAtTime(playhead.getCurrentSecond(), [0, 0, 0]);
    };
    PopDrawer.prototype.eraseGroup = function (group, playhead) {
        var _a = getGroupBoundaries(group, true, playhead.getCurrentSecond()), groupTop = _a[0], groupLeft = _a[1], groupRight = _a[2], groupBottom = _a[3];
        var _b = [groupLeft + ((groupRight - groupLeft) / 2), groupTop + ((groupBottom - groupTop) / 2)], groupXCenter = _b[0], groupYCenter = _b[1];
        var groupDepth = getGroupDepthAverage(group, true, playhead.getCurrentSecond());
        var elementTime = 0;
        var animationDuration = this.animationDuration;
        group.iterate(function (element) {
            var elementPlayhead = new Playhead(playhead.fps);
            elementPlayhead.moveFrames(playhead.getCurrentFrame());
            var currentAnchorPointPos = element.getLayer().property("Anchor Point").valueAtTime(elementPlayhead.getCurrentSecond(), true);
            var currentPosition = element.getLayer().property("Position").valueAtTime(elementPlayhead.getCurrentSecond(), true);
            element.getLayer().property("Anchor Point").setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            element.getLayer().property("Position").setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementPlayhead.moveFrames(1);
            var _a = [groupXCenter - currentPosition[0], groupYCenter - currentPosition[1], groupDepth - currentPosition[2]], xChange = _a[0], yChange = _a[1], zChange = _a[2];
            element.getLayer().property("Anchor Point").setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            element.getLayer().property("Position").setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);
            element.getLayer().property("Scale").setValueAtTime(elementPlayhead.getCurrentSecond(), [100, 100, 100]);
            elementPlayhead.moveSeconds(animationDuration);
            element.getLayer().property("Scale").setValueAtTime(elementPlayhead.getCurrentSecond(), [0, 0, 0]);
            element.getLayer().property("Scale").setValueAtTime(elementPlayhead.getCurrentSecond() + animationDuration * 0.8, [105, 105, 105]);
            element.getLayer().property("Anchor Point").setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            element.getLayer().property("Position").setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);
            elementPlayhead.moveFrames(1);
            element.getLayer().property("Anchor Point").setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            element.getLayer().property("Position").setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementTime = elementPlayhead.getCurrentFrame() - playhead.getCurrentFrame();
        }, true);
    };
    PopDrawer.prototype.condition = function (element, containerSize) {
        return true;
    };
    PopDrawer.prototype.validateOptions = function (element) {
        var direction = "bottom";
        if (element.getProperties().get("direction")) {
            direction = element.getProperties().get("direction").getValue();
        }
        return direction;
    };
    PopDrawer.prototype.getID = function () {
        return "pop";
    };
    return PopDrawer;
}(Drawer));
