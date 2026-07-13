class Graph {
    vertices: Array<Vertex>;
    edges: Array<Edge>;

    constructor() {
        this.vertices = Array<Vertex>();
        this.edges = Array<Edge>();
    }

    addVertex(vertex: Vertex): number {
        this.vertices.push(vertex);
        return this.vertices.length-1;
    }

    addEdge(edge: Edge) {
        this.edges.push(edge);
    }
}