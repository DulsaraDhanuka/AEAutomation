//@include "../graphCode.js"
//@include "./ElementProperty.js"
var ElementGroup = /** @class */ (function () {
    function ElementGroup(name, comp) {
        this.name = name;
        this.rawName = name;
        this.length = 0;
        this.comp = comp;
        this.elements = Array();
        try {
            this.elementProperties = propertyParser(this.name);
        }
        catch (e) {
            throw new Error("Wrong property decleration \"" + this.name + "\"");
        }
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
    ElementGroup.prototype.preDraw = function (playhead) {
    };
    ElementGroup.prototype.postDraw = function (playhead) {
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
    return ElementGroup;
}());
