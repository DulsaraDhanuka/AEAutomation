class Graph {
    vertices: Array<Vertex | ReferenceVertex>;
    edges: Array<Edge>;

    constructor() {
        this.vertices = new Array<Vertex | ReferenceVertex>();
        this.edges = new Array<Edge>();
    }

    getVertexIDFromString(id: string) {
        for (var i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i].id == id) {
                return i;
            }
        }

        return null;
    }

    addVertex(vertex: Vertex | ReferenceVertex) : number {
        this.vertices.push(vertex);
        return this.vertices.length-1;
    }

    addEdge(edge: Edge) {
        this.edges.push(edge);
    }
}