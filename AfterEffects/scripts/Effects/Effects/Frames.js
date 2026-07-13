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
var Frames = /** @class */ (function (_super) {
    __extends(Frames, _super);
    function Frames() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Frames.prototype.getID = function () {
        return "frames";
    };
    Frames.prototype.applyElement = function (element, startTime, properties) {
        return 0;
    };
    Frames.prototype.applyElementGroup = function (group, startTime, properties) {
        var frameDelay = 5;
        if (properties.get("frameDelay") != null) {
            frameDelay = parseInt(properties.get("frameDelay").getValue());
        }
        var animationPlayhead = new Playhead(group.getComp().frameRate);
        animationPlayhead.moveSeconds(startTime);
        group.sort(function (a, b) {
            var n1 = parseInt(a.getName());
            var n2 = parseInt(b.getName());
            return n1 - n2;
        });
        var prevElement = null;
        group.iterate(function (element, i) {
            element.getLayer().property("Opacity").setValueAtTime(animationPlayhead.getCurrentSecond(), 0);
            if (prevElement) {
                prevElement.getLayer().property("Opacity").setValueAtTime(animationPlayhead.getCurrentSecond(), 100);
            }
            animationPlayhead.moveFrames(1);
            element.getLayer().property("Opacity").setValueAtTime(animationPlayhead.getCurrentSecond(), 100);
            if (prevElement) {
                prevElement.getLayer().property("Opacity").setValueAtTime(animationPlayhead.getCurrentSecond(), 0);
            }
            animationPlayhead.moveFrames(frameDelay);
            prevElement = element;
        }, true);
        return animationPlayhead.getCurrentSecond() - startTime;
    };
    return Frames;
}(Effect));
