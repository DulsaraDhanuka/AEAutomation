//@include "./graphUtils.js"
//@include "./windows.js"
try {
    //@ts-ignore
    var xLib = new ExternalObject("lib:\PlugPlugExternalObject");
}
catch (e) {
    alert(e);
}
function dispatchCEPEvent(_type, _data) {
    if (xLib) {
        //@ts-ignore
        var eventObj = new CSXSEvent();
        eventObj.type = _type;
        eventObj.data = _data;
        eventObj.dispatch();
        $.sleep(0);
        app.refresh();
    }
}
function main(validateConnectors, validateOnly) {
    if (validateConnectors === void 0) { validateConnectors = false; }
    if (validateOnly === void 0) { validateOnly = false; }
    dispatchCEPEvent("status_change", "Preparing file...");
    var originalFileLocation = new File(app.activeDocument.fullName.absoluteURI);
    var tempFileLocation = new File(Folder.temp.absoluteURI + "/" + app.activeDocument.name);
    app.activeDocument.saveAs(tempFileLocation);
    var sequence_player_window = sequence_player_dialog();
    sequence_player_window.show();
    try {
        //@include "./removeModels.js"
        dispatchCEPEvent("status_change", "Decoding Layer tree...");
        var root = decodeTree(app.activeDocument.layers, app.activeDocument);
        dispatchCEPEvent("status_change", "Arranging Layer tree...");
        var main = root.get("MAIN");
        if (main) {
            main = arrangeElements(main);
        }
        else {
            throw new Error("MAIN Element group not found!");
        }
        dispatchCEPEvent("status_change", "Building graph...");
        var graph = buildGraph(main);
        if (!validateOnly) {
            dispatchCEPEvent("status_change", "Preparing Layers...");
            main.iterate(function (element) {
                element.getLayer().visible = false;
            }, true);
            $.sleep(0);
            app.refresh();
        }
        if (!validateOnly) {
            dispatchCEPEvent("status_change", "Traversing Graph...");
        }
        else {
            dispatchCEPEvent("status_change", "Validating layer structure...");
        }
        traverseGraph(graph, function (vertex, edge) {
            if (edge != undefined && (edge.element != undefined && edge.element != null)) {
                if (!validateOnly) {
                    drawEdgeElement(edge.element);
                }
            }
            else if (validateConnectors && vertex.id != "0") {
                var vID = vertex.id.split("_");
                if (vID[0] == "0") {
                    vID[0] = "MAIN";
                }
                else {
                    vID.unshift("MAIN");
                }
                throw new Error(vID.join(" -> ") + " -> CONNECTOR not found!");
            }
            if (isType(vertex, Vertex)) {
                if (vertex.element && vertex.element.get("NODE")) {
                    if (!validateOnly) {
                        drawVertexElement(vertex.element.get("NODE"));
                    }
                }
                else {
                    var vID = vertex.id.split("_");
                    if (vID[0] == "0") {
                        vID[0] = "MAIN";
                    }
                    else {
                        vID.unshift("MAIN");
                    }
                    throw new Error(vID.join(" -> ") + " -> NODE not found!");
                }
                // TODO: Complete the atom part
                if (vertex.scene && vertex.scene != null) {
                }
            }
            else if (isType(vertex, ReferenceVertex)) {
                // TODO: Handle ReferenceVertex
            }
            if (!sequence_player_window.visible) {
                throw new Error("User interruption.");
            }
        });
    }
    catch (e) {
        alert(e);
    }
    sequence_player_window.close();
    dispatchCEPEvent("status_change", "Cleaning up...");
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    tempFileLocation.remove();
    app.open(originalFileLocation);
    dispatchCEPEvent("status_change", "Done.");
}
