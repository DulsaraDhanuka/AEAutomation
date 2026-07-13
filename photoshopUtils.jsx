cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

// Select All Layers
function selectAllLayers(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('selectAllLayers'), desc1, dialogMode);
};

// Select Layer
function selectLayer(name, enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), name);
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(3);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Copy
function copySelectedLayers(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(cTID('copy'), undefined, dialogMode);
};

// Paste
function pasteLayers(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(sTID("inPlace"), true);
    executeAction(cTID('past'), desc1, dialogMode);
};

// Make Group
function makeGroup(name, enabled, withDialog) {   
    var group = null;
    if (app.activeDocument.activeLayer && app.activeDocument.activeLayer.typename == "LayerSet") {
        group = app.activeDocument.activeLayer.layerSets.add(name);
    } else {
        group = app.activeDocument.layerSets.add(name);
    }
    group.name = name;
    
    return group;
};

// Get Selected Layers
function getSelectedLayers() {
  var selLayers = [];
  newGroupFromLayers();

  var group = app.activeDocument.activeLayer;
  var layers = group.layers;

  for (var i = 0; i < layers.length; i++) {
    selLayers.push(layers[i]);
  }

  undo();

  return selLayers;
};

// Save Document
function saveDocument(saveDirectory)
{
  var psdFile = new File(saveDirectory.toString() + "/" + app.activeDocument.name + ".psd");
  psdSaveOptions = new PhotoshopSaveOptions();
  psdSaveOptions.embedColorProfile = true;
  psdSaveOptions.alphaChannels = true;  
  activeDocument.saveAs(psdFile, psdSaveOptions, false, Extension.LOWERCASE);
}