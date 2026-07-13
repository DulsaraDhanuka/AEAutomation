var Edge = /** @class */ (function () {
    function Edge(v1ID, v2ID, layer) {
        this.v1ID = v1ID;
        this.v2ID = v2ID;
        if (layer) {
            this.layer = layer;
        }
        else {
            this.layer = null;
        }
    }
    return Edge;
}());
