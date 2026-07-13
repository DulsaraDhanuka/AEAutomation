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
var Fall = /** @class */ (function (_super) {
    __extends(Fall, _super);
    function Fall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fall.prototype.getID = function () {
        return "fall";
    };
    Fall.prototype.applyElement = function (element, startTime, properties) {
        var fallDuration = 15;
        if (properties.get("fallDuration") != null) {
            fallDuration = parseInt(properties.get("fallDuration").getValue());
        }
        var fallAmount = 1080;
        if (properties.get("fallAmount") != null) {
            fallAmount = parseInt(properties.get("fallAmount").getValue());
        }
        var playhead = new Playhead(element.getLayer().containingComp.frameRate);
        playhead.moveSeconds(startTime);
        var _a = getLayerPoints(element.getLayer(), true, startTime), layerTop = _a[0], layerLeft = _a[1], layerRight = _a[2], layerBottom = _a[3];
        var currentValue = element.getLayer().property("Position").valueAtTime(playhead.getCurrentSecond(), true);
        element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), currentValue);
        element.getLayer().property("Position").setTemporalEaseAtKey(element.getLayer().property("Position").numKeys, [new KeyframeEase(0, 0.1)], [new KeyframeEase(35.4199, 100)]);
        element.getLayer().property("Position").setSpatialTangentsAtKey(element.getLayer().property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        playhead.moveFrames(fallDuration);
        element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), [currentValue[0], currentValue[1] + fallAmount, currentValue[2]]);
        element.getLayer().property("Position").setTemporalEaseAtKey(element.getLayer().property("Position").numKeys, [new KeyframeEase(1038.6511, 0.1)], [new KeyframeEase(0, 0.1)]);
        element.getLayer().property("Position").setSpatialTangentsAtKey(element.getLayer().property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        return playhead.getCurrentSecond() - startTime;
    };
    Fall.prototype.applyElementGroup = function (group, startTime, properties) {
        group.sort(function (e1, e2) {
            var n1 = parseInt(e1.getName());
            var n2 = parseInt(e2.getName());
            return n1 - n2;
        });
        var groupPlayhead = new Playhead(group.getComp().frameRate);
        groupPlayhead.moveSeconds(startTime);
        var $this = this;
        group.iterate(function (element) {
            var frames = groupPlayhead.secondsToFrames($this.applyElement(element, groupPlayhead.getCurrentSecond(), properties));
            groupPlayhead.moveFrames(frames + getRandomInt(-12, -7));
        }, true);
        return groupPlayhead.getCurrentSecond() - startTime;
    };
    return Fall;
}(Effect));
