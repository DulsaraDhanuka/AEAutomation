var ElementPropertyGroup = /** @class */ (function () {
    function ElementPropertyGroup(name) {
        this.name = name;
        this.properties = new Array();
        this.length = 0;
    }
    ElementPropertyGroup.prototype.iterate = function (fn, recursive) {
        var index = 0;
        for (var i = 0; i < this.length; i++) {
            if (isType(this.properties[i], ElementProperty)) {
                fn(this.properties[i], index);
                index += 1;
            }
            else if (isType(this.properties[i], ElementPropertyGroup)) {
                if (recursive == true) {
                    this.properties[i].iterate(fn, recursive);
                }
                else {
                    fn(this.properties[i], index);
                    index += 1;
                }
            }
        }
        return index;
    };
    ElementPropertyGroup.prototype.getName = function () {
        return this.name;
    };
    ElementPropertyGroup.prototype.get = function (id) {
        if (typeof id == "number") {
            return this.properties[id];
        }
        else if (typeof id == "string") {
            for (var i = 0; i < this.properties.length; i++) {
                if (this.properties[i] && this.properties[i].getName() == id) {
                    return this.properties[i];
                }
            }
        }
        return null;
    };
    ElementPropertyGroup.prototype.add = function (property) {
        this.properties.push(property);
        this.length += 1;
    };
    ElementPropertyGroup.prototype.remove = function (id) {
        if (typeof id == "number") {
            delete this.properties[id];
            this.length -= 1;
        }
        else if (typeof id == "string") {
            for (var index in this.properties) {
                if (this.properties[index].getName() == id) {
                    delete this.properties[index];
                    this.length -= 1;
                }
            }
        }
    };
    return ElementPropertyGroup;
}());
