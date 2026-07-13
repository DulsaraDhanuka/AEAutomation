//@include "./Edge.js"
//@include "./Graph.js"
//@include "./Vertex.js"
//@include "../utils.js"
function createGraphFromLayers(mainLayer) {
    var graph = new Graph();
    addToGraphRecuresively(mainLayer, graph);
    graph.vertices = sortVertices(graph.vertices);
    return graph;
}
function sortVertices(vertices) {
    /*vertices.sort(function(a, b) {
        let aID: string = a.id;
        let bID: string = b.id;
    });*/
    return vertices;
}
function addToGraphRecuresively(layer, graph, parentVertexID) {
    var id = "";
    if (parentVertexID != undefined) {
        var ids = getParentID(graph, parentVertexID);
        ids.push(layer.name);
        id = ids.join("_");
    }
    else {
        id = "0";
    }
    var vertex = new Vertex(id, layer.layers.getByName("NODE"));
    var vertexID = graph.addVertex(vertex);
    if (parentVertexID != undefined) {
        graph.addEdge(new Edge(parentVertexID, vertexID, layer.layers.getByName("CONNECTOR")));
    }
    if (layer.layers.length > 1) {
        for (var i = 0; i < layer.layers.length; i++) {
            if (layer.layers[i].name != "NODE" && layer.layers[i].name != "CONNECTOR") {
                addToGraphRecuresively(layer.layers[i], graph, vertexID);
            }
        }
    }
}
function getParentID(graph, parentVertexID, c) {
    var ids = [];
    if (c != undefined) {
        ids = c;
    }
    for (var i = 0; i < graph.edges.length; i++) {
        if (graph.edges[i].v2ID == parentVertexID) {
            ids.push(graph.vertices[graph.edges[i].v2ID].id);
            ids = getParentID(graph, graph.edges[i].v1ID, ids);
        }
    }
    return ids;
}
