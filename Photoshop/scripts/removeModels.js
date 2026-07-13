//@include "unsmartlayer.js"

//
// Generated Fri Oct 04 2019 17:13:53 GMT+0530
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== my 2 ==============
//

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

  function ungroupLayerssub(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('ungroupLayersEvent'), desc1, dialogMode);
  };

/*   function ungroupLayers(layerNode) {    
    var layerNum = app.activeDocument.layers.length;
    var a = [];
    while (True)
        if (app.activeDocument.layers[i].name == "MODEL"){
            ungroupLayerssub();
         }
    }
}*/

function collectModelLayers(layers) {
    var layerSets = [];
    
    for (var i = 0; i < layers.length; i++) {
        if (layers[i] instanceof LayerSet) {
            if (layers[i].name == "MODEL") {
                layerSets.push(layers[i]);
            }
            
            var _layerSets = collectModelLayers(layers[i].layers);
            for (var ii = 0; ii < _layerSets.length; ii++) {
                layerSets.push(_layerSets[ii]);
            }
        }
    }

    return layerSets;
}

function unGroupLayers(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('ungroupLayersEvent'), desc1, dialogMode);
}

function deSelectLayers(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('selectNoLayers'), desc1, dialogMode);
};

function select_layer(id, add, viz)
{  
try {
    var d = new ActionDescriptor();

    if (viz == undefined) viz = false;

    var r = new ActionReference();

    if (typeof(id) == "string") r.putName( charIDToTypeID( "Lyr " ), id);
    else                        r.putIdentifier( charIDToTypeID( "Lyr " ), id);

    d.putReference( charIDToTypeID( "null" ), r );

    d.putBoolean( charIDToTypeID( "MkVs" ), viz );

    if (add == true) d.putEnumerated( stringIDToTypeID( "selectionModifier" ), stringIDToTypeID( "selectionModifierType" ), stringIDToTypeID( "addToSelection" ) );
    if (add == -1)   d.putEnumerated( stringIDToTypeID( "selectionModifier" ), stringIDToTypeID( "selectionModifierType" ), stringIDToTypeID( "removeFromSelection" ) );

    var ok = true;

    try { executeAction( charIDToTypeID( "slct" ), d, DialogModes.NO ); } catch(e) { ok = false; }

    d = null;

    return ok;
    }
catch (e) { alert(e); return false; }
}

function unGroupMainLayers(layers) {
    layerSets = collectModelLayers(layers);
    for (var i = 0; i < layerSets.length; i++) {
        deSelectLayers();
        //app.activeDocument.activeLayer = layerSets[i];
        select_layer(layerSets[i].id);
        unGroupLayers();
    }
}



//=========================================
//                    my2.main
//=========================================
//

function checkLayersTounSmart(layers) {
    layersToUnsmart = false
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].kind == LayerKind.SMARTOBJECT && layers[i].name == "MODEL") {
            layersToUnsmart = true;
        }
    
        if (layers[i].typename == "LayerSet") {
            layersToUnsmart = (layersToUnsmart || checkLayersTounSmart(layers[i].layers));
        }
    }

    return layersToUnsmart;
}

function removeModels() {
    while (true) {
        layersToUnsmart  = checkLayersTounSmart(app.activeDocument.layers);
        
        if (!layersToUnsmart) {
            break;
        }
    
        selectAllLayers();      // Select All Layers
        unsmartlayermain();
        //ungroupLayers(app.activeDocument.layerSets); 
        //unGroupMainLayers(app.activeDocument.layers)
    }
};
