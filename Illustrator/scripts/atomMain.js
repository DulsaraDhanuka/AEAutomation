//@include "./utils.js"
var doc = app.activeDocument;
var items = doc.layers;
convertGroupsToLayers(items);
var exportable = doc.layers.add();
exportable.name = "EXPORTABLE";
prepareSubLayersIntoExportable(items, doc);
cleanupExportable(doc);
