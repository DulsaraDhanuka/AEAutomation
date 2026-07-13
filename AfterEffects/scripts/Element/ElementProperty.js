var ElementProperty = /** @class */ (function () {
    function ElementProperty(name, value) {
        this.name = name;
        this.value = value;
    }
    ElementProperty.prototype.getName = function () {
        return this.name;
    };
    ElementProperty.prototype.getValue = function () {
        return this.value;
    };
    ElementProperty.prototype.setValue = function (value) {
        this.value = value;
    };
    return ElementProperty;
}());
