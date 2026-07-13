//@include "../graphCode.js"
//@include "./ElementProperty.js"

class ElementGroup {
    protected name: string;
    protected rawName: string;
    length: number;
    protected comp: Document;
    protected elementProperties: ElementPropertyGroup;
    protected elements: Array<Element | ElementGroup>;

    constructor(name: string, comp: Document) {
        this.name = name;
        this.rawName = name;
        this.length = 0;
        this.comp = comp;
        this.elements = Array<Element | ElementGroup>();
        try {
            this.elementProperties = propertyParser(this.name);
        } catch (e) {
            throw new Error("Wrong property decleration \"" + this.name + "\"");
        }
        this.elementProperties = propertyParser(this.name);
        this.name = this.name.replace(/\s*\[.*\]/, "");
    }

    sort(fn: (a: ElementGroup | Element, b: ElementGroup | Element) => number) {
        this.elements.sort(fn);
    }

    iterate(fn: Function, recursive?: boolean, currIndex: number = 0) {
        let index: number = currIndex;
        for (var i = 0; i < this.length; i++) {
            if (isType(this.elements[i], Element)) {
                fn(this.elements[i], index);
                index += 1;
            } else if (isType(this.elements[i], ElementGroup)) {
                if (recursive == true) {
                    (<ElementGroup> this.elements[i]).iterate(fn, recursive, index);
                } else {
                    fn(this.elements[i], index);
                    index += 1;
                }
            }
        }

        return index;
    }

    preDraw(playhead: string): void {

    }

    postDraw(playhead: string): void {

    }

    getName() : string {
        return this.name;
    }

    getRawName() : string {
        return this.rawName;
    }

    getComp(): Document {
        return this.comp;
    }

    get(id: number | string) : Element | ElementGroup {
        if (typeof id == "number") {
            return this.elements[id];
        } else if (typeof id == "string") {
            for (var i = 0; i < this.elements.length; i++) {
                if (this.elements[i].getName() == id) {
                    return this.elements[i];
                }
            }

            return null;
        }
    }

    add(element: Element | ElementGroup) : void {
        this.elements.push(element);
        this.length += 1;
    }

    getProperties() : ElementPropertyGroup {
        return this.elementProperties;
    }
}