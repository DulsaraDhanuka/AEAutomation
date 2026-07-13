//@include "./ElementPropertyGroup.js"

class Element {
    protected name: string;
    protected rawName: string;
    protected comp: CompItem;
    protected layer: AVLayer;
    protected elementProperties: ElementPropertyGroup;

    constructor(layer: AVLayer, comp: CompItem, name?: string, rawName?: string) {
        if (name) {
            this.name = name;
        } else {
            this.name = layer.name;
        }

        if (rawName) {
            this.rawName = rawName;
        } else {
            this.rawName = this.name;
        }

        this.layer = layer;
        this.comp = comp;
        this.elementProperties = propertyParser(this.name);
        this.name = this.name.replace(/\s*\[.*\]/, "");
    }

    setOutPoint(t: number) : void {
        this.layer.outPoint = t;
    }

    getName() : string {
        return this.name;
    }

    getRawName() : string {
        return this.rawName;
    }

    getLayer() : AVLayer {
        return this.layer;
    }

    setLayer(layer: AVLayer): void {
        this.layer = layer;
    }

    getComp() : CompItem {
        return this.comp;
    }

    getProperties() : ElementPropertyGroup {
        return this.elementProperties;
    }

    deepCopy(): Element {
        let copy: Element = new Element(this.layer, this.comp, this.name, this.rawName);
        let keys = Object.keys(this);
        for (var i = 0; i < keys.length; i++) {
            copy[keys[i]] = this[keys[i]];
        }
        return copy;
    }

    addNullParent(nullObj?: AVLayer, beforeParenting?: Function, name?: string): AVLayer {
        if (nullObj === undefined) {
            nullObj = this.comp.layers.addNull(this.comp.duration);
        }

        var currentLayerParent = this.getLayerParent(this.layer);
        nullObj.moveBefore(currentLayerParent);
        if (name === undefined) {
            nullObj.name = this.rawName + " :: CONTROLLER";
        } else {
            nullObj.name = name;
        }

        if (beforeParenting !== undefined) {
            beforeParenting(nullObj, this);
        }
        
        currentLayerParent.parent = nullObj;

        return nullObj;
    }

    protected getLayerParent(layer: AVLayer): AVLayer {
        var parent = layer;

        if (layer.parent !== null) {
            parent = this.getLayerParent(<AVLayer>layer.parent);
        }

        return parent;
    }
}