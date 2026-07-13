//@include "./ElementPropertyGroup.js"
var Element = /** @class */ (function () {
    function Element(layer, comp, name, rawName) {
        if (name) {
            this.name = name;
        }
        else {
            this.name = layer.name;
        }
        if (rawName) {
            this.rawName = rawName;
        }
        else {
            this.rawName = this.name;
        }
        this.layer = layer;
        this.comp = comp;
        this.elementProperties = propertyParser(this.name);
        this.name = this.name.replace(/\s*\[.*\]/, "");
    }
    Element.prototype.setOutPoint = function (t) {
        this.layer.outPoint = t;
    };
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
    Element.prototype.deepCopy = function () {
        var copy = new Element(this.layer, this.comp, this.name, this.rawName);
        var keys = Object.keys(this);
        for (var i = 0; i < keys.length; i++) {
            copy[keys[i]] = this[keys[i]];
        }
        return copy;
    };
    Element.prototype.addNullParent = function (nullObj, beforeParenting, name) {
        if (nullObj === undefined) {
            nullObj = this.comp.layers.addNull(this.comp.duration);
        }
        var currentLayerParent = this.getLayerParent(this.layer);
        nullObj.moveBefore(currentLayerParent);
        if (name === undefined) {
            nullObj.name = this.rawName + " :: CONTROLLER";
        }
        else {
            nullObj.name = name;
        }
        if (beforeParenting !== undefined) {
            beforeParenting(nullObj, this);
        }
        currentLayerParent.parent = nullObj;
        return nullObj;
    };
    Element.prototype.getLayerParent = function (layer) {
        var parent = layer;
        if (layer.parent !== null) {
            parent = this.getLayerParent(layer.parent);
        }
        return parent;
    };
    return Element;
}());
