function correctLayers(items: Array<Layer>): void {
    for (var i = 0; i < items.length; i++) {
        let item: Layer = items[i];

        if (item) {
            if (item.name.search(/\s*Image\s*/) != -1) {
                item.name = item.name.replace(/\s*Image\s*/, "");
            }

            if (item.layers.length > 0) {
                correctLayers(item.layers);
            }
        }
    }
}

function correctLayerStructure(items) {
    var incorrectLayersPresent = true;
    while (incorrectLayersPresent) {
        incorrectLayersPresent = false;
        var incorrectParents = [];
        var incorrectLayers = [];
        for (var i = 0; i < items.length; i++) {
            var id = items[i].name.split(/\s*::\s*/);
            var itemName = id.pop();
            if (id.length > 0 && id[0].search(/MAIN/) != -1 && (itemName.search(/^\s*[0-9]+(\s*\[.+\])?\s*$/) == -1 && itemName.search(/VECTOR/) == -1 && itemName.search(/IMAGE/) == -1 && itemName.search(/color_[0-9]+/) == -1 && itemName.search(/sketch/) == -1 && itemName.search(/vector/) == -1)) {
                incorrectParents.push(id);
                incorrectLayers.push(items[i]);
                incorrectLayersPresent = true;
            }
        }
        incorrectParents = incorrectParents.unique();
        correctLayerStructureHelper(items, incorrectLayers, incorrectParents);
    }
}

function correctLayerStructureHelper(items, incorrectLayers, incorrectParents) {
    for (var i = 0; i < incorrectParents.length; i++) {
        var parent = incorrectParents[i].slice();
        for (var ii = 0; ii < parent.length; ii++) {
            parent[ii] = RegExp.escape(parent[ii]);
        }
        var parentLayer = null;
        for (var ii = 0; ii < incorrectLayers.length; ii++) {
            if (incorrectLayers[ii] != null && incorrectLayers[ii].name.search(new RegExp("\\s*" + parent.join("\\s*::\\s*") + "\\s*" + ".*")) != -1) {
                if (parentLayer == null) {
                    parentLayer = app.activeDocument.layers.add();
                    parentLayer.name = incorrectParents[i].join(" :: ");
                    parentLayer.move(incorrectLayers[ii], ElementPlacement.PLACEBEFORE);
                }
                for (var iii = 0; iii < incorrectLayers[ii].pageItems.length; iii++) {
                    incorrectLayers[ii].pageItems[iii].move(parentLayer, ElementPlacement.PLACEATEND);
                }
                for (var iii = 0; iii < incorrectLayers[ii].layers.length; iii++) {
                    incorrectLayers[ii].layers[iii].move(parentLayer, ElementPlacement.PLACEATEND);
                }
                incorrectLayers[ii].remove();
                incorrectLayers[ii] = null;
            }
        }
    }
}

//TODO: Update to correct layer order for nested layers
function relocateLayers(newParent: Layer, layers: Array<Layer>, recursive: boolean): void {
    for (var i = 0; i < layers.length; i++) {
        while (layers[i].pageItems.length > 0) {
            layers[i].pageItems[0].move(newParent, ElementPlacement.PLACEATEND);
        }

        if (layers[i].layers.length > 0 && recursive) {
            relocateLayers(newParent, layers[i].layers, recursive);
        }
    }
}
