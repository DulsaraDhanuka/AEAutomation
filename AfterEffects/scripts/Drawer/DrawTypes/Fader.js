//@include "../Drawer.js"
//@include "../../utils.js"
//@include "../../Playhead.js"
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
// TODO: Make redrawable
var Fader = /** @class */ (function (_super) {
    __extends(Fader, _super);
    function Fader(drawingHand, erasingHand) {
        var _this = _super.call(this, drawingHand, erasingHand) || this;
        _this.fadeDurationFrames = 1;
        _this.fadeDurationFrames = 1;
        return _this;
    }
    Fader.prototype.drawElement = function (element, playhead) {
        var elementComp = element.getComp();
        var fadeDurationFrames = this.fadeDurationFrames;
        if (element.getProperties().get("fadeDuration") != null) {
            fadeDurationFrames = parseInt(element.getProperties().get("fadeDuration").getValue());
        }
        var layer = element.getLayer();
        layer.property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
        layer.property("Opacity").setInterpolationTypeAtKey(layer.property("Opacity").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        playhead.moveFrames(fadeDurationFrames);
        layer.property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
        layer.property("Opacity").setInterpolationTypeAtKey(layer.property("Opacity").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
    };
    Fader.prototype.drawGroup = function (group, playhead) {
        group.sort(function (a, b) {
            var a_int = parseInt(a.getName());
            var b_int = parseInt(b.getName());
            if (a_int > b_int) {
                return 1;
            }
            else if (a_int < b_int) {
                return -1;
            }
            else {
                return 0;
            }
        });
        var fadeDurationFrames = this.fadeDurationFrames;
        if (group.getProperties().get("fadeDuration") != null) {
            fadeDurationFrames = parseInt(group.getProperties().get("fadeDuration").getValue());
        }
        group.iterate(function (element) {
            var innerPlayhead = new Playhead(playhead.fps);
            innerPlayhead.moveFrames(playhead.getCurrentFrame());
            element.getLayer().property("Opacity").setValueAtTime(innerPlayhead.getCurrentSecond(), 0);
            element.getLayer().property("Opacity").setInterpolationTypeAtKey(element.getLayer().property("Opacity").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            innerPlayhead.moveFrames(fadeDurationFrames);
            element.getLayer().property("Opacity").setValueAtTime(innerPlayhead.getCurrentSecond(), 100);
            element.getLayer().property("Opacity").setInterpolationTypeAtKey(element.getLayer().property("Opacity").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        }, true);
        playhead.moveFrames(this.fadeDurationFrames);
    };
    Fader.prototype.eraseElement = function (element, playhead) {
        var elementComp = element.getComp();
        var fadeDurationFrames = this.fadeDurationFrames;
        if (element.getProperties().get("fadeDuration") != null) {
            fadeDurationFrames = parseInt(element.getProperties().get("fadeDuration").getValue());
        }
        var layer = element.getLayer();
        layer.property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
        layer.property("Opacity").setInterpolationTypeAtKey(layer.property("Opacity").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        playhead.moveFrames(fadeDurationFrames);
        layer.property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
        layer.property("Opacity").setInterpolationTypeAtKey(layer.property("Opacity").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
    };
    Fader.prototype.eraseGroup = function (group, playhead) {
        group.sort(function (a, b) {
            var a_int = parseInt(a.getName());
            var b_int = parseInt(b.getName());
            if (a_int > b_int) {
                return 1;
            }
            else if (a_int < b_int) {
                return -1;
            }
            else {
                return 0;
            }
        });
        var fadeDurationFrames = this.fadeDurationFrames;
        if (group.getProperties().get("fadeDuration") != null) {
            fadeDurationFrames = parseInt(group.getProperties().get("fadeDuration").getValue());
        }
        group.iterate(function (element) {
            var innerPlayhead = new Playhead(playhead.fps);
            innerPlayhead.moveFrames(playhead.getCurrentFrame());
            element.getLayer().property("Opacity").setValueAtTime(innerPlayhead.getCurrentSecond(), 100);
            element.getLayer().property("Opacity").setInterpolationTypeAtKey(element.getLayer().property("Opacity").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            innerPlayhead.moveFrames(fadeDurationFrames);
            element.getLayer().property("Opacity").setValueAtTime(innerPlayhead.getCurrentSecond(), 0);
            element.getLayer().property("Opacity").setInterpolationTypeAtKey(element.getLayer().property("Opacity").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        }, true);
        playhead.moveFrames(this.fadeDurationFrames);
    };
    Fader.prototype.condition = function (element, containerSize) {
        return false;
    };
    Fader.prototype.getID = function () {
        return "fader";
    };
    return Fader;
}(Drawer));
