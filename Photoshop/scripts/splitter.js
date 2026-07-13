//@include "splitterUtils.js"

function HistoryState(enabled, withDialog,nameofsnapshot) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('SnpS'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('HstS'), cTID('CrnH'));
    desc1.putReference(cTID('From'), ref2);
    desc1.putString(cTID('Nm  '), nameofsnapshot);
    desc1.putEnumerated(cTID('Usng'), cTID('HstS'), cTID('FllD'));
    executeAction(cTID('Mk  '), desc1, dialogMode);
};

function iterateLayers(group, func) {
    for (var i = 0; i < group.layers.length; i++) {
        if (group.layers[i] instanceof LayerSet) {
            iterateLayers(group.layers[i], func)
        } else{
            func(group.layers[i]);
        }
    }
};

function getLayerColourByID(ID) {
    var ref = new ActionReference();
    ref.putProperty( charIDToTypeID("Prpr") ,stringIDToTypeID('color'));
    ref.putIdentifier(charIDToTypeID( "Lyr " ), ID );
    return typeIDToStringID(executeActionGet(ref).getEnumerationValue(stringIDToTypeID('color')));
};

function tagRed(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Rd  '));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
};

function splitterMain() {
    HistoryState(1, 0, "Before splitter script");

    var docRef = app.activeDocument;
    var layersToSplit = []

    iterateLayers(docRef, function (layer) {
        if (layer.kind == LayerKind.SOLIDFILL) {
            docRef.activeLayer = layer;
            docRef.activeLayer.rasterize(RasterizeType.SHAPE);
            tagRed();
        }
    });

    iterateLayers(docRef, function (layer) {
        color = getLayerColourByID(layer.id);
        if (color == "red") {
            layersToSplit.push(layer);
        }
    });

    for (var i = 0; i < layersToSplit.length; i++) {
        docRef.activeLayer = layersToSplit[i];
        _4Pieces_2x2();
    }

    HistoryState(1, 0, "After splitter script");
}

splitterMain();