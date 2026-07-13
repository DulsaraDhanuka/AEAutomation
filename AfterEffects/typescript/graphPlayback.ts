//@include "./Hand.js"
//@include "./utils.js"
//@include "./Playhead.js"
//@include "./CameraController.js"

function drawVertexElement(element: Element | ElementGroup, playhead: Playhead, drawController: DrawController, effectController: EffectController) {
    drawElement(element, playhead, drawController, effectController);
}

function eraseVertexElement(element: Element | ElementGroup, playhead: Playhead, drawController: DrawController, effectController: EffectController) {
    eraseElement(element, playhead, drawController, effectController);
}

function drawEdgeElement(element: Element | ElementGroup, playhead, drawController: DrawController, effectController: EffectController) {
    drawElement(element, playhead, drawController, effectController);
}

function drawElement(element: Element | ElementGroup, playhead: Playhead, drawController: DrawController, effectController: EffectController) {

    if (isType(element, Element)) {
        if (!(element.getProperties().get("visible") && (<ElementProperty>element.getProperties().get("visible")).getValue() == "none")) {
            let drawer: string = null;
            if (element.getProperties().get("drawer")) {
                drawer = (<ElementProperty>element.getProperties().get("drawer")).getValue();
            }

            drawController.draw(element, drawer);

            if (isType(element, Video)) {
                (<Video>element).play(playhead);
            }
        }
    } else if (isType(element, ElementGroup)) {
        element = <ElementGroup>element;
        let group: boolean = true;
        for (var i = 0; i < element.length; i++) {
            if (element.get(i).getName().search(/^[0-9]+$/) == -1) {
                group = false;
                break;
            }
        }

        if (group || !(element.getProperties().get("elementGroup") && (<ElementProperty>element.getProperties().get("elementGroup")).getValue() == "true")) {
            drawGroupSequentially(element, playhead, drawController, effectController);
        } else {
            if (!(element.getProperties().get("visible") && (<ElementProperty>element.getProperties().get("visible")).getValue() == "none")) {
                let drawer: string = null;
                if (element.getProperties().get("drawer")) {
                    drawer = (<ElementProperty>element.getProperties().get("drawer")).getValue();
                }

                drawController.draw(element, drawer);

                (<ElementGroup>element).iterate(function (e: Element) {
                    if (isType(e, Video)) {
                        (<Video>e).play(playhead);
                    }
                }, true);

                (<ElementGroup>element).iterate(function (e: Element | ElementGroup) {
                    if (e.getProperties().get("animation")) {
                        let effects: Array<string> = (<ElementProperty>e.getProperties().get("animation")).getValue().split(", ");
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
        let effects: Array<string> = (<ElementProperty>element.getProperties().get("animation")).getValue().split(", ");
        for (var i = 0; i < effects.length; i++) {
            effectController.applyEffect(element, effects[i]);
        }
    }

    var delayAfter = 0;
    if ((<ElementProperty>element.getProperties().get("delayAfter")) != null) {
        delayAfter = parseInt((<ElementProperty>element.getProperties().get("delayAfter")).getValue());
    }
    playhead.moveFrames(delayAfter);

    //playhead.moveForwards(0.5);
}

function drawGroupSequentially(elements: ElementGroup, playhead: Playhead, drawController: DrawController, effectController: EffectController) {
    elements.sort(function (a: Element | ElementGroup, b: Element | ElementGroup) {
        let aIndex: number = parseInt(a.getName());
        let bIndex: number = parseInt(b.getName());

        if (aIndex > bIndex) {
            return 1;
        } else if (aIndex > bIndex) {
            return -1;
        } else {
            return 0;
        }
    });

    for (var i = 0; i < elements.length; i++) {
        if (!(elements.get(i).getProperties().get("visible") && (<ElementProperty>elements.get(i).getProperties().get("visible")).getValue() == "none")) {
            if (isType(elements.get(i), Element)) {
                let drawer: string = null;
                if (elements.get(i).getProperties().get("drawer")) {
                    drawer = (<ElementProperty>elements.get(i).getProperties().get("drawer")).getValue();
                }

                drawController.draw(elements.get(i), drawer);

                if (isType(elements.get(i), Video)) {
                    (<Video>elements.get(i)).play(playhead);
                }
            } else if (isType(elements.get(i), ElementGroup)) {
                if (elements.get(i).getProperties().get("elementGroup") && (<ElementProperty>elements.get(i).getProperties().get("elementGroup")).getValue() == "true") {
                    let drawer: string = null;
                    if (elements.get(i).getProperties().get("drawer")) {
                        drawer = (<ElementProperty>elements.get(i).getProperties().get("drawer")).getValue();
                    }

                    drawController.draw(elements.get(i), drawer);

                    (<ElementGroup>elements.get(i)).iterate(function (e: Element) {
                        if (isType(e, Video)) {
                            (<Video>e).play(playhead);
                        }
                    }, true);

                    (<ElementGroup>elements.get(i)).iterate(function (e: Element | ElementGroup) {
                        if (e.getProperties().get("animation")) {
                            let effects: Array<string> = (<ElementProperty>e.getProperties().get("animation")).getValue().split(", ");
                            for (var ii = 0; ii < effects.length; ii++) {
                                effectController.applyEffect(e, effects[ii]);
                            }
                        }
                    });
                } else {
                    drawGroupSequentially(<ElementGroup>elements.get(i), playhead, drawController, effectController);
                }
            }

            if (elements.get(i).getProperties().get("animation")) {
                let effects: Array<string> = (<ElementProperty>elements.get(i).getProperties().get("animation")).getValue().split(", ");
                for (var ii = 0; ii < effects.length; ii++) {
                    effectController.applyEffect(elements.get(i), effects[ii]);
                }
            }

            var delayAfter = 0;
            if ((<ElementProperty>elements.get(i).getProperties().get("delayAfter")) != null) {
                delayAfter = parseInt((<ElementProperty>elements.get(i).getProperties().get("delayAfter")).getValue());
            }
            playhead.moveFrames(delayAfter);
        }
    }
}

function eraseElement(element: Element | ElementGroup, playhead: Playhead, drawController: DrawController, effectController: EffectController) {
    if (isType(element, Element)) {
        if (!(element.getProperties().get("visible") && (<ElementProperty>element.getProperties().get("visible")).getValue() == "none")) {
            let drawer: string = null;
            if (element.getProperties().get("eraser")) {
                drawer = (<ElementProperty>element.getProperties().get("eraser")).getValue();
            }

            drawController.erase(element, drawer);

            if (isType(element, Video)) {
                (<Video>element).pause(playhead);
            }
        }
    } else if (isType(element, ElementGroup)) {
        element = <ElementGroup>element;
        let group: boolean = true;
        for (var i = 0; i < element.length; i++) {
            if (element.get(i).getName().search(/^[0-9]+$/) == -1) {
                group = false;
                break;
            }
        }

        if (group || !(element.getProperties().get("elementGroup") && (<ElementProperty>element.getProperties().get("elementGroup")).getValue() == "true")) {
            eraseGroupSequentially(element, playhead, drawController, effectController);
        } else {
            if (!(element.getProperties().get("visible") && (<ElementProperty>element.getProperties().get("visible")).getValue() == "none")) {
                let drawer: string = null;
                if (element.getProperties().get("eraser")) {
                    drawer = (<ElementProperty>element.getProperties().get("eraser")).getValue();
                }

                drawController.erase(element, drawer);

                (<ElementGroup>element).iterate(function (e: Element) {
                    if (isType(e, Video)) {
                        (<Video>e).pause(playhead);
                    }
                }, true);
            }
        }
    }
}

function eraseGroupSequentially(elements: ElementGroup, playhead: Playhead, drawController: DrawController, effectController: EffectController) {
    elements.sort(function (a: Element | ElementGroup, b: Element | ElementGroup) {
        let aIndex: number = parseInt(a.getName());
        let bIndex: number = parseInt(b.getName());

        if (aIndex > bIndex) {
            return 1;
        } else if (aIndex > bIndex) {
            return -1;
        } else {
            return 0;
        }
    });

    for (var i = 0; i < elements.length; i++) {
        if (!(elements.get(i).getProperties().get("visible") && (<ElementProperty>elements.get(i).getProperties().get("visible")).getValue() == "none")) {
            if (isType(elements.get(i), Element)) {
                let drawer: string = null;
                if (elements.get(i).getProperties().get("eraser")) {
                    drawer = (<ElementProperty>elements.get(i).getProperties().get("eraser")).getValue();
                }

                drawController.erase(elements.get(i), drawer);

                if (isType(elements.get(i), Video)) {
                    (<Video>elements.get(i)).pause(playhead);
                }
            } else if (isType(elements.get(i), ElementGroup)) {
                if (elements.get(i).getProperties().get("elementGroup") && (<ElementProperty>elements.get(i).getProperties().get("elementGroup")).getValue() == "true") {
                    let drawer: string = null;
                    if (elements.get(i).getProperties().get("eraser")) {
                        drawer = (<ElementProperty>elements.get(i).getProperties().get("eraser")).getValue();
                    }

                    drawController.erase(elements.get(i), drawer);

                } else {
                    eraseGroupSequentially(<ElementGroup>elements.get(i), playhead, drawController, effectController);
                }
            }
        }
    }
}

function prepareProject(drawingHandFile: File, pushingHandFile: File, erasingHandFile: File): [Hand, Hand, Hand, Hand, Hand, Hand] {
    let drawingHandComp = <CompItem>importAsset(drawingHandFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);
    drawingHandComp.duration = 9999;
    let BTTPushingHandComp = <CompItem>importAsset(pushingHandFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);
    BTTPushingHandComp.name = "BTT_PUSHING_HAND";
    BTTPushingHandComp.duration = 9999;
    let TTBPushingHandComp = <CompItem>importAsset(pushingHandFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);
    TTBPushingHandComp.name = "TTB_PUSHING_HAND";
    TTBPushingHandComp.duration = 9999;
    let RTLPushingHandComp = <CompItem>importAsset(pushingHandFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);
    RTLPushingHandComp.name = "RTL_PUSHING_HAND";
    RTLPushingHandComp.duration = 9999;
    let LTRPushingHandComp = <CompItem>importAsset(pushingHandFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);
    LTRPushingHandComp.name = "LTR_PUSHING_HAND";
    LTRPushingHandComp.duration = 9999;
    let erasingHandComp = <CompItem>importAsset(erasingHandFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);
    erasingHandComp.duration = 9999;

    let drawingHand = new Hand(drawingHandComp, "DRAWING_HAND");
    drawingHand.build();

    let erasingHand = new Hand(erasingHandComp, "ERASING_HAND");
    erasingHand.build();

    let BTT_pushing_Hand = new Hand(BTTPushingHandComp, "BTT_PUSHING_HAND");
    BTT_pushing_Hand.build();

    let TTB_pushing_Hand = new Hand(TTBPushingHandComp, "TTB_PUSHING_HAND");
    TTB_pushing_Hand.build();

    let RTL_pushing_Hand = new Hand(RTLPushingHandComp, "RTL_PUSHING_HAND");
    RTL_pushing_Hand.build();

    let LTR_pushing_Hand = new Hand(LTRPushingHandComp, "LTR_PUSHING_HAND");
    LTR_pushing_Hand.build();

    return [drawingHand, erasingHand, BTT_pushing_Hand, TTB_pushing_Hand, RTL_pushing_Hand, LTR_pushing_Hand];
}

function prepareScene(sceneName: string, mindMapFile: File, drawingHand: Hand, erasingHand: Hand, BTTPushingHand: Hand, TTBPushingHand: Hand, RTLPushingHand: Hand, LTRPushingHand: Hand): [CompItem, Hand, Hand, Hand, Hand, Hand, Hand] {
    let offset: number = 300;

    let comp = <CompItem>importAsset(mindMapFile.absoluteURI, ImportAsType.COMP_CROPPED_LAYERS);

    let mindMapDimensions: [number, number] = [comp.width, comp.height];
    let mindMapSize: number = Math.max(mindMapDimensions[0], mindMapDimensions[1]);

    comp.name = sceneName;
    comp.width = 1920;
    comp.height = 1080;
    comp.pixelAspect = 1;
    comp.duration = 9999;
    comp.frameRate = 30;

    let handScaleExpression: string = `cam = comp("${comp.name}").activeCamera;  
distance = length(sub(position, cam.position));  
scale * distance / cam.zoom;`;

    drawingHand.embedInComp(comp);
    (<Property>drawingHand.containerLayer.property("Position")).setValue([mindMapDimensions[0] / 2, mindMapSize + offset]);
    (<Property>drawingHand.containerLayer.property("Scale")).expression = handScaleExpression;

    erasingHand.embedInComp(comp);
    (<Property>erasingHand.containerLayer.property("Position")).setValue([mindMapDimensions[0] / 2, mindMapSize + offset]);
    (<Property>erasingHand.containerLayer.property("Scale")).expression = handScaleExpression;

    BTTPushingHand.embedInComp(comp);
    (<Property>BTTPushingHand.containerLayer.property("Position")).setValue([mindMapDimensions[0] / 2, (mindMapSize + (BTTPushingHand.containerLayer.width / 2)) + offset]);
    (<Property>BTTPushingHand.containerLayer.property("Rotation")).setValue(0);
    (<Property>BTTPushingHand.containerLayer.property("Scale")).expression = handScaleExpression;

    TTBPushingHand.embedInComp(comp);
    (<Property>TTBPushingHand.containerLayer.property("Position")).setValue([mindMapDimensions[0] / 2, (0 - mindMapSize - (TTBPushingHand.containerLayer.width / 2) - offset)]);
    (<Property>TTBPushingHand.containerLayer.property("Rotation")).setValue(180);
    (<Property>TTBPushingHand.containerLayer.property("Scale")).expression = handScaleExpression;

    RTLPushingHand.embedInComp(comp);
    (<Property>RTLPushingHand.containerLayer.property("Position")).setValue([(mindMapSize + (RTLPushingHand.containerLayer.height / 2) + offset), mindMapDimensions[1] / 2]);
    (<Property>RTLPushingHand.containerLayer.property("Rotation")).setValue(-90);
    (<Property>RTLPushingHand.containerLayer.property("Scale")).expression = handScaleExpression;

    LTRPushingHand.embedInComp(comp);
    (<Property>LTRPushingHand.containerLayer.property("Position")).setValue([(0 - mindMapSize - (LTRPushingHand.containerLayer.height / 2) - offset), mindMapDimensions[1] / 2]);
    (<Property>LTRPushingHand.containerLayer.property("Rotation")).setValue(90);
    (<Property>LTRPushingHand.containerLayer.property("Scale")).expression = handScaleExpression;

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

function convertSceneLayersToImages(sceneComp: CompItem): void {
    let mindmapFolder = <FolderItem>searchProjectItem(sceneComp.name + " Layers", FolderItem);
    let layers = mindmapFolder.items;
    let footageFolder: string = (<FootageItem>layers[1]).file.parent.absoluteURI + "/" + (<FootageItem>layers[1]).file.name + " Layers";
    if (!Folder(footageFolder).exists) {
        Folder(footageFolder).create();
    }
    let bt = new BridgeTalk;
    bt.target = "illustrator";
    bt.body = "app.open(File(\"" + (<FootageItem>layers[1]).file.absoluteURI + "\"));";
    bt.send();

    var loop = true;
    for (var i = 0; i < layers.length; i++) {
        if (loop == true) {
            let layer: FootageItem = <FootageItem>layers[i + 1];
            var layerName: string = layer.name.replace(/\/.*\.ai$/, "");
            var fileName: string = layerName.replace(/[\/\\?%*:|"<>]/g, "");
            bt.body = "layerName = '" + layerName + "';";
			bt.body += "var destFolder = Folder('" + decodeURI(footageFolder) + "');";
			bt.body += "function exportItem(item, destFolder, resolution) {app.preferences.setIntegerPreference ('plugin/SmartExportUI/CreateFoldersPreference', 0);var whatToExport = new ExportForScreensItemToExport();whatToExport.assets = [item.assetID];whatToExport.artboards = '';whatToExport.document = false;var jpgOptions = new ExportForScreensOptionsJPEG;jpgOptions.antiAliasing = AntiAliasingMethod.ARTOPTIMIZED;jpgOptions.compressionMethod = JPEGCompressionMethodType.BASELINEOPTIMIZED;jpgOptions.scaleType = ExportForScreensScaleType.SCALEBYRESOLUTION;jpgOptions.scaleTypeValue = resolution;activeDocument.exportForScreens (destFolder, ExportForScreensType.SE_JPEG100, jpgOptions, whatToExport);}function exportFileToJPEG (dest, resolution) {var exportOptions = new ExportOptionsJPEG();var type = ExportType.JPEG;var fileSpec = new File(dest);exportOptions.antiAliasing = true;exportOptions.artBoardClipping = false; exportOptions.horizontalScale = resolution*100/72;exportOptions.verticalScale = resolution*100/72;exportOptions.qualitySetting = 100;app.activeDocument.exportFile( fileSpec, type, exportOptions );}var layer = app.activeDocument.layers.getByName(layerName);app.activeDocument.selection = null;app.activeDocument.activeLayer = layer;layer.hasSelectedArtwork = true;var idoc = app.activeDocument;var asset = idoc.assets.addFromSelection();asset.assetName = layerName.replace(new RegExp('[\\\/\?\%\*\:\|\\\"\<\>]', 'g'), '').replace(/ /g, '--');var resolution = 72;exportItem (asset, destFolder, resolution);";
			bt.body += "layerName + ' || ' + decodeURI(destFolder.absoluteURI + '/' + asset.assetName) + '.png';"; // + ' || ' + decodeURI('" + proxyFolder + "') + '/' + file.name";
            bt.onResult = function (msg) {
                let retVal = msg.body.split(" || ");
                var item: FootageItem = <FootageItem>searchProjectItem(retVal[0], FootageItem);
                item.replace(new File(retVal[1]));
                loop = true;
            }
            bt.onError = function( errorMsgObject ) {
                alert("Error has occured");
                loop = true;
            };
            bt.send();
            loop = false;
        } else {
            i--;
        }
        bt.pump();
    }
}
