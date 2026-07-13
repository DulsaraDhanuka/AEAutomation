//@include "../Element/Element.js"
//@include "../Element/ElementGroup.js"

abstract class Effect {
    abstract getID();

    apply(element: Element | ElementGroup, startTime: number, properties: ElementPropertyGroup): number {
        if (isType(element, Element)) {
            return this.applyElement(<Element>element, startTime, properties);
        } else if (isType(element, ElementGroup)) {
            return this.applyElementGroup(<ElementGroup>element, startTime, properties);
        }
    }
    applyElement(element: Element, startTime: number, properties: ElementPropertyGroup): number {
        let singleElementGroup: ElementGroup = new ElementGroup(element.getName(), element.getComp(), element.getRawName());
        singleElementGroup.add(element);
        return this.applyElementGroup(singleElementGroup, startTime, properties);
    };
    abstract applyElementGroup(element: ElementGroup, startTime: number, properties: ElementPropertyGroup): number;
}