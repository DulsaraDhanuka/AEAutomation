class Edge {
    v1ID: number;
    v2ID: number;
    layer: Layer;

    constructor(v1ID: number, v2ID: number, layer?: Layer) {
        this.v1ID = v1ID;
        this.v2ID = v2ID;
        
        if (layer) {
            this.layer = layer;
        } else {
            this.layer = null;
        }
    }
}