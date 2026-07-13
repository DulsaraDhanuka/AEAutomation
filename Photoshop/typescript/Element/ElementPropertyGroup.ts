class ElementPropertyGroup {
    protected name: string;
    length: number;
    protected properties: Array<ElementProperty | ElementPropertyGroup>;

    constructor(name: string) {
        this.name = name;
        this.properties = new Array<ElementProperty | ElementPropertyGroup>();
        this.length = 0;
    }

    iterate(fn: Function, recursive?: true) {
        let index: number = 0;
        for (var i = 0; i < this.length; i++) {
            if (isType(this.properties[i], ElementProperty)) {
                fn(this.properties[i], index);
                index += 1;
            } else if (isType(this.properties[i], ElementPropertyGroup)) {
                if (recursive == true) {
                    (<ElementPropertyGroup> this.properties[i]).iterate(fn, recursive);
                } else {
                    fn(this.properties[i], index);
                    index += 1;
                }
            }
        }

        return index;
    }

    getName() : string {
        return this.name;
    }

    get(id: number | string) : ElementProperty | ElementPropertyGroup {
        if (typeof id == "number") {
            return this.properties[id];
        } else if (typeof id == "string") {
            for (var i = 0; i < this.properties.length; i++) {
                if (this.properties[i] && this.properties[i].getName() == id) {
                    return this.properties[i];
                }
            }
        }

        return null;
    }

    add(property: ElementProperty) : void {
        this.properties.push(property);
        this.length += 1;
    }

    remove(id: number | string) :  void {
        if (typeof id == "number") {
            delete this.properties[id];
            this.length -= 1;
        } else if (typeof id == "string") {
            for (var index in this.properties) {
                if (this.properties[index].getName() == id) {
                    delete this.properties[index];
                    this.length -= 1;
                }
            }
        }
    }
}