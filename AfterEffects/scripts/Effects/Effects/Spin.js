//@include "../../Playhead.js"
//@include "../Effect.js"
//@include "../../Element/Element.js"
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
var Spin = /** @class */ (function (_super) {
    __extends(Spin, _super);
    function Spin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spin.prototype.getID = function () {
        return "spin";
    };
    Spin.prototype.applyElement = function (element, startTime, properties) {
        var spinDuration = 15;
        if (properties.get("spinDuration") != null) {
            spinDuration = parseInt(properties.get("spinDuration").getValue());
        }
        var spinTo = 90;
        if (properties.get("spinTo") != null) {
            spinTo = parseInt(properties.get("spinTo").getValue());
        }
        var playhead = new Playhead(element.getLayer().containingComp.frameRate);
        playhead.moveSeconds(startTime);
        var _a = getLayerPoints(element.getLayer(), true, startTime), layerTop = _a[0], layerLeft = _a[1], layerRight = _a[2], layerBottom = _a[3];
        var currentValue = element.getLayer().property("Rotation").valueAtTime(playhead.getCurrentSecond(), true);
        element.getLayer().property("Rotation").setValueAtTime(playhead.getCurrentSecond(), currentValue);
        playhead.moveFrames(spinDuration);
        element.getLayer().property("Rotation").setValueAtTime(playhead.getCurrentSecond(), spinTo);
        return playhead.getCurrentSecond() - startTime;
    };
    Spin.prototype.applyElementGroup = function (group, startTime, properties) {
        var animationPlayhead = new Playhead(group.getComp().frameRate);
        animationPlayhead.moveSeconds(startTime);
        var _a = getGroupBoundaries(group, true, animationPlayhead.getCurrentSecond()), groupTop = _a[0], groupLeft = _a[1], groupRight = _a[2], groupBottom = _a[3];
        var _b = [groupLeft + ((groupRight - groupLeft) / 2), groupTop + ((groupBottom - groupTop) / 2)], groupXCenter = _b[0], groupYCenter = _b[1];
        var groupDepth = getGroupDepthAverage(group, true, animationPlayhead.getCurrentSecond());
        var elementPlayheadframes = 0;
        var $this = this;
        group.iterate(function (element) {
            var elementPlayhead = new Playhead(animationPlayhead.fps);
            elementPlayhead.moveFrames(animationPlayhead.getCurrentFrame());
            var currentAnchorPointPos = element.getLayer().property("Anchor Point").valueAtTime(animationPlayhead.getCurrentSecond(), true);
            var currentPosition = element.getLayer().property("Position").valueAtTime(animationPlayhead.getCurrentSecond(), true);
            element.getLayer().property("Anchor Point").setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            element.getLayer().property("Position").setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementPlayhead.moveFrames(1);
            var _a = [groupXCenter - currentPosition[0], groupYCenter - currentPosition[1], groupDepth - currentPosition[2]], xChange = _a[0], yChange = _a[1], zChange = _a[2];
            element.getLayer().property("Anchor Point").setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            element.getLayer().property("Position").setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);
            elementPlayhead.moveSeconds($this.applyElement(element, elementPlayhead.getCurrentSecond(), properties));
            /*(<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);
            elementPlayhead.moveFrames(1);
            (<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementPlayheadframes = elementPlayhead.getCurrentFrame() - animationPlayhead.getCurrentFrame();*/
        }, true);
        $this = undefined;
        animationPlayhead.moveFrames(elementPlayheadframes);
        return animationPlayhead.getCurrentSecond() - startTime;
    };
    return Spin;
}(Effect));
