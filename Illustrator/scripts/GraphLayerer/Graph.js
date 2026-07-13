var Graph = /** @class */ (function () {
    function Graph() {
        this.vertices = Array();
        this.edges = Array();
    }
    Graph.prototype.addVertex = function (vertex) {
        this.vertices.push(vertex);
        return this.vertices.length - 1;
    };
    Graph.prototype.addEdge = function (edge) {
        this.edges.push(edge);
    };
    return Graph;
}());
