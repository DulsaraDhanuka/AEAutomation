//@include "./utils.js"

var doc: Document = app.activeDocument;
var items: Layers = doc.layers;
convertGroupsToLayers(items);

var exportable: Layer = doc.layers.add();
exportable.name = "EXPORTABLE";
prepareSubLayersIntoExportable(items, doc);
cleanupExportable(doc);
