//@include "./utils.js"
//@include "./mindmapUtils.js"
//@include "./GraphLayerer/Graph.js"
//@include "./GraphLayerer/Parser.js"
//@include "./tracePathLayers.js"
function mindmapMain() {
    var doc = app.activeDocument;
    var items = doc.layers;
    convertGroupsToLayers(items);
    correctLayers(items);
    var exportable = doc.layers.add();
    exportable.name = "EXPORTABLE";
    prepareSubLayersIntoExportable(items, doc);
    cleanupExportable(doc);
    correctLayerStructure(items);
    tracePathLayers();
}
