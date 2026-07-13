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
var Wave = /** @class */ (function (_super) {
    __extends(Wave, _super);
    function Wave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wave.prototype.getID = function () {
        return "wave";
    };
    Wave.prototype.applyElement = function (element, startTime, properties) {
        var animationPlayhead = new Playhead(element.getComp().frameRate);
        animationPlayhead.moveSeconds(startTime);
        var waveAmount = 10;
        if (properties.get("waveAmount") != null) {
            waveAmount = parseFloat(properties.get("waveAmount").getValue());
        }
        var nRipples = 1;
        if (properties.get("nRipples") != null) {
            nRipples = parseInt(properties.get("nRipples").getValue());
        }
        var waveSpeed = 1;
        if (properties.get("waveSpeed") != null) {
            waveSpeed = parseFloat(properties.get("waveSpeed").getValue());
        }
        var direction = "left";
        if (properties.get("waveDirection") != null) {
            direction = properties.get("waveDirection").getValue();
        }
        var layer = element.getLayer();
        var layerIndex = layer.index;
        var preComp = element.getComp().layers.precompose([layerIndex], layer.name, false);
        element.setLayer(element.getComp().layers[layerIndex]);
        layer = element.getLayer();
        layer.collapseTransformation = false;
        layer.threeDLayer = true;
        var _a = getLayerPoints(layer, true, startTime), top = _a[0], left = _a[1], right = _a[2], bottom = _a[3];
        var _b = [right - left, bottom - top], width = _b[0], height = _b[1];
        var waveHeight = waveAmount;
        var waveWidth = waveAmount;
        var waveDirection = 0;
        var pinEdge = 0;
        var pos = [0, 0];
        switch (direction) {
            case "left":
                waveDirection = -90;
                pinEdge = 7;
                waveHeight = waveAmount;
                waveWidth = width / nRipples;
                preComp.height = preComp.height + waveHeight * 2;
                pos = preComp.layers[1].property("Position").value;
                preComp.layers[1].property("Position").setValue([pos[0], pos[1] + waveHeight]);
                break;
            case "right":
                waveDirection = 90;
                pinEdge = 5;
                waveHeight = waveAmount;
                waveWidth = width / nRipples;
                preComp.height = preComp.height + waveHeight * 2;
                pos = preComp.layers[1].property("Position").value;
                preComp.layers[1].property("Position").setValue([pos[0], pos[1] + waveHeight]);
                break;
            case "top":
                waveDirection = 0;
                pinEdge = 8;
                waveHeight = height / nRipples;
                waveWidth = waveAmount;
                preComp.width = preComp.width + waveWidth * 2;
                pos = preComp.layers[1].property("Position").value;
                preComp.layers[1].property("Position").setValue([pos[0] + waveWidth, pos[1]]);
                break;
            case "bottom":
                waveDirection = 180;
                pinEdge = 6;
                waveHeight = height / nRipples;
                waveWidth = waveAmount;
                preComp.width = preComp.width + waveWidth * 2;
                pos = preComp.layers[1].property("Position").value;
                preComp.layers[1].property("Position").setValue([pos[0] + waveWidth, pos[1]]);
                break;
            default:
                waveDirection = 90;
                pinEdge = 5;
                waveHeight = waveAmount;
                waveWidth = width / nRipples;
                preComp.height = preComp.height + waveHeight * 2;
                pos = preComp.layers[1].property("Position").value;
                preComp.layers[1].property("Position").setValue([pos[0], pos[1] + waveHeight]);
                break;
        }
        //let boundsEffect: PropertyGroup = <PropertyGroup>(<PropertyGroup>layer.property("Effects")).addProperty("ADBE GROW BOUNDS");
        var warpEffect = layer.property("Effects").addProperty("ADBE Wave Warp");
        //boundsEffect = <PropertyGroup>(layer.property("Effects").property("ADBE GROW BOUNDS"));
        //(<Property>boundsEffect.property("Pixels")).setValue(waveHeight);
        warpEffect.property("Wave Height").setValue(waveHeight);
        warpEffect.property("Wave Width").setValue(waveWidth);
        warpEffect.property("Wave Speed").setValue(waveSpeed);
        warpEffect.property("Direction").setValue(waveDirection);
        warpEffect.property("Pinning").setValue(pinEdge);
        warpEffect.property("Antialiasing (Best Quality)").setValue(3);
        warpEffect.property("Wave Speed").setValue(0);
        animationPlayhead.moveFrames(1);
        warpEffect.property("Wave Speed").setValue(waveSpeed);
        return 0;
    };
    Wave.prototype.applyElementGroup = function (group, startTime, properties) {
        return 0;
    };
    Wave.prototype.pauseElement = function (element, time, properties) { };
    Wave.prototype.pauseElementGroup = function (element, time, properties) { };
    return Wave;
}(Effect));
