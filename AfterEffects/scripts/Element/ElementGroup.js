//@include "./ElementProperty.js"
var ElementGroup = /** @class */ (function () {
    function ElementGroup(name, comp, rawName) {
        this.name = name;
        if (rawName) {
            this.rawName = rawName;
        }
        else {
            this.rawName = name;
        }
        this.length = 0;
        this.comp = comp;
        this.elements = Array();
        this.elementProperties = propertyParser(this.name);
        this.name = this.name.replace(/\s*\[.*\]/, "");
    }
    ElementGroup.prototype.sort = function (fn) {
        this.elements.sort(fn);
    };
    ElementGroup.prototype.iterate = function (fn, recursive, currIndex) {
        if (currIndex === void 0) { currIndex = 0; }
        var index = currIndex;
        for (var i = 0; i < this.length; i++) {
            if (isType(this.elements[i], Element)) {
                fn(this.elements[i], index);
                index += 1;
            }
            else if (isType(this.elements[i], ElementGroup)) {
                if (recursive == true) {
                    this.elements[i].iterate(fn, recursive, index);
                }
                else {
                    fn(this.elements[i], index);
                    index += 1;
                }
            }
        }
        return index;
    };
    ElementGroup.prototype.getName = function () {
        return this.name;
    };
    ElementGroup.prototype.getRawName = function () {
        return this.rawName;
    };
    ElementGroup.prototype.getComp = function () {
        return this.comp;
    };
    ElementGroup.prototype.get = function (id) {
        if (typeof id == "number") {
            return this.elements[id];
        }
        else if (typeof id == "string") {
            for (var i = 0; i < this.elements.length; i++) {
                if (this.elements[i].getName() == id) {
                    return this.elements[i];
                }
            }
            return null;
        }
    };
    ElementGroup.prototype.add = function (element) {
        this.elements.push(element);
        this.length += 1;
    };
    ElementGroup.prototype.getProperties = function () {
        return this.elementProperties;
    };
    ElementGroup.prototype.deepCopy = function () {
        var copy = new ElementGroup(this.name, this.comp, this.rawName);
        var keys = Object.keys(this);
        for (var i = 0; i < keys.length; i++) {
            if (isType(this[keys[i]], ElementGroup) || isType(this[keys[i]], Element)) {
                copy[keys[i]] = this[keys[i]].deepCopy();
            }
            else {
                copy[keys[i]] = this[keys[i]];
            }
        }
        return copy;
    };
    ElementGroup.prototype.addNullParent = function (nullObj, beforeParenting, name) {
        if (nullObj === undefined) {
            nullObj = this.comp.layers.addNull(this.comp.duration);
            name = this.rawName;
        }
        for (var i = 0; i < this.elements.length; i++) {
            var element = this.elements[i];
            element.addNullParent(nullObj, beforeParenting, name);
        }
        return nullObj;
    };
    return ElementGroup;
}());
