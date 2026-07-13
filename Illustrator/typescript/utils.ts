function convertGroupsToLayers(items: Array<Layer | GroupItem>) {    
    for (var i = 0; i < items.length; i++) {
        let item: Layer | GroupItem = items[i];

        if (item) {
            if (item.typename == "GroupItem") {
                if (item.name != "" && item.name != "<Group>") {
                    item = <GroupItem> item;
                    let parentLayer: Layer = <Layer> item.parent;
                    let layer: Layer = parentLayer.layers.add();
                    layer.name = item.name;
    
                    while (item.pageItems.length > 0) {
                        item.pageItems[0].move(layer, ElementPlacement.PLACEATEND);
                    }
    
                    layer.move(item, ElementPlacement.PLACEAFTER);
                    item.remove();
    
                    let collection: Array<Layer | GroupItem> = new Array<Layer | GroupItem>();
    
                    if (layer.groupItems.length > 0) {
                        for (var ii = 0; ii < layer.groupItems.length; ii++) {
                            collection.push(layer.groupItems[ii]);
                        }
                    }
    
                    if (collection.length > 0) {
                        convertGroupsToLayers(collection);
                    }
                }
            } else if (item.typename == "Layer") {
                item = <Layer> item;
                let collection: Array<Layer | GroupItem> = new Array<Layer | GroupItem>();

                if (item.groupItems.length > 0) {
                    for (var ii = 0; ii < item.groupItems.length; ii++) {
                        collection.push(item.groupItems[ii]);
                    }
                }

                if (item.layers.length > 0) {
                    for (var ii = 0; ii < item.layers.length; ii++) {
                        collection.push(item.layers[ii]);
                    }
                }

                if (collection.length > 0) {
                    convertGroupsToLayers(collection);
                }
            }
        }
    }
}

function getLayerLevelId(layer: Layer, splitter: string = " :: ") {
    let id: string = "";

    if ((<Document> layer.parent).typename == "Document") {
        id += layer.name;
        return id;
    }

    if ((<Layer> layer.parent).typename == "Layer") {
        id += getLayerLevelId(<Layer> layer.parent, splitter);
        id += splitter;
    }

    id += layer.name;

    return id;
}

function prepareSubLayersIntoExportable(layers: Layers, doc: Document, splitter: string = " :: ") {
    for (var i = layers.length-1; i >= 0; i--) {
        let layer: Layer = layers[i];

        if (layer.name != "EXPORTABLE") {
            if (layer.typename == "Layer") {
                if (layer.layers.length > 0 && layer.pageItems.length == 0) {
                    prepareSubLayersIntoExportable(layer.layers, doc, splitter);
                } else {
                    var newLayer = doc.layers.getByName("EXPORTABLE").layers.add();
                    newLayer.name = getLayerLevelId(layer);
                    for (var ii = 0; ii < layer.pageItems.length; ii++) {
                        (<Layer> layer).move(newLayer, ElementPlacement.PLACEATBEGINNING);
                    }
                }
            }
        }
    }
}

function cleanupExportable(doc: Document) {
    let i: number = 0;
    while(doc.layers.length > 1) {
        if (doc.layers[i].name != "EXPORTABLE") {
            doc.layers[i].remove();
        } else {
            i += 1;
        }
    }

    let dummyRoot: Layer = doc.layers.add();
    exportable = doc.layers.getByName("EXPORTABLE");

    while(exportable.layers.length > 0) {
        exportable.layers[0].move(dummyRoot, ElementPlacement.PLACEBEFORE);
    }

    exportable.remove();
    dummyRoot.remove();
}

function getLayerFromName(items: Array<Layer>, name: string): Layer {
    let match: Layer = null;
    for (var i = 0; i < items.length; i++) {
        if (items[i].name == name) {
            match = items[i];
        }
    }

    return match;
}

function getLayersFromName(items: Array<Layer>, name: string): Array<Layer> {
    let matches: Array<Layer> = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i].name == name) {
            matches.push(items[i]);
        }
    }

    return matches;
}

function getMainLayers(items: Array<Layer>): Array<Layer> {
    var matches: Array<Layer> = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i].name.search(/MAIN/) != -1) {
            matches.push(items[i]);
        }
    }

    return matches;
}

Array.prototype.contains = function (v) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function () {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

RegExp.escape = function (str) {
    let regExp: RegExp = null;
    if (!regExp) {
        var specials = [
            '/', '.', '*', '+', '?', '|',
            '(', ')', '[', ']', '{', '}', '\\'
        ];
        regExp = new RegExp(
            '(\\' + specials.join('|\\') + ')', 'gim'
        );
    }
    return str.replace(regExp, '\\$1');

}