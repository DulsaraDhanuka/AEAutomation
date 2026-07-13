//@include "./utils.js"
//@include "./mindmapUtils.js"
//@include "./GraphLayerer/Graph.js"
//@include "./GraphLayerer/Parser.js"
//@include "./tracePathLayers.js"

function mindmapMain() {
    var doc: Document = app.activeDocument;
    var items: Layers = doc.layers;
    convertGroupsToLayers(items);
    correctLayers(items);

    var exportable: Layer = doc.layers.add();
    exportable.name = "EXPORTABLE";

    prepareSubLayersIntoExportable(items, doc);
    cleanupExportable(doc);

    correctLayerStructure(items);

    tracePathLayers();
}