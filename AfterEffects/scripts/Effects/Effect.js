//@include "../Element/Element.js"
//@include "../Element/ElementGroup.js"
var Effect = /** @class */ (function () {
    function Effect() {
    }
    Effect.prototype.apply = function (element, startTime, properties) {
        if (isType(element, Element)) {
            return this.applyElement(element, startTime, properties);
        }
        else if (isType(element, ElementGroup)) {
            return this.applyElementGroup(element, startTime, properties);
        }
    };
    Effect.prototype.applyElement = function (element, startTime, properties) {
        var singleElementGroup = new ElementGroup(element.getName(), element.getComp(), element.getRawName());
        singleElementGroup.add(element);
        return this.applyElementGroup(singleElementGroup, startTime, properties);
    };
    ;
    return Effect;
}());
