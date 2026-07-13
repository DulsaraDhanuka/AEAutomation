//@include "photoshopFunctions.js"
//@include "removeModels.js"

let doc = app.activeDocument;
removeModels();
flattenMasks();
processLayers(doc.layers);
//splitterMain();

function processLayers(layers) {
    for (var i = 0; i < layers.length; i++) {
        if (layers[i] instanceof LayerSet) {
            processLayers(layers[i].layers);
        } else {
            if (layers[i].kind != LayerKind.TEXT) {
                layers[i].rasterize(RasterizeType.ENTIRELAYER);

                doc.activeLayer = layers[i];
                var ref = new ActionReference();
                ref.putEnumerated(app.charIDToTypeID("Lyr "), app.charIDToTypeID("Ordn"), app.charIDToTypeID("Trgt"));
                var desc = app.executeActionGet(ref);
                if (desc.hasKey(app.charIDToTypeID('Grup')) && desc.getBoolean(app.charIDToTypeID('Grup'))) {
                    mergeDown();
                }
            }
        }
    }
}

