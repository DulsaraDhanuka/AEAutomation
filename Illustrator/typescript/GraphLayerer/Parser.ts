//@include "./Edge.js"
//@include "./Graph.js"
//@include "./Vertex.js"
//@include "../utils.js"

function createGraphFromLayers(mainLayer): Graph {
    let graph: Graph = new Graph();
    
    addToGraphRecuresively(mainLayer, graph);

    graph.vertices = sortVertices(graph.vertices);

    return graph;
}

function sortVertices(vertices: Array<Vertex>): Array<Vertex> {

    /*vertices.sort(function(a, b) {
        let aID: string = a.id;
        let bID: string = b.id;
    });*/

    return vertices;
}

function addToGraphRecuresively(layer: Layer, graph: Graph, parentVertexID?: number): void {
    let id: string = "";
    
    if (parentVertexID != undefined) {
        let ids: Array<string> = getParentID(graph, parentVertexID);
        ids.push(layer.name);
        id = ids.join("_");
    } else {
        id = "0";
    }

    let vertex: Vertex = new Vertex(id, layer.layers.getByName("NODE"));
    let vertexID: number = graph.addVertex(vertex);
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

function getParentID(graph: Graph, parentVertexID: number, c?: Array<string>): Array<string> {
    let ids: Array<string> = [];

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