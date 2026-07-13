#target photoshop

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 4 Pieces (2x2) ==============
//

  // Set
  function nameLayer(enabled, withDialog) {
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "original_image");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  
  
  // Set
  function makeSelection(enabled, withDialog, i, j, countX, countY) {
  
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Top '), cTID('#Prc'), 0+j*100/countY-1);
    desc2.putUnitDouble(cTID('Left'), cTID('#Prc'), 0+i*100/countX-1);
    desc2.putUnitDouble(cTID('Btom'), cTID('#Prc'), (j+1)*100/countY+1);
    desc2.putUnitDouble(cTID('Rght'), cTID('#Prc'), (i+1)*100/countX+1);
    desc1.putObject(cTID('T   '), cTID('Rctn'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function Select_original_image(enabled, withDialog) {
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "original_image");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Layer Via Copy
  function copyselction(enabled, withDialog) {

    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Set
  function createNewLayer(enabled, withDialog,i,j) {
 
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), (j+i).toString());
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

function _4Pieces_2x2() {
    var layer_name = app.activeDocument.activeLayer.name;
    var layer = app.activeDocument.activeLayer;
    nameLayer();
    var group = app.activeDocument.activeLayer.parent.layerSets.add();
    group.name = layer_name + " [elementGroup=\"true\"]";
    group.move(layer, ElementPlacement.PLACEBEFORE);
    var pieces = [];
    var i, j;
    countX = 15;
    countY = 15;
    for (j = 0; j < countY; j++) {
        for (i = 0; i < countX; i++) {
            try {
                makeSelection(undefined,undefined,i,j ,countX, countY);
                Select_original_image();
                copyselction();
                createNewLayer(undefined, undefined,i,j*countX);
                pieces.push(app.activeDocument.activeLayer);
            } catch(err) {
            }
        }
    }

    for (var i = 0; i < pieces.length; i++) {
        pieces[i].move(group, ElementPlacement.PLACEATEND);
    }

    layer.remove();
};