//@include "../graphCode.js"
//@include "./ElementPropertyGroup.js"
var Element = /** @class */ (function () {
    function Element(layer, comp, name) {
        if (name) {
            this.name = name;
        }
        else {
            this.name = "";
        }
        this.rawName = name;
        this.layer = layer;
        this.comp = comp;
        this.elementProperties = propertyParser(this.name);
        this.name = this.name.replace(/\s*\[.*\]/, "");
    }
    Element.prototype.getName = function () {
        return this.name;
    };
    Element.prototype.getRawName = function () {
        return this.rawName;
    };
    Element.prototype.getLayer = function () {
        return this.layer;
    };
    Element.prototype.setLayer = function (layer) {
        this.layer = layer;
    };
    Element.prototype.getComp = function () {
        return this.comp;
    };
    Element.prototype.getProperties = function () {
        return this.elementProperties;
    };
    return Element;
}());
