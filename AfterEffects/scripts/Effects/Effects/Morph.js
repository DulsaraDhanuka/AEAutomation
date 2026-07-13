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
var Morph = /** @class */ (function (_super) {
    __extends(Morph, _super);
    function Morph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Morph.prototype.getID = function () {
        return "morph";
    };
    Morph.prototype.applyElement = function (element, startTime, properties) {
        return 0;
    };
    Morph.prototype.applyElementGroup = function (group, startTime, properties) {
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
        var positions = [];
        var layers = [];
        group.iterate(function (element, i) {
            positions.push(element.getLayer().property("Position").value);
            layers.push(element.getLayer());
            element.getLayer().property("Position").setValueAtTime(animationPlayhead.getCurrentSecond(), positions[0]);
        }, true);
        var morphPoint = null;
        if (properties.get("morphPoint") != null) {
            var morphPointhProp = properties.get("morphPoint").getValue();
            if (morphPointhProp == "false") {
                morphPoint = null;
            }
            else {
                morphPoint = parseInt(morphPointhProp.replace("%", ""));
            }
        }
        var speed = 50;
        if (properties.get("morphSpeed") != null) {
            var speedProp = properties.get("morphSpeed").getValue();
            speed = parseFloat(speedProp);
        }
        for (var i = 1; i < positions.length; i++) {
            var animationDurationFrames = 5 * Math.abs(this.getDistance(positions[i - 1], positions[i])) / speed;
            var animationDuration = animationPlayhead.framesToSeconds(animationDurationFrames);
            for (var ii = 0; ii < layers.length; ii++) {
                layers[ii].property("Position").setValueAtTime(animationPlayhead.getCurrentSecond(), positions[i - 1]);
            }
            if (morphPoint != null) {
                var layerMorphTime = animationPlayhead.getCurrentSecond() + (animationDuration / 100 * morphPoint);
                layers[i - 1].property("Opacity").setValueAtTime(layerMorphTime, 100);
                layers[i].property("Opacity").setValueAtTime(layerMorphTime, 0);
                layers[i - 1].property("Opacity").setValueAtTime(layerMorphTime + animationPlayhead.framesToSeconds(1), 0);
                layers[i].property("Opacity").setValueAtTime(layerMorphTime + animationPlayhead.framesToSeconds(1), 100);
            }
            else {
                layers[i].property("Opacity").setValueAtTime(animationPlayhead.getCurrentSecond(), 0);
            }
            animationPlayhead.moveSeconds(animationDuration);
            for (var ii = 0; ii < layers.length; ii++) {
                layers[ii].property("Position").setValueAtTime(animationPlayhead.getCurrentSecond(), positions[i]);
            }
        }
        return animationPlayhead.getCurrentSecond() - startTime;
    };
    Morph.prototype.getDistance = function (p1, p2) {
        var a = p2[0] - p1[0];
        var b = p2[1] - p1[1];
        var c = p2[2] - p1[2];
        return Math.sqrt(a * a + b * b + c * c);
    };
    return Morph;
}(Effect));
