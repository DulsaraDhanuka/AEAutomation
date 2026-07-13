//@include "./json.js"
//@include "./graphCode.js"
//@include "./Element/Video.js"
//@include "./Element/Element.js"
//@include "./Element/ElementGroup.js"
//@include "./Element/ElementProperty.js"
//@include "./Element/ElementPropertyGroup.js"

function createFolder(name: string) : FolderItem {
    let folder: FolderItem = <FolderItem> searchProjectItem(name, FolderItem);

    if (folder == null) {
        app.project.items.addFolder(name)
        folder = <FolderItem> searchProjectItem(name, FolderItem);
    }

    return folder;
}

function searchLayerFromName(comp: CompItem, layerName: string, recursive: boolean = false): AVLayer {
    let layer: AVLayer = null;

    for (var i = 0; i < comp.layers.length; i++) {
        if (comp.layers[i + 1].name == layerName) {
            return <AVLayer>comp.layers[i + 1];
        }

        if (recursive && (<AVLayer>comp.layers[i + 1]).source instanceof CompItem) {
            layer = searchLayerFromName((<AVLayer>comp.layers[i + 1]).source, layerName, recursive);

            if (layer != null) {
                return layer;
            }
        }
    }

    return null;
}

function searchProjectItem(itemName: string, itemType?, folder: FolderItem = <FolderItem><unknown>app.project) : Item {
    for (var i = 1; i <= folder.items.length; i++) {
        if (folder.items[i].name == itemName) {
            if (itemType && isType(folder.items[i], itemType)) {
                return folder.items[i];
            } else if (itemType) {
                return null;
            } else {
                return folder.items[i];
            }
        }
    }

    return null;
}

function getGroupBoundaries(group: ElementGroup, current: boolean, time: number = 0) : [number, number, number, number] {
    let top: number = null;
    let left: number = null;
    let right: number = null;
    let bottom: number = null;

    group.iterate(function(element){

        let [layerTop, layerLeft, layerRight, layerBottom] : [number, number, number, number] = [0, 0, 0, 0];
        if (isType(element, Element)) {
            [layerTop, layerLeft, layerRight, layerBottom] = getLayerPoints(element.getLayer(), current, time);
        } else if (isType(element, ElementGroup)) {
            [layerTop, layerLeft, layerRight, layerBottom] = getGroupBoundaries(element, current, time);
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

function getGroupDepthAverage(group: ElementGroup, current: boolean, time: number = 0): number {
    let depths: number[] = [];

    group.iterate(function(element: Element){
        let depth: number = 0;
        if ((<AVLayer>element.getLayer()).threeDLayer) {
            if (current) {
                depth = <number>(<Property>(<AVLayer>element.getLayer()).property("Position")).valueAtTime(time, true)[2];
            } else {
                depth = (<Property>(<AVLayer>element.getLayer()).property("Position")).value[2];
            }
        }

        depths.push(depth);
    }, true);

    let sum: number = 0;
    for (var i = 0; i < depths.length; i++) {
        sum += depths[i];
    }

    return sum / depths.length;
}

function getLayerPoints(layer: AVLayer, current: boolean, time: number = 0): [number, number, number, number] {
    function generateExpression(layerName: string, yPos: string, xPos: string): string {
        let exp: string = "";
        exp += "L = thisComp.layer(\"" + layerName.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"") + "\");";
        exp += "s = L.sourceRectAtTime(time);";

        exp += "LWidth = (s.width*L.transform.scale[0])/100;";
        exp += "LHeight = (s.height*L.transform.scale[1])/100;";

        exp += "corner = [";
        if (xPos == "left") {
            exp += "L.position[0]-(LWidth/2)";
        } else if (xPos == "right") {
            exp += "L.position[0]+(LWidth/2)";
        }
        exp += ", ";
        if (yPos == "top") {
            exp += " (L.position[1]-LHeight/2)";
        } else if (yPos == "bottom") {
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
    function sortFunc(a: number, b: number) {
        return a-b;
    }

    var comp = layer.containingComp;

    var corners: [[number, number], [number, number]] = [[0, 0], [0, 0]];
    var nullObj = comp.layers.addNull(9999);
    nullObj.threeDLayer = true;;
    if (!current) {
        time = 0;
    }

    (<Property>nullObj.property("Position")).expression = generateExpression(layer.name, "top", "left");
    let topLeft: [number, number] = <[number, number]>(<Property>nullObj.property("Position")).valueAtTime(time, false);

    (<Property>nullObj.property("Position")).expression = generateExpression(layer.name, "bottom", "right");
    let bottomRight: [number, number] = <[number, number]>(<Property>nullObj.property("Position")).valueAtTime(time, false);

    corners = [[topLeft[1], bottomRight[1]], [topLeft[0], bottomRight[0]]];
    corners[0] = corners[0].sort(sortFunc);
    corners[1] = corners[1].sort(sortFunc);

    nullObj.source.remove();

    let rotatedCorners: [number, number, number, number] = [corners[0][0], corners[1][0], corners[1][1], corners[0][1]];

    if (layer.parent != null && layer.parent != undefined) {
        let parentCorners: [number, number, number, number] = getLayerPoints(<AVLayer>layer.parent, current, time);
        rotatedCorners = [rotatedCorners[0] + parentCorners[0], rotatedCorners[1] + parentCorners[1], rotatedCorners[2] + parentCorners[2], rotatedCorners[3] + parentCorners[3]];
    }

    // OUTPUT: top, left, right, bottom
    return rotatedCorners;
}

function alignToPoints(points: [number, number, number, number], layer: AVLayer, time: number) {
    let [top, left, right, bottom] = points;
    let [width, height] = [right - left, bottom - top];

    let [layer_top, layer_left, layer_right, layer_bottom] = getLayerPoints(layer, true, time);
    let [layer_width, layer_height] = [layer_right - layer_left, layer_bottom - layer_top];

    (<Property>layer.property("Position")).setValue([left + (width / 2), top + (height / 2)]);
    (<Property>layer.property("Scale")).setValue([width / layer_width * 100, height / layer_height * 100]);
}

// TODO: Add tangent support
function getDistanceBetween2Vertices(vertex1, vertex2) {
    let adjacent = Math.abs(vertex2.vertex[0]-vertex1.vertex[0]);
    let opposite = Math.abs(vertex1.vertex[1]-vertex2.vertex[1]);
    let lineLength = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));

    return lineLength;
}

function pathVertexPositionToAbsolutePosition(vertex: [number, number], layer: AVLayer, time: number, shapeGroup?: PropertyGroup) : [number, number] {
    if (shapeGroup == undefined) {
        let [top, left, right, bottom]: [number, number, number, number] = getLayerPoints(layer, true, time);
    
        return [left + vertex[0], top + vertex[1]];
    } else {
        let o1: number = ((<number> (<Property> layer.property("Position")).value[0]) - (<number> (<Property> layer.property("Anchor Point")).value[0])) + ((<number> (<Property> shapeGroup.property("Transform").property("Position")).value[0]) - (<number> (<Property> shapeGroup.property("Transform").property("Anchor Point")).value[0]));
        let o2: number = ((<number> (<Property> layer.property("Position")).value[1]) - (<number> (<Property> layer.property("Anchor Point")).value[1])) + ((<number> (<Property> shapeGroup.property("Transform").property("Position")).value[1]) - (<number> (<Property> shapeGroup.property("Transform").property("Anchor Point")).value[1]));
        return [o1 + vertex[0], o2 + vertex[1]];
    }
}

function decodeTree(layers: LayerCollection, mainComp: CompItem, splitter: string = "::") : ElementGroup {
    let splitterRegEx: RegExp = new RegExp("\\s*" + splitter + "\\s*", "g");
    
    let mainGroup: ElementGroup = new ElementGroup("ROOT", mainComp);

    let prevGroup: ElementGroup = mainGroup;

    for (var i = 0; i < layers.length; i++) {
        if (layers[i + 1] instanceof CameraLayer) {
            continue;
        }

        let layerLevels: Array<string> = layers[i+1].name.split(splitterRegEx);

        while (layerLevels.length > 0) {
            let level: string = layerLevels.shift();
            if (layerLevels.length > 0) {
                if (prevGroup.get(level.replace(/\s*\[.*\]/, "")) == null) {
                    let group: ElementGroup = new ElementGroup(level, mainComp);
                    prevGroup.add(group);
                    prevGroup = <ElementGroup> prevGroup.get(prevGroup.length-1);
                } else {
                    prevGroup = <ElementGroup> prevGroup.get(level.replace(/\s*\[.*\]/, ""));
                }
            } else {
                let element: Element = new Element(<AVLayer>layers[i + 1], layers[i + 1].containingComp, layers[i + 1].name.split(splitterRegEx)[layers[i + 1].name.split(splitterRegEx).length - 1], (<AVLayer>layers[i + 1]).name);

                /*************************************
                 *** Handle video element property ***
                 *************************************/
                if (element.getProperties().get("video")) {
                    element = new Video(<AVLayer>layers[i + 1], layers[i + 1].containingComp, layers[i + 1].name.split(splitterRegEx)[layers[i + 1].name.split(splitterRegEx).length - 1], (<AVLayer>layers[i + 1]).name);
                }

                prevGroup.add(element);
            }
        }

        prevGroup = mainGroup;
    }

    return mainGroup;
}

function createElementsRecursively(ids: Array<string>, parent: ElementGroup, gIDS: {}, layer: AVLayer, ptr: number = 0) : void {
    if (ptr < ids.length-1) {
        let id: string = ids.slice(0, ptr).join(" :: ");

        if (gIDS.hasOwnProperty(id)) {
            parent = gIDS[id];
        } else {
            parent.add(new ElementGroup(ids[ptr], parent.getComp()));
            parent = <ElementGroup> parent.get(parent.length-1);
            gIDS[id] = parent;
        }
        ptr++;
        createElementsRecursively(ids, parent, gIDS, layer, ptr);
    } else {
        parent.add(new Element(layer, layer.containingComp, ids.join(" :: ")));
    }
}

/**
 * 
 * TODO: This function might be unstable
 * 
 */
function importAsset(filePath: string, importType: ImportAsType = null, currentDir?: string): Item {
    app.executeCommand(app.findMenuCommandId("Project"));
    app.executeCommand(app.findMenuCommandId("Project"));
    app.executeCommand(2004);
    let options: ImportOptions = new ImportOptions();
    filePath = filePath.toString().replace(/\\/gm, "/").replace(/\//gm, "/");
    if (currentDir) {
        if (filePath.substring(0, 2) == "./") {
            filePath = currentDir + "/" + filePath.substring(2, filePath.length);
        }

        if (filePath.substring(0, 3) == "../") {
            filePath = Folder(currentDir).parent.toString() + "/" + filePath.substring(2, filePath.length);
        }
    }

    let file: File = File(filePath);
    if (Folder("").parent.absoluteURI == file.parent.absoluteURI) {
        file = File(currentDir + "/" + filePath);
    }
    options.file = file;
    if (!importType) {
        importType = ImportAsType.FOOTAGE;
    }
    options.importAs = importType;
    app.project.importFile(options);
    let projItem = app.project.activeItem;
    return projItem;
}

function processHandComp(comp: CompItem) {
    let hand: AVLayer = <AVLayer>comp.layer("HAND");
    let anchorPoint: AVLayer = <AVLayer>comp.layer("ANCHOR_POINT");

    let w: number = ((hand.width - comp.width) / 2);
    let h: number = ((hand.height - comp.height) / 2);
    (<Property>hand.property("Anchor Point")).setValue([w + (<Property>anchorPoint.property("Position")).value[0], h + (<Property>anchorPoint.property("Position")).value[1]]);
    comp.width = hand.width * 2;
    comp.height = hand.height * 2;
    (<Property>hand.property("Position")).setValue([comp.width/2, comp.height/2]);
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
    const chunked_arr = [];
    for (let i = 0; i < array.length; i++) {
        const last = chunked_arr[chunked_arr.length - 1];
        if (!last || last.length === size) {
            chunked_arr.push([array[i]]);
        } else {
            last.push(array[i]);
        }
    }
    return chunked_arr;
}

function addslashes(string: string): string {
    return string.replace(/\\/g, '\\\\').
        replace(/\u0008/g, '\\b').
        replace(/\t/g, '\\t').
        replace(/\n/g, '\\n').
        replace(/\f/g, '\\f').
        replace(/\r/g, '\\r').
        replace(/'/g, '\\\'').
        replace(/"/g, '\\"');
}

function hexToRgb(hex: string): [number, number, number] {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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
            } catch (err) { };
        }
        writeLn("Renamed " + renamedLayerCount + " layer(s).");
    }

    app.endUndoGroup();
}

function parentToLayer(parentLayer: Layer, childLayer: Layer) {
    if (childLayer.parent == null || childLayer.parent == undefined) {
        childLayer.parent = parentLayer;
    } else if (childLayer.parent != parentLayer) {
        parentToLayer(parentLayer, childLayer.parent);
    }
}

if (!Object.keys) {
    Object.keys = (function () {
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
            dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
            dontEnumsLength = dontEnums.length;

        return function (obj) {
            if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new Error('Object.keys called on non-object');

            var result = [];

            for (var prop in obj) {
                if (hasOwnProperty.call(obj, prop)) result.push(prop);
            }

            if (hasDontEnumBug) {
                for (var i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
                }
            }
            return result;
        }
    })()
};

function wiggle(layer: AVLayer, property: Property, freq: number, amp: number, startTime: number = 0, endTime: number = 50) {
    let currentValue: PropertyValue = property.value;
    if (property.numKeys > 0) {
        currentValue = property.keyValue(property.numKeys);
    }

    layer.containingComp.openInViewer();
    layer.containingComp.time = 0;
    if (isType(layer.source, CompItem)) {
        let comp: CompItem = <CompItem>layer.source;
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
    
    property.expression = "if (time >= " + startTime + " && time < " + endTime + ") {wiggle(" + freq + ", "+ amp + ");} else {value;}";
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