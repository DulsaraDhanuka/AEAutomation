//@include "./Hand.js"
//@include "./utils.js"
//@include "./Playhead.js"
//@include "./CameraController.js"
function drawVertexElement(element, playhead, drawController, effectController) {
    drawElement(element, playhead, drawController, effectController);
}
function eraseVertexElement(element, playhead, drawController, effectController) {
    eraseElement(element, playhead, drawController, effectController);
}
function drawEdgeElement(element, playhead, drawController, effectController) {
    drawElement(element, playhead, drawController, effectController);
}
function drawElement(element, playhead, drawController, effectController) {
    if (isType(element, Element)) {
        if (!(element.getProperties().get("visible") && element.getProperties().get("visible").getValue() == "none")) {
            var drawer = null;
            if (element.getProperties().get("drawer")) {
                drawer = element.getProperties().get("drawer").getValue();
            }
            drawController.draw(element, drawer);
            if (isType(element, Video)) {
                element.play(playhead);
            }
        }
    }
    else if (isType(element, ElementGroup)) {
        element = element;
        var group = true;
        for (var i = 0; i < element.length; i++) {
            if (element.get(i).getName().search(/^[0-9]+$/) == -1) {
                group = false;
                break;
            }
        }
        if (group || !(element.getProperties().get("elementGroup") && element.getProperties().get("elementGroup").getValue() == "true")) {
            drawGroupSequentially(element, playhead, drawController, effectController);
        }
        else {
            if (!(element.getProperties().get("visible") && element.getProperties().get("visible").getValue() == "none")) {
                var drawer = null;
                if (element.getProperties().get("drawer")) {
                    drawer = element.getProperties().get("drawer").getValue();
                }
                drawController.draw(element, drawer);
                element.iterate(function (e) {
                    if (isType(e, Video)) {
                        e.play(playhead);
                    }
                }, true);
                element.iterate(function (e) {
                    if (e.getProperties().get("animation")) {
                        var effects = e.getProperties().get("animation").getValue().split(", ");
                        for (var i = 0; i < effects.length; i++) {
                            effectController.applyEffect(e, effects[i]);
                        }
                    }
                });
            }
        }
    }
    if (element.getProperties().get("animation")) {
        //effectController.applyEffect(element, (<ElementProperty>element.getProperties().get("animation")).getValue());
        var effects = element.getProperties().get("animation").getValue().split(", ");
        for (var i = 0; i < effects.length; i++) {
            effectController.applyEffect(element, effects[i]);
        }
    }
    var delayAfter = 0;
    if (element.getProperties().get("delayAfter") != null) {
        delayAfter = parseInt(element.getProperties().get("delayAfter").getValue());
    }
    playhead.moveFrames(delayAfter);
    //playhead.moveForwards(0.5);
}
function drawGroupSequentially(elements, playhead, drawController, effectController) {
    elements.sort(function (a, b) {
        var aIndex = parseInt(a.getName());
        var bIndex = parseInt(b.getName());
        if (aIndex > bIndex) {
            return 1;
        }
        else if (aIndex > bIndex) {
            return -1;
        }
        else {
            return 0;
        }
    });
    for (var i = 0; i < elements.length; i++) {
        if (!(elements.get(i).getProperties().get("visible") && elements.get(i).getProperties().get("visible").getValue() == "none")) {
            if (isType(elements.get(i), Element)) {
                var drawer = null;
                if (elements.get(i).getProperties().get("drawer")) {
                    drawer = elements.get(i).getProperties().get("drawer").getValue();
                }
                drawController.draw(elements.get(i), drawer);
                if (isType(elements.get(i), Video)) {
                    elements.get(i).play(playhead);
                }
            }
            else if (isType(elements.get(i), ElementGroup)) {
                if (elements.get(i).getProperties().get("elementGroup") && elements.get(i).getProperties().get("elementGroup").getValue() == "true") {
                    var drawer = null;
                    if (elements.get(i).getProperties().get("drawer")) {
                        drawer = elements.get(i).getProperties().get("drawer").getValue();
                    }
                    drawController.draw(elements.get(i), drawer);
                    elements.get(i).iterate(function (e) {
                        if (isType(e, Video)) {
                            e.play(playhead);
                        }
                    }, true);
                    elements.get(i).iterate(function (e) {
                        if (e.getProperties().get("animation")) {
                            var effects = e.getProperties().get("animation").getValue().split(", ");
                            for (var ii = 0; ii < effects.length; ii++) {
                                effectController.applyEffect(e, effects[ii]);
                            }
                        }
                    });
                }
                else {
                    drawGroupSequentially(elements.get(i), playhead, drawController, effectController);
                }
            }
            if (elements.get(i).getProperties().get("animation")) {
                var effects = elements.get(i).getProperties().get("animation").getValue().split(", ");
                for (var ii = 0; ii < effects.length; ii++) {
                    effectController.applyEffect(elements.get(i), effects[ii]);
                }
            }
            var delayAfter = 0;
            if (elements.get(i).getProperties().get("delayAfter") != null) {
                delayAfter = parseInt(elements.get(i).getProperties().get("delayAfter").getValue());
            }
            playhead.moveFrames(delayAfter);
        }
    }
}
function eraseElement(element, playhead, drawController, effectController) {
    if (isType(element, Element)) {
        if (!(element.getProperties().get("visible") && element.getProperties().get("visible").getValue() == "none")) {
            var drawer = null;
            if (element.getProperties().get("eraser")) {
                drawer = element.getProperties().get("eraser").getValue();
            }
            drawController.erase(element, drawer);
            if (isType(element, Video)) {
                element.pause(playhead);
            }
        }
    }
    else if (isType(element, ElementGroup)) {
        element = element;
        var group = true;
        for (var i = 0; i < element.length; i++) {
            if (element.get(i).getName().search(/^[0-9]+$/) == -1) {
                group = false;
                break;
            }
        }
        if (group || !(element.getProperties().get("elementGroup") && element.getProperties().get("elementGroup").getValue() == "true")) {
            eraseGroupSequentially(element, playhead, drawController, effectController);
        }
        else {
            if (!(element.getProperties().get("visible") && element.getProperties().get("visible").getValue() == "none")) {
                var drawer = null;
                if (element.getProperties().get("eraser")) {
                    drawer = element.getProperties().get("eraser").getValue();
                }
                drawController.erase(element, drawer);
                element.iterate(function (e) {
                    if (isType(e, Video)) {
                        e.pause(playhead);
                    }
                }, true);
            }
        }
    }
}
function eraseGroupSequentially(elements, playhead, drawController, effectController) {
    elements.sort(function (a, b) {
        var aIndex = parseInt(a.getName());
        var bIndex = parseInt(b.getName());
        if (aIndex > bIndex) {
            return 1;
        }
        else if (aIndex > bIndex) {
            return -1;
        }
        else {
            return 0;
        }
    });
    for (var i = 0; i < elements.length; i++) {
        if (!(elements.get(i).getProperties().get("visible") && elements.get(i).getProperties().get("visible").getValue() == "none")) {
            if (isType(elements.get(i), Element)) {
                var drawer = null;
                if (elements.get(i).getProperties().get("eraser")) {
                    drawer = elements.get(i).getProperties().get("eraser").getValue();
                }
                drawController.erase(elements.get(i), drawer);
                if (isType(elements.get(i), Video)) {
                    elements.get(i).pause(playhead);
                }
            }
            else if (isType(elements.get(i), ElementGroup)) {
                if (elements.get(i).getProperties().get("elementGroup") && elements.get(i).getProperties().get("elementGroup").getValue() == "true") {
                    var drawer = null;
                    if (elements.get(i).getProperties().get("eraser")) {
                        drawer = elements.get(i).getProperties().get("eraser").getValue();
                    }
                    drawController.erase(elements.get(i), drawer);
                }
                else {
                    eraseGroupSequentially(elements.get(i), playhead, drawController, effectController);
                }
            }
        }
    }
}
function prepareProject(drawingHandFile, pushingHandFile, erasingHandFile) {
    var drawingHandComp = importAsset(drawingHandFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);
    drawingHandComp.duration = 9999;
    var BTTPushingHandComp = importAsset(pushingHandFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);
    BTTPushingHandComp.name = "BTT_PUSHING_HAND";
    BTTPushingHandComp.duration = 9999;
    var TTBPushingHandComp = importAsset(pushingHandFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);
    TTBPushingHandComp.name = "TTB_PUSHING_HAND";
    TTBPushingHandComp.duration = 9999;
    var RTLPushingHandComp = importAsset(pushingHandFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);
    RTLPushingHandComp.name = "RTL_PUSHING_HAND";
    RTLPushingHandComp.duration = 9999;
    var LTRPushingHandComp = importAsset(pushingHandFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);
    LTRPushingHandComp.name = "LTR_PUSHING_HAND";
    LTRPushingHandComp.duration = 9999;
    var erasingHandComp = importAsset(erasingHandFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);
    erasingHandComp.duration = 9999;
    var drawingHand = new Hand(drawingHandComp, "DRAWING_HAND");
    drawingHand.build();
    var erasingHand = new Hand(erasingHandComp, "ERASING_HAND");
    erasingHand.build();
    var BTT_pushing_Hand = new Hand(BTTPushingHandComp, "BTT_PUSHING_HAND");
    BTT_pushing_Hand.build();
    var TTB_pushing_Hand = new Hand(TTBPushingHandComp, "TTB_PUSHING_HAND");
    TTB_pushing_Hand.build();
    var RTL_pushing_Hand = new Hand(RTLPushingHandComp, "RTL_PUSHING_HAND");
    RTL_pushing_Hand.build();
    var LTR_pushing_Hand = new Hand(LTRPushingHandComp, "LTR_PUSHING_HAND");
    LTR_pushing_Hand.build();
    return [drawingHand, erasingHand, BTT_pushing_Hand, TTB_pushing_Hand, RTL_pushing_Hand, LTR_pushing_Hand];
}
function prepareScene(sceneName, mindMapFile, drawingHand, erasingHand, BTTPushingHand, TTBPushingHand, RTLPushingHand, LTRPushingHand) {
    var offset = 300;
    var comp = importAsset(mindMapFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);
    var mindMapDimensions = [comp.width, comp.height];
    var mindMapSize = Math.max(mindMapDimensions[0], mindMapDimensions[1]);
    comp.name = sceneName;
    comp.width = 1920;
    comp.height = 1080;
    comp.pixelAspect = 1;
    comp.duration = 9999;
    comp.frameRate = 30;
    var handScaleExpression = "cam = comp(\"" + comp.name + "\").activeCamera;  \ndistance = length(sub(position, cam.position));  \nscale * distance / cam.zoom;";
    drawingHand.embedInComp(comp);
    drawingHand.containerLayer.property("Position").setValue([mindMapDimensions[0] / 2, mindMapSize + offset]);
    drawingHand.containerLayer.property("Scale").expression = handScaleExpression;
    erasingHand.embedInComp(comp);
    erasingHand.containerLayer.property("Position").setValue([mindMapDimensions[0] / 2, mindMapSize + offset]);
    erasingHand.containerLayer.property("Scale").expression = handScaleExpression;
    BTTPushingHand.embedInComp(comp);
    BTTPushingHand.containerLayer.property("Position").setValue([mindMapDimensions[0] / 2, (mindMapSize + (BTTPushingHand.containerLayer.width / 2)) + offset]);
    BTTPushingHand.containerLayer.property("Rotation").setValue(0);
    BTTPushingHand.containerLayer.property("Scale").expression = handScaleExpression;
    TTBPushingHand.embedInComp(comp);
    TTBPushingHand.containerLayer.property("Position").setValue([mindMapDimensions[0] / 2, (0 - mindMapSize - (TTBPushingHand.containerLayer.width / 2) - offset)]);
    TTBPushingHand.containerLayer.property("Rotation").setValue(180);
    TTBPushingHand.containerLayer.property("Scale").expression = handScaleExpression;
    RTLPushingHand.embedInComp(comp);
    RTLPushingHand.containerLayer.property("Position").setValue([(mindMapSize + (RTLPushingHand.containerLayer.height / 2) + offset), mindMapDimensions[1] / 2]);
    RTLPushingHand.containerLayer.property("Rotation").setValue(-90);
    RTLPushingHand.containerLayer.property("Scale").expression = handScaleExpression;
    LTRPushingHand.embedInComp(comp);
    LTRPushingHand.containerLayer.property("Position").setValue([(0 - mindMapSize - (LTRPushingHand.containerLayer.height / 2) - offset), mindMapDimensions[1] / 2]);
    LTRPushingHand.containerLayer.property("Rotation").setValue(90);
    LTRPushingHand.containerLayer.property("Scale").expression = handScaleExpression;
    return [comp, drawingHand, erasingHand, BTTPushingHand, TTBPushingHand, RTLPushingHand, LTRPushingHand];
}
/*function createWhiteboard(classroomFile: string) : [CompItem, [number, number, number, number]] {
    let classroomComp: CompItem = <CompItem>searchProjectItem("CLASSROOM", CompItem);

    if (classroomComp != null) {
        classroomComp = <CompItem>importAsset(classroomFile, app.project, ImportAsType.COMP_CROPPED_LAYERS);
    }

    let whiteboardArea: [number, number, number, number] = getLayerPoints(<AVLayer>classroomComp.layer("WHITEBOARD_AREA"), true);

    return [classroomComp, whiteboardArea];
}

function atomTransition(id: string, mainComp: CompItem, classroomFile: string, atomVideo: FootageItem): void {
    let playhead = new Playhead(mainComp.frameRate);

    let atomComp: CompItem = app.project.items.addComp(id, mainComp.width, mainComp.height, mainComp.pixelAspect, mainComp.duration, mainComp.frameRate);
    let atomLayer = atomComp.layers.add(atomVideo);
    (<Property>atomLayer.property("Scale")).setValue([mainComp.width / atomVideo.width * 100, mainComp.height / atomVideo.height * 100]);
    let atomCamera = atomComp.layers.addCamera("CAMERA", [mainComp.width / 2, mainComp.height / 2]);
    atomCamera.autoOrient = AutoOrientType.NO_AUTO_ORIENT;
    let cameraController = new CameraController(atomCamera);
    let [classroomComp, whiteboardArea]: [CompItem, [number, number, number, number]] = createWhiteboard(classroomFile);
    let classroomLayer = atomComp.layers.add(classroomComp);
    classroomLayer.moveToEnd();

    (<Property>classroomLayer.property("Opacity")).setValueAtTime(playhead.getCurrentTime(), 0);
    playhead.moveForwards(1.0);
    (<Property>classroomLayer.property("Opacity")).setValueAtTime(playhead.getCurrentTime(), 100);
}*/
function convertSceneLayersToImages(sceneComp) {
    var mindmapFolder = searchProjectItem(sceneComp.name + " Layers", FolderItem);
    var layers = mindmapFolder.items;
    var footageFolder = layers[1].file.parent.absoluteURI + "/" + layers[1].file.name + " Layers";
    if (!Folder(footageFolder).exists) {
        Folder(footageFolder).create();
    }
    var bt = new BridgeTalk;
    bt.target = "illustrator";
    bt.body = "app.open(File(\"" + layers[1].file.absoluteURI + "\"));";
    bt.send();
    var loop = true;
    for (var i = 0; i < layers.length; i++) {
        if (loop == true) {
            var layer = layers[i + 1];
            var layerName = layer.name.replace(/\/.*\.ai$/, "");
            var fileName = layerName.replace(/[\/\\?%*:|"<>]/g, "");
            bt.body = "layerName = '" + layerName + "';";
            bt.body += "var destFolder = Folder('" + decodeURI(footageFolder) + "');";
            bt.body += "function exportItem(item, destFolder, resolution) {app.preferences.setIntegerPreference ('plugin/SmartExportUI/CreateFoldersPreference', 0);var whatToExport = new ExportForScreensItemToExport();whatToExport.assets = [item.assetID];whatToExport.artboards = '';whatToExport.document = false;var jpgOptions = new ExportForScreensOptionsJPEG;jpgOptions.antiAliasing = AntiAliasingMethod.ARTOPTIMIZED;jpgOptions.compressionMethod = JPEGCompressionMethodType.BASELINEOPTIMIZED;jpgOptions.scaleType = ExportForScreensScaleType.SCALEBYRESOLUTION;jpgOptions.scaleTypeValue = resolution;activeDocument.exportForScreens (destFolder, ExportForScreensType.SE_JPEG100, jpgOptions, whatToExport);}function exportFileToJPEG (dest, resolution) {var exportOptions = new ExportOptionsJPEG();var type = ExportType.JPEG;var fileSpec = new File(dest);exportOptions.antiAliasing = true;exportOptions.artBoardClipping = false; exportOptions.horizontalScale = resolution*100/72;exportOptions.verticalScale = resolution*100/72;exportOptions.qualitySetting = 100;app.activeDocument.exportFile( fileSpec, type, exportOptions );}var layer = app.activeDocument.layers.getByName(layerName);app.activeDocument.selection = null;app.activeDocument.activeLayer = layer;layer.hasSelectedArtwork = true;var idoc = app.activeDocument;var asset = idoc.assets.addFromSelection();asset.assetName = layerName.replace(new RegExp('[\\\/\?\%\*\:\|\\\"\<\>]', 'g'), '').replace(/ /g, '--');var resolution = 72;exportItem (asset, destFolder, resolution);";
            bt.body += "layerName + ' || ' + decodeURI(destFolder.absoluteURI + '/' + asset.assetName) + '.png';"; // + ' || ' + decodeURI('" + proxyFolder + "') + '/' + file.name";
            bt.onResult = function (msg) {
                var retVal = msg.body.split(" || ");
                var item = searchProjectItem(retVal[0], FootageItem);
                item.replace(new File(retVal[1]));
                loop = true;
            };
            bt.onError = function (errorMsgObject) {
                alert("Error has occured");
                loop = true;
            };
            bt.send();
            loop = false;
        }
        else {
            i--;
        }
        bt.pump();
    }
}
