//@include "./sketchImageAction.js"
//@include "./styleImageAction.js"
//@include "./removeBackgroundAction.js"
//@include "./removeModels.js"
sketchLayers();
removeModels();
function sketchLayers(layers) {
    if (layers === void 0) { layers = app.activeDocument.layers; }
    for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        if (layer.typename == "LayerSet") {
            sketchLayers(layer.layers);
        }
        else {
            if (getLayerColourByID(layer.id) == "grain") {
                var layerName = layer.name;
                touchLayer(layer);
                createSmartObject();
                openSmartObject();
                var originalLayer = app.activeDocument.layers[0];
                originalLayer.duplicate(originalLayer, ElementPlacement.PLACEBEFORE);
                app.activeDocument.layers[0].name = "brush";
                touchLayer(app.activeDocument.layers[0]);
                addToSelection(app.activeDocument.layers[1].name);
                createSmartObject();
                copy();
                paste();
                touchLayer(app.activeDocument.layers[0]);
                openSmartObject();
                styleImageAction();
                app.activeDocument.save();
                app.activeDocument.close();
                app.activeDocument.layers[0].name = "image";
                touchLayer(app.activeDocument.layers[0]);
                convertToLayers();
                app.refresh();
                touchLayer(app.activeDocument.layers[1]);
                openSmartObject();
                sketchImageAction();
                app.activeDocument.save();
                app.activeDocument.close();
                app.activeDocument.layers[1].name = "sketch";
                touchLayer(app.activeDocument.layers[1]);
                convertToLayers();
                app.refresh();
                var sketchGroup = app.activeDocument.layerSets.add();
                sketchGroup.name = "1 [elementGroup=\"true\", drawer=\"sketcher\"]";
                app.activeDocument.layers.getByName("sketch").move(sketchGroup, ElementPlacement.PLACEATEND);
                sketchGroup.layers.getByName("sketch").duplicate(sketchGroup.layers.getByName("sketch"), ElementPlacement.PLACEBEFORE).name = "vector";
                touchLayer(sketchGroup.layers.getByName("vector"));
                removeBackgroundAction();
                app.activeDocument.layers.getByName("image").name = "2 [drawer=\"fader\"]";
                app.activeDocument.save();
                app.activeDocument.close();
                var prevName = app.activeDocument.activeLayer.name;
                app.activeDocument.activeLayer.name = "MODEL";
                groupLayers();
                app.activeDocument.activeLayer.name = prevName;
            }
        }
    }
}
function getLayerColourByID(ID) {
    var ref = new ActionReference();
    ref.putProperty(app.charIDToTypeID("Prpr"), app.stringIDToTypeID('color'));
    ref.putIdentifier(app.charIDToTypeID("Lyr "), ID);
    return app.typeIDToStringID(app.executeActionGet(ref).getEnumerationValue(app.stringIDToTypeID('color')));
}
function touchLayer(layer) {
    app.activeDocument.activeLayer = layer;
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putIdentifier(app.charIDToTypeID('Lyr '), layer.id);
    desc.putReference(app.charIDToTypeID('null'), ref);
    app.executeAction(app.charIDToTypeID('slct'), desc, DialogModes.NO);
    return layer;
}
function createSmartObject() {
    var id325 = app.stringIDToTypeID("newPlacedLayer");
    app.executeAction(id325, undefined, DialogModes.NO);
}
function openSmartObject() {
    var desc = new ActionDescriptor();
    app.executeAction(app.stringIDToTypeID('placedLayerEditContents'), desc, DialogModes.NO);
}
function ungroup() {
    var m_Dsc01 = new ActionDescriptor();
    var m_Ref01 = new ActionReference();
    m_Ref01.putEnumerated(app.charIDToTypeID("Lyr "), app.charIDToTypeID("Ordn"), app.charIDToTypeID("Trgt"));
    m_Dsc01.putReference(app.charIDToTypeID("null"), m_Ref01);
    try {
        app.executeAction(app.stringIDToTypeID("ungroupLayersEvent"), m_Dsc01, DialogModes.NO);
    }
    catch (e) { }
}
function copy() {
    app.executeAction(app.charIDToTypeID('copy'), undefined, DialogModes.NO);
}
;
function paste() {
    app.executeAction(app.charIDToTypeID('past'), undefined, DialogModes.NO);
}
;
function convertToLayers() {
    app.executeAction(app.stringIDToTypeID('placedLayerConvertToLayers'), undefined, DialogModes.NO);
}
;
function addToSelection(layerName) {
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(app.charIDToTypeID('Lyr '), layerName);
    desc1.putReference(app.charIDToTypeID('null'), ref1);
    desc1.putEnumerated(app.stringIDToTypeID("selectionModifier"), app.stringIDToTypeID("selectionModifierType"), app.stringIDToTypeID("addToSelectionContinuous"));
    desc1.putBoolean(app.charIDToTypeID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(124);
    list1.putInteger(125);
    desc1.putList(app.charIDToTypeID('LyrI'), list1);
    app.executeAction(app.charIDToTypeID('slct'), desc1, DialogModes.NO);
}
;
function groupLayers() {
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(app.stringIDToTypeID("layerSection"));
    desc1.putReference(app.charIDToTypeID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(app.charIDToTypeID('Lyr '), app.charIDToTypeID('Ordn'), app.charIDToTypeID('Trgt'));
    desc1.putReference(app.charIDToTypeID('From'), ref2);
    desc1.putInteger(app.stringIDToTypeID("layerSectionStart"), 139);
    desc1.putInteger(app.stringIDToTypeID("layerSectionEnd"), 140);
    desc1.putString(app.charIDToTypeID('Nm  '), "Group 1");
    app.executeAction(app.charIDToTypeID('Mk  '), desc1, DialogModes.NO);
}
;
