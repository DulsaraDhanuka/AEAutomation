function convertGroupsToLayers(items) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item) {
            if (item.typename == "GroupItem") {
                if (item.name != "" && item.name != "<Group>") {
                    item = item;
                    var parentLayer = item.parent;
                    var layer = parentLayer.layers.add();
                    layer.name = item.name;
                    while (item.pageItems.length > 0) {
                        item.pageItems[0].move(layer, ElementPlacement.PLACEATEND);
                    }
                    layer.move(item, ElementPlacement.PLACEAFTER);
                    item.remove();
                    var collection = new Array();
                    if (layer.groupItems.length > 0) {
                        for (var ii = 0; ii < layer.groupItems.length; ii++) {
                            collection.push(layer.groupItems[ii]);
                        }
                    }
                    if (collection.length > 0) {
                        convertGroupsToLayers(collection);
                    }
                }
            }
            else if (item.typename == "Layer") {
                item = item;
                var collection = new Array();
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
function getLayerLevelId(layer, splitter) {
    if (splitter === void 0) { splitter = " :: "; }
    var id = "";
    if (layer.parent.typename == "Document") {
        id += layer.name;
        return id;
    }
    if (layer.parent.typename == "Layer") {
        id += getLayerLevelId(layer.parent, splitter);
        id += splitter;
    }
    id += layer.name;
    return id;
}
function prepareSubLayersIntoExportable(layers, doc, splitter) {
    if (splitter === void 0) { splitter = " :: "; }
    for (var i = layers.length - 1; i >= 0; i--) {
        var layer = layers[i];
        if (layer.name != "EXPORTABLE") {
            if (layer.typename == "Layer") {
                if (layer.layers.length > 0 && layer.pageItems.length == 0) {
                    prepareSubLayersIntoExportable(layer.layers, doc, splitter);
                }
                else {
                    var newLayer = doc.layers.getByName("EXPORTABLE").layers.add();
                    if (newLayer.name.search(/DUMMY/g) == 0) {
                        newLayer.removeAll();
                    }
                    newLayer.name = getLayerLevelId(layer);
                    for (var ii = 0; ii < layer.pageItems.length; ii++) {
                        layer.move(newLayer, ElementPlacement.PLACEATBEGINNING);
                    }
                }
            }
        }
    }
}
function cleanupExportable(doc) {
    var i = 0;
    while (doc.layers.length > 1) {
        if (doc.layers[i].name != "EXPORTABLE") {
            doc.layers[i].remove();
        }
        else {
            i += 1;
        }
    }
    var dummyRoot = doc.layers.add();
    exportable = doc.layers.getByName("EXPORTABLE");
    while (exportable.layers.length > 0) {
        exportable.layers[0].move(dummyRoot, ElementPlacement.PLACEBEFORE);
    }
    exportable.remove();
    dummyRoot.remove();
}
function getLayerFromName(items, name) {
    var match = null;
    for (var i = 0; i < items.length; i++) {
        if (items[i].name == name) {
            match = items[i];
        }
    }
    return match;
}
function getLayersFromName(items, name) {
    var matches = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i].name == name) {
            matches.push(items[i]);
        }
    }
    return matches;
}
function getMainLayers(items) {
    var matches = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i].name.search(/MAIN/) != -1) {
            matches.push(items[i]);
        }
    }
    return matches;
}
Array.prototype.contains = function (v) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === v)
            return true;
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
};
RegExp.escape = function (str) {
    var regExp = null;
    if (!regExp) {
        var specials = [
            '/', '.', '*', '+', '?', '|',
            '(', ')', '[', ']', '{', '}', '\\'
        ];
        regExp = new RegExp('(\\' + specials.join('|\\') + ')', 'gim');
    }
    return str.replace(regExp, '\\$1');
};
