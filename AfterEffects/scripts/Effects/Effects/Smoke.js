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
var Smoke = /** @class */ (function (_super) {
    __extends(Smoke, _super);
    function Smoke() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Smoke.prototype.getID = function () {
        return "smoke";
    };
    Smoke.prototype.applyElement = function (element, startTime, properties) {
        var layer = element.getLayer();
        var animationPlayhead = new Playhead(element.getComp().frameRate);
        animationPlayhead.moveSeconds(startTime);
        var _a = getLayerPoints(element.getLayer(), true, animationPlayhead.getCurrentSecond()), layerTop = _a[0], layerLeft = _a[1], layerRight = _a[2], layerBottom = _a[3];
        var _b = [(layerRight - layerLeft), (layerBottom - layerTop)], layerWidth = _b[0], layerHeight = _b[1];
        var particleLayer = element.getComp().layers.addSolid([255, 255, 255], layer.name + " :: SMOKE_PARTICLES", element.getComp().width, element.getComp().height, element.getComp().pixelAspect, element.getComp().duration);
        particleLayer.threeDLayer = true;
        particleLayer.property("Position").setValue([layerLeft + layerWidth / 2, layerTop + layerHeight / 2, layer.property("Position").valueAtTime(animationPlayhead.getCurrentSecond(), false)[2]]);
        particleLayer.moveBefore(layer);
        layer.enabled = false;
        var _c = getLayerPoints(particleLayer, true, animationPlayhead.getCurrentSecond()), pLayerTop = _c[0], pLayerLeft = _c[1], pLayerRight = _c[2], pLayerBottom = _c[3];
        var _d = [(pLayerRight - pLayerLeft), (pLayerBottom - pLayerTop)], pLayerWidth = _d[0], pLayerHeight = _d[1];
        particleLayer.property("Scale").setValue([layerWidth / pLayerWidth * 100, layerHeight / pLayerHeight * 100, 100]);
        var effects = particleLayer.property("Effects");
        effects.addProperty("CC Mr. Mercury");
        effects.addProperty("ADBE Threshold2");
        effects.addProperty("CC Vector Blur");
        effects.addProperty("ADBE Tint");
        var mrMercury = effects.property("CC Mr. Mercury");
        var threshold = effects.property("ADBE Threshold2");
        var vecBlur = effects.property("CC Vector Blur");
        var tint = effects.property("ADBE Tint");
        mrMercury.property("Velocity").setValue(5);
        mrMercury.property("Longevity (sec)").setValue(1.5);
        mrMercury.property("Gravity").setValue(0);
        mrMercury.property("Resistance").setValue(2.10);
        mrMercury.property("Extra").setValue(1);
        mrMercury.property("Animation").setValue(10);
        mrMercury.property("Blob Birth Size").setValue(0.70);
        mrMercury.property("Blob Death Size").setValue(0.10);
        mrMercury.property("Ambient").setValue(0);
        mrMercury.property("Diffuse").setValue(23);
        mrMercury.property("Specular").setValue(100);
        mrMercury.property("Roughness").setValue(0.145);
        mrMercury.property("Metal").setValue(90);
        mrMercury.property("Material Opacity").setValue(100);
        threshold.property("Level").setValue(0.59607843137255);
        vecBlur.property("Type").setValue(3);
        vecBlur.property("Amount").setValue(15);
        tint.property("Map Black To").setValue([0.12156862765551, 0.12156862765551, 0.12156862765551, 1]);
        tint.property("Map White To").setValue([0.29803922772408, 0.29803922772408, 0.29803922772408, 1]);
        mrMercury.property("Birth Rate").setValueAtTime(animationPlayhead.getCurrentSecond(), 5);
        animationPlayhead.moveFrames(15);
        mrMercury.property("Birth Rate").setValueAtTime(animationPlayhead.getCurrentSecond(), 0);
        return animationPlayhead.getCurrentSecond() - startTime;
    };
    Smoke.prototype.applyElementGroup = function (group, startTime, properties) {
        return 0;
    };
    return Smoke;
}(Effect));
