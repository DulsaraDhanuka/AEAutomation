//@include "./utils.js"
//@include "./GraphLayerer/Graph.js"
//@include "./GraphLayerer/Parser.js"

var doc: Document = app.activeDocument;
var convertedContainer = doc.layers.add();
convertedContainer.name = "CONVERTED";
var items: Layers = doc.layers;
convertGroupsToLayers(items);
var graph: Graph = createGraphFromLayers(doc.layers.getByName("MAIN"));

for (var i = 0; i < graph.vertices.length; i++) {
    let layerID = graph.vertices[i].id;
    if (layerID == "MAIN_NODE") {
        layerID = "CENTER_NODE";
    } else {
        layerID = "NODE_" + layerID;
    }
    graph.vertices[i].layer.move(convertedContainer, ElementPlacement.INSIDE);
    graph.vertices[i].layer.name = layerID;
}

for (var i = 0; i < graph.edges.length; i++) {
    if (graph.edges[i].layer != null) {
        let layerID = graph.vertices[graph.edges[i].v2ID].id;
        layerID = "CONNECTOR_" + layerID;
        graph.edges[i].layer.move(convertedContainer, ElementPlacement.INSIDE);
        graph.edges[i].layer.name = layerID;
    }
}

doc.layers.getByName("MAIN").remove();

while (convertedContainer.layers.length > 0) {
    convertedContainer.layers[0].move(convertedContainer, ElementPlacement.PLACEBEFORE);
}

convertedContainer.remove();