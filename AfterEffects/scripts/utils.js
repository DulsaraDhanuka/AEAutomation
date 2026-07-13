//@include "./json.js"
//@include "./graphCode.js"
//@include "./Element/Video.js"
//@include "./Element/Element.js"
//@include "./Element/ElementGroup.js"
//@include "./Element/ElementProperty.js"
//@include "./Element/ElementPropertyGroup.js"
function createFolder(name) {
    var folder = searchProjectItem(name, FolderItem);
    if (folder == null) {
        app.project.items.addFolder(name);
        folder = searchProjectItem(name, FolderItem);
    }
    return folder;
}
function searchLayerFromName(comp, layerName, recursive) {
    if (recursive === void 0) { recursive = false; }
    var layer = null;
    for (var i = 0; i < comp.layers.length; i++) {
        if (comp.layers[i + 1].name == layerName) {
            return comp.layers[i + 1];
        }
        if (recursive && comp.layers[i + 1].source instanceof CompItem) {
            layer = searchLayerFromName(comp.layers[i + 1].source, layerName, recursive);
            if (layer != null) {
                return layer;
            }
        }
    }
    return null;
}
function searchProjectItem(itemName, itemType, folder) {
    if (folder === void 0) { folder = app.project; }
    for (var i = 1; i <= folder.items.length; i++) {
        if (folder.items[i].name == itemName) {
            if (itemType && isType(folder.items[i], itemType)) {
                return folder.items[i];
            }
            else if (itemType) {
                return null;
            }
            else {
                return folder.items[i];
            }
        }
    }
    return null;
}
function getGroupBoundaries(group, current, time) {
    if (time === void 0) { time = 0; }
    var top = null;
    var left = null;
    var right = null;
    var bottom = null;
    group.iterate(function (element) {
        var _a, _b;
        var _c = [0, 0, 0, 0], layerTop = _c[0], layerLeft = _c[1], layerRight = _c[2], layerBottom = _c[3];
        if (isType(element, Element)) {
            _a = getLayerPoints(element.getLayer(), current, time), layerTop = _a[0], layerLeft = _a[1], layerRight = _a[2], layerBottom = _a[3];
        }
        else if (isType(element, ElementGroup)) {
            _b = getGroupBoundaries(element, current, time), layerTop = _b[0], layerLeft = _b[1], layerRight = _b[2], layerBottom = _b[3];
        }
        if (top == null || top > layerTop) {
            top = layerTop;
        }
        if (left == null || left > layerLeft) {
            left = layerLeft;
        }
        if (right == null || right < layerRight) {
            right = layerRight;
        }
        if (bottom == null || bottom < layerBottom) {
            bottom = layerBottom;
        }
    });
    return [top, left, right, bottom];
}
function getGroupDepthAverage(group, current, time) {
    if (time === void 0) { time = 0; }
    var depths = [];
    group.iterate(function (element) {
        var depth = 0;
        if (element.getLayer().threeDLayer) {
            if (current) {
                depth = element.getLayer().property("Position").valueAtTime(time, true)[2];
            }
            else {
                depth = element.getLayer().property("Position").value[2];
            }
        }
        depths.push(depth);
    }, true);
    var sum = 0;
    for (var i = 0; i < depths.length; i++) {
        sum += depths[i];
    }
    return sum / depths.length;
}
function getLayerPoints(layer, current, time) {
    if (time === void 0) { time = 0; }
    function generateExpression(layerName, yPos, xPos) {
        var exp = "";
        exp += "L = thisComp.layer(\"" + layerName.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"") + "\");";
        exp += "s = L.sourceRectAtTime(time);";
        exp += "LWidth = (s.width*L.transform.scale[0])/100;";
        exp += "LHeight = (s.height*L.transform.scale[1])/100;";
        exp += "corner = [";
        if (xPos == "left") {
            exp += "L.position[0]-(LWidth/2)";
        }
        else if (xPos == "right") {
            exp += "L.position[0]+(LWidth/2)";
        }
        exp += ", ";
        if (yPos == "top") {
            exp += " (L.position[1]-LHeight/2)";
        }
        else if (yPos == "bottom") {
            exp += " (L.position[1]+LHeight/2)";
        }
        exp += "];";
        exp += "angle = degreesToRadians(L.rotation);";
        exp += "tempX = corner[0] - L.position[0];";
        exp += "tempY = corner[1] - L.position[1];";
        exp += "rotatedX = tempX*Math.cos(angle)-tempY*Math.sin(angle);";
        exp += "rotatedY = tempX*Math.sin(angle)+tempY*Math.cos(angle);";
        exp += "x = rotatedX + L.position[0];";
        exp += "y = rotatedY + L.position[1];";
        exp += "z = 0;";
        exp += "if (L.transform.position.value.length == 3) {";
        exp += "z = L.transform.position[2];";
        exp += "}";
        exp += "[x, y, z];";
        return exp;
    }
    function sortFunc(a, b) {
        return a - b;
    }
    var comp = layer.containingComp;
    var corners = [[0, 0], [0, 0]];
    var nullObj = comp.layers.addNull(9999);
    nullObj.threeDLayer = true;
    ;
    if (!current) {
        time = 0;
    }
    nullObj.property("Position").expression = generateExpression(layer.name, "top", "left");
    var topLeft = nullObj.property("Position").valueAtTime(time, false);
    nullObj.property("Position").expression = generateExpression(layer.name, "bottom", "right");
    var bottomRight = nullObj.property("Position").valueAtTime(time, false);
    corners = [[topLeft[1], bottomRight[1]], [topLeft[0], bottomRight[0]]];
    corners[0] = corners[0].sort(sortFunc);
    corners[1] = corners[1].sort(sortFunc);
    nullObj.source.remove();
    var rotatedCorners = [corners[0][0], corners[1][0], corners[1][1], corners[0][1]];
    if (layer.parent != null && layer.parent != undefined) {
        var parentCorners = getLayerPoints(layer.parent, current, time);
        rotatedCorners = [rotatedCorners[0] + parentCorners[0], rotatedCorners[1] + parentCorners[1], rotatedCorners[2] + parentCorners[2], rotatedCorners[3] + parentCorners[3]];
    }
    // OUTPUT: top, left, right, bottom
    return rotatedCorners;
}
function alignToPoints(points, layer, time) {
    var top = points[0], left = points[1], right = points[2], bottom = points[3];
    var _a = [right - left, bottom - top], width = _a[0], height = _a[1];
    var _b = getLayerPoints(layer, true, time), layer_top = _b[0], layer_left = _b[1], layer_right = _b[2], layer_bottom = _b[3];
    var _c = [layer_right - layer_left, layer_bottom - layer_top], layer_width = _c[0], layer_height = _c[1];
    layer.property("Position").setValue([left + (width / 2), top + (height / 2)]);
    layer.property("Scale").setValue([width / layer_width * 100, height / layer_height * 100]);
}
// TODO: Add tangent support
function getDistanceBetween2Vertices(vertex1, vertex2) {
    var adjacent = Math.abs(vertex2.vertex[0] - vertex1.vertex[0]);
    var opposite = Math.abs(vertex1.vertex[1] - vertex2.vertex[1]);
    var lineLength = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));
    return lineLength;
}
function pathVertexPositionToAbsolutePosition(vertex, layer, time, shapeGroup) {
    if (shapeGroup == undefined) {
        var _a = getLayerPoints(layer, true, time), top = _a[0], left = _a[1], right = _a[2], bottom = _a[3];
        return [left + vertex[0], top + vertex[1]];
    }
    else {
        var o1 = (layer.property("Position").value[0] - layer.property("Anchor Point").value[0]) + (shapeGroup.property("Transform").property("Position").value[0] - shapeGroup.property("Transform").property("Anchor Point").value[0]);
        var o2 = (layer.property("Position").value[1] - layer.property("Anchor Point").value[1]) + (shapeGroup.property("Transform").property("Position").value[1] - shapeGroup.property("Transform").property("Anchor Point").value[1]);
        return [o1 + vertex[0], o2 + vertex[1]];
    }
}
function decodeTree(layers, mainComp, splitter) {
    if (splitter === void 0) { splitter = "::"; }
    var splitterRegEx = new RegExp("\\s*" + splitter + "\\s*", "g");
    var mainGroup = new ElementGroup("ROOT", mainComp);
    var prevGroup = mainGroup;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i + 1] instanceof CameraLayer) {
            continue;
        }
        var layerLevels = layers[i + 1].name.split(splitterRegEx);
        while (layerLevels.length > 0) {
            var level = layerLevels.shift();
            if (layerLevels.length > 0) {
                if (prevGroup.get(level.replace(/\s*\[.*\]/, "")) == null) {
                    var group = new ElementGroup(level, mainComp);
                    prevGroup.add(group);
                    prevGroup = prevGroup.get(prevGroup.length - 1);
                }
                else {
                    prevGroup = prevGroup.get(level.replace(/\s*\[.*\]/, ""));
                }
            }
            else {
                var element = new Element(layers[i + 1], layers[i + 1].containingComp, layers[i + 1].name.split(splitterRegEx)[layers[i + 1].name.split(splitterRegEx).length - 1], layers[i + 1].name);
                /*************************************
                 *** Handle video element property ***
                 *************************************/
                if (element.getProperties().get("video")) {
                    element = new Video(layers[i + 1], layers[i + 1].containingComp, layers[i + 1].name.split(splitterRegEx)[layers[i + 1].name.split(splitterRegEx).length - 1], layers[i + 1].name);
                }
                prevGroup.add(element);
            }
        }
        prevGroup = mainGroup;
    }
    return mainGroup;
}
function createElementsRecursively(ids, parent, gIDS, layer, ptr) {
    if (ptr === void 0) { ptr = 0; }
    if (ptr < ids.length - 1) {
        var id = ids.slice(0, ptr).join(" :: ");
        if (gIDS.hasOwnProperty(id)) {
            parent = gIDS[id];
        }
        else {
            parent.add(new ElementGroup(ids[ptr], parent.getComp()));
            parent = parent.get(parent.length - 1);
            gIDS[id] = parent;
        }
        ptr++;
        createElementsRecursively(ids, parent, gIDS, layer, ptr);
    }
    else {
        parent.add(new Element(layer, layer.containingComp, ids.join(" :: ")));
    }
}
/**
 *
 * TODO: This function might be unstable
 *
 */
function importAsset(filePath, importType, currentDir) {
    if (importType === void 0) { importType = null; }
    app.executeCommand(app.findMenuCommandId("Project"));
    app.executeCommand(app.findMenuCommandId("Project"));
    app.executeCommand(2004);
    var options = new ImportOptions();
    filePath = filePath.toString().replace(/\\/gm, "/").replace(/\//gm, "/");
    if (currentDir) {
        if (filePath.substring(0, 2) == "./") {
            filePath = currentDir + "/" + filePath.substring(2, filePath.length);
        }
        if (filePath.substring(0, 3) == "../") {
            filePath = Folder(currentDir).parent.toString() + "/" + filePath.substring(2, filePath.length);
        }
    }
    var file = File(filePath);
    if (Folder("").parent.absoluteURI == file.parent.absoluteURI) {
        file = File(currentDir + "/" + filePath);
    }
    options.file = file;
    if (!importType) {
        importType = ImportAsType.FOOTAGE;
    }
    options.importAs = importType;
    app.project.importFile(options);
    var projItem = app.project.activeItem;
    return projItem;
}
function processHandComp(comp) {
    var hand = comp.layer("HAND");
    var anchorPoint = comp.layer("ANCHOR_POINT");
    var w = ((hand.width - comp.width) / 2);
    var h = ((hand.height - comp.height) / 2);
    hand.property("Anchor Point").setValue([w + anchorPoint.property("Position").value[0], h + anchorPoint.property("Position").value[1]]);
    comp.width = hand.width * 2;
    comp.height = hand.height * 2;
    hand.property("Position").setValue([comp.width / 2, comp.height / 2]);
    anchorPoint.enabled = false;
}
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function chunk(array, size) {
    var chunked_arr = [];
    for (var i_1 = 0; i_1 < array.length; i_1++) {
        var last = chunked_arr[chunked_arr.length - 1];
        if (!last || last.length === size) {
            chunked_arr.push([array[i_1]]);
        }
        else {
            last.push(array[i_1]);
        }
    }
    return chunked_arr;
}
function addslashes(string) {
    return string.replace(/\\/g, '\\\\').
        replace(/\u0008/g, '\\b').
        replace(/\t/g, '\\t').
        replace(/\n/g, '\\n').
        replace(/\f/g, '\\f').
        replace(/\r/g, '\\r').
        replace(/'/g, '\\\'').
        replace(/"/g, '\\"');
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}
function duplicateLayer() {
    // duplicate selected layers and rename dupes to match originals exactly
    app.beginUndoGroup("Duplicate selected layers and preserve exact names");
    if (app.project.activeItem instanceof CompItem) {
        var renamedLayerCount = 0;
        for (var i = 0; i < app.project.activeItem.selectedLayers.length; i++) {
            try {
                var originalLayer = app.project.activeItem.selectedLayers[i];
                var newLayer = originalLayer.duplicate();
                newLayer.name = originalLayer.name;
                renamedLayerCount++;
            }
            catch (err) { }
            ;
        }
        writeLn("Renamed " + renamedLayerCount + " layer(s).");
    }
    app.endUndoGroup();
}
function parentToLayer(parentLayer, childLayer) {
    if (childLayer.parent == null || childLayer.parent == undefined) {
        childLayer.parent = parentLayer;
    }
    else if (childLayer.parent != parentLayer) {
        parentToLayer(parentLayer, childLayer.parent);
    }
}
if (!Object.keys) {
    Object.keys = (function () {
        var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'), dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ], dontEnumsLength = dontEnums.length;
        return function (obj) {
            if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null)
                throw new Error('Object.keys called on non-object');
            var result = [];
            for (var prop in obj) {
                if (hasOwnProperty.call(obj, prop))
                    result.push(prop);
            }
            if (hasDontEnumBug) {
                for (var i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i]))
                        result.push(dontEnums[i]);
                }
            }
            return result;
        };
    })();
}
;
function wiggle(layer, property, freq, amp, startTime, endTime) {
    if (startTime === void 0) { startTime = 0; }
    if (endTime === void 0) { endTime = 50; }
    var currentValue = property.value;
    if (property.numKeys > 0) {
        currentValue = property.keyValue(property.numKeys);
    }
    layer.containingComp.openInViewer();
    layer.containingComp.time = 0;
    if (isType(layer.source, CompItem)) {
        var comp = layer.source;
        comp.duration = endTime;
    }
    layer.outPoint = endTime;
    app.executeCommand(2004);
    property.selected = true;
    for (var i = 1; i <= property.numKeys; i++) {
        if (property.keyTime(i) < startTime || property.keyTime(i) >= endTime) {
            property.setSelectedAtKey(i, true);
        }
    }
    app.executeCommand(19);
    app.executeCommand(2004);
    property.expression = "if (time >= " + startTime + " && time < " + endTime + ") {wiggle(" + freq + ", " + amp + ");} else {value;}";
    property.selected = true;
    app.executeCommand(2639);
    app.executeCommand(2004);
    for (var i = 1; i < property.numKeys; i++) {
        if (property.keyTime(i) < startTime || property.keyTime(i) >= endTime) {
            property.setSelectedAtKey(i, true);
        }
    }
    app.executeCommand(21);
    layer.containingComp.time = 0;
    property.selected = true;
    app.executeCommand(20);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
