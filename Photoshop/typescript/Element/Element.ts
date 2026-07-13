//@include "../graphCode.js"
//@include "./ElementPropertyGroup.js"

class Element {
    protected name: string;
    protected rawName: string;
    protected comp: Document;
    protected layer: Layer;
    protected elementProperties: ElementPropertyGroup;
    
    constructor(layer: Layer, comp: Document, name?: string) {
        if (name) {
            this.name = name;
        } else {
            this.name = "";
        }

        this.rawName = name;
        this.layer = layer;
        this.comp = comp;
        this.elementProperties = propertyParser(this.name);
        this.name = this.name.replace(/\s*\[.*\]/, "");
    }

    getName() : string {
        return this.name;
    }

    getRawName(): string {
        return this.rawName;
    }

    getLayer() : Layer {
        return this.layer;
    }

    setLayer(layer: Layer): void {
        this.layer = layer;
    }

    getComp() : Document {
        return this.comp;
    }

    getProperties() : ElementPropertyGroup {
        return this.elementProperties;
    }
}