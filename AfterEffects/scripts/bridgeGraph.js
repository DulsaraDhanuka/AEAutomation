//@include "./Hand.js"
//@include "./utils.js"
//@include "./Playhead.js"
//@include "./graphCode.js"
//@include "./graphPlayback.js"
//@include "./Element/Element.js"
//@include "./CameraController.js"
//@include "./Element/ElementGroup.js"
//@include "./Drawer/DrawController.js"
//@include "./Effects/EffectController.js"
function processScene(comp, drawingHand, erasingHand, BTT_pushing_Hand, TTB_pushing_Hand, RTL_pushing_Hand, LTR_pushing_Hand) {
    var parralaxPresetFile = File(File($.fileName).parent.absoluteURI + "/ParralaxPresets.json");
    var playhead = new Playhead(comp.frameRate);
    var camera = comp.layers.addCamera("CAMERA", [comp.width / 2, comp.height / 2]);
    camera.property("Position").setValue([comp.width / 2, comp.height / 2, -camera.property("Camera Options").property("Zoom").value]);
    camera.autoOrient = AutoOrientType.NO_AUTO_ORIENT;
    for (var i = 0; i < comp.layers.length; i++) {
        comp.layers[i + 1].threeDLayer = true;
        if (comp.layers[i + 1].canSetCollapseTransformation && !(isType(comp.layers[i + 1].source, CompItem))) {
            comp.layers[i + 1].collapseTransformation = true;
        }
    }
    var root = decodeTree(comp.layers, comp);
    var main = arrangeElements(root.get("MAIN"));
    var fills = root.get("FILL");
    var colors = root.get("COLOR");
    var highlighters = root.get("HIGHLIGHTER");
    var _a = getGroupBoundaries(root, true, playhead.getCurrentSecond()), containerTop = _a[0], containerLeft = _a[1], containerRight = _a[2], containerBottom = _a[3];
    var size = [containerRight - containerLeft, containerBottom - containerTop];
    var hands = {
        drawingHand: drawingHand.containerLayer,
        BTT_pushing_Hand: BTT_pushing_Hand.containerLayer,
        TTB_pushing_Hand: TTB_pushing_Hand.containerLayer,
        LTR_pushing_Hand: LTR_pushing_Hand.containerLayer,
        RTL_pushing_Hand: RTL_pushing_Hand.containerLayer,
        erasingHand: erasingHand.containerLayer,
        highlightingHand: drawingHand.containerLayer
    };
    var drawController = new DrawController(playhead, size, hands);
    var effectController = new EffectController(playhead);
    root.iterate(function (item) {
        if (item.getProperties().get("visible")) {
            if (item.getProperties().get("visible").getValue() == "none") {
                item.getLayer().enabled = false;
            }
        }
    }, true);
    var adjLayer = comp.layers.addSolid([255, 255, 255], "Adjustment Layer", comp.width, comp.height, comp.pixelAspect, comp.duration);
    adjLayer.adjustmentLayer = true;
    var motionBlur = adjLayer.property("Effects").addProperty("CC Force Motion Blur");
    var motionBlurSamplesProperty = motionBlur.property("Motion Blur Samples");
    var motionBlurSamples = 32;
    var cameraController = new CameraController(camera);
    var cameraTime = 8;
    var referenceDelay = 15;
    var graph = buildGraph(main);
    var mainGroup = new ElementGroup("MAIN", comp);
    //changeElementDepth(root);
    cameraController.viewElement(graph.vertices[0].element.get("NODE"), playhead.getCurrentSecond());
    motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), 1);
    traverseGraph(graph, function (vertex, edge) {
        if (isType(vertex, Vertex)) {
            changeVertexDepth(vertex);
        }
        if (edge != undefined && (edge.element != undefined && edge.element != null)) {
            var tempGroup = new ElementGroup("tmp", comp);
            if (isType(graph.vertices[edge.v1ID], Vertex)) {
                tempGroup.add(graph.vertices[edge.v1ID].element.get("NODE"));
            }
            else if (isType(graph.vertices[edge.v1ID], ReferenceVertex)) {
                tempGroup.add(graph.vertices[graph.vertices[edge.v1ID].vertexID].element.get("NODE"));
            }
            tempGroup.add(edge.element);
            mainGroup.add(edge.element);
            if (isType(graph.vertices[edge.v2ID], Vertex)) {
                tempGroup.add(graph.vertices[edge.v2ID].element.get("NODE"));
            }
            else if (isType(graph.vertices[edge.v2ID], ReferenceVertex)) {
                tempGroup.add(graph.vertices[graph.vertices[edge.v2ID].vertexID].element.get("NODE"));
            }
            cameraController.pauseMovement(playhead.getCurrentSecond());
            motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), motionBlurSamples);
            playhead.moveFrames(cameraTime);
            if (!(vertex.properties.get("zoom") != undefined && vertex.properties.get("zoom") != null && vertex.properties.get("zoom").getValue() == "false")) {
                if (vertex.properties.get("zoom") != undefined && vertex.properties.get("zoom") != null && vertex.properties.get("zoom").getValue() == "fullscreen") {
                    cameraController.viewElement(tempGroup, playhead.getCurrentSecond());
                }
                else {
                    cameraController.viewElement(main, playhead.getCurrentSecond());
                }
            }
            motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), 1);
            drawEdgeElement(edge.element, playhead, drawController, effectController);
            playhead.moveFrames(30);
        }
        if (isType(vertex, Vertex)) {
            cameraController.pauseMovement(playhead.getCurrentSecond());
            motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), motionBlurSamples);
            playhead.moveFrames(cameraTime);
            mainGroup.add(vertex.element.get("NODE"));
            if (!((vertex.properties.get("zoom") != undefined || vertex.properties.get("zoom") != null) && vertex.properties.get("zoom").getValue() == "false")) {
                if (vertex.properties.get("zoom") != undefined && vertex.properties.get("zoom") != null && vertex.properties.get("zoom").getValue() == "fullscreen") {
                    cameraController.viewElement(main, playhead.getCurrentSecond());
                }
                else {
                    cameraController.viewElement(vertex.element.get("NODE"), playhead.getCurrentSecond());
                }
            }
            motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), 1);
        }
        else if (isType(vertex, ReferenceVertex)) {
            cameraController.pauseMovement(playhead.getCurrentSecond());
            motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), motionBlurSamples);
            playhead.moveFrames(cameraTime);
            mainGroup.add(graph.vertices[vertex.vertexID].element);
            if (!((vertex.properties.get("zoom") != undefined || vertex.properties.get("zoom") != null) && vertex.properties.get("zoom").getValue() == "false")) {
                if (vertex.properties.get("zoom") != undefined && vertex.properties.get("zoom") != null && vertex.properties.get("zoom").getValue() == "fullscreen") {
                    cameraController.viewElement(main, playhead.getCurrentSecond());
                }
                else {
                    cameraController.viewElement(graph.vertices[vertex.vertexID].element.get("NODE"), playhead.getCurrentSecond());
                }
            }
            motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), 1);
            if (vertex.type == "erase") {
                eraseVertexElement(graph.vertices[vertex.vertexID].element.get("NODE"), playhead, drawController, effectController);
                playhead.moveFrames(1.0);
            }
            cameraController.pauseMovement(playhead.getCurrentSecond());
            motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), 1);
        }
        if (isType(vertex, Vertex)) {
            drawVertexElement(vertex.element.get("NODE"), playhead, drawController, effectController);
            if (vertex.element.get("NODE").getProperties().get("delay") != null) {
                playhead.moveSeconds(parseInt(vertex.element.get("NODE").getProperties().get("delay").getValue()));
            }
            playhead.moveFrames(10);
            if (vertex.scene && vertex.scene != null) {
                if (isType(vertex.scene, Element)) {
                    vertex.scene.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
                    playhead.moveFrames(1);
                    vertex.scene.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
                }
                else if (isType(vertex.scene, ElementGroup)) {
                    vertex.scene.iterate(function (element) {
                        element.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
                    }, true);
                    playhead.moveFrames(1);
                    vertex.scene.iterate(function (element) {
                        element.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
                    }, true);
                }
                mainGroup.add(vertex.scene);
            }
        }
        cameraController.pauseMovement(playhead.getCurrentSecond());
        motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), 1);
        playhead.moveFrames(cameraTime);
    });
    cameraController.pauseMovement(playhead.getCurrentSecond());
    motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), motionBlurSamples);
    playhead.moveFrames(cameraTime);
    var endZoom = "true";
    if (graph.vertices[0].properties.get("endZoom")) {
        endZoom = graph.vertices[0].properties.get("endZoom").getValue();
    }
    if (endZoom == "true") {
        cameraController.viewElement(mainGroup, playhead.getCurrentSecond());
    }
    motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), 1);
    for (var iKey = 0; iKey < motionBlurSamplesProperty.numKeys; iKey++) {
        motionBlurSamplesProperty.setInterpolationTypeAtKey(iKey + 1, KeyframeInterpolationType.HOLD);
    }
    cameraController.easeMovements();
    playhead.moveFrames(30);
    if (fills) {
        if (isType(fills, Element)) {
            drawController.draw(fills);
        }
        else if (isType(fills, ElementGroup)) {
            fills.sort(function (a, b) {
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
            fills.iterate(function (element) {
                drawController.draw(element);
                playhead.moveFrames(30);
            }, true);
        }
    }
    if (colors) {
        if (isType(colors, Element)) {
            colors.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
            colors.getLayer().property("Opacity").setInterpolationTypeAtKey(colors.getLayer().property("Opacity").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            playhead.moveFrames(5);
            colors.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
            colors.getLayer().property("Opacity").setInterpolationTypeAtKey(colors.getLayer().property("Opacity").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            playhead.moveFrames(30);
        }
        else if (isType(colors, ElementGroup)) {
            colors.sort(function (a, b) {
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
            colors.iterate(function (element) {
                element.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
                element.getLayer().property("Opacity").setInterpolationTypeAtKey(element.getLayer().property("Opacity").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
                playhead.moveFrames(5);
                element.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
                element.getLayer().property("Opacity").setInterpolationTypeAtKey(element.getLayer().property("Opacity").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
                playhead.moveFrames(30);
            }, true);
        }
    }
    if (highlighters) {
        if (isType(highlighters, Element)) {
            drawController.draw(highlighters);
        }
        else if (isType(highlighters, ElementGroup)) {
            highlighters.sort(function (a, b) {
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
            highlighters.iterate(function (element) {
                drawController.draw(element);
                playhead.moveFrames(30);
            }, true);
        }
    }
    var compDuration = playhead.getCurrentSecond();
    if (root.get("MAIN").getProperties().get("duration") != null) {
        compDuration = parseFloat(root.get("MAIN").getProperties().get("duration").getValue());
    }
    if (root.get("PARRALAX")) {
        camera.outPoint = compDuration;
        camera.locked = true;
        var parralaxCamera = camera.duplicate();
        parralaxCamera.locked = false;
        parralaxCamera.name = "PARRALAX_CAMERA";
        parralaxCamera.inPoint = compDuration;
        parralaxPresetFile.open("r");
        var parralaxPresets = JSON.parse(parralaxPresetFile.read());
        parralaxPresetFile.close();
        var selectedPreset = "1";
        if (root.get("PARRALAX").getProperties().get("preset")) {
            selectedPreset = root.get("PARRALAX").getProperties().get("preset").getValue();
        }
        var parralaxDuration = 2.0;
        var properties = parralaxPresets[selectedPreset];
        var propertyNames = Object.keys(properties);
        for (var i = 0; i < propertyNames.length; i++) {
            var value = parralaxCamera.property(propertyNames[i]).valueAtTime(compDuration, true);
            parralaxCamera.property(propertyNames[i]).setValueAtTime(compDuration, value);
            parralaxCamera.property(propertyNames[i]).setValueAtTime(compDuration + parralaxDuration, value + properties[propertyNames[i]]);
        }
        playhead.moveSeconds(parralaxDuration);
    }
    /*(<Property>camera.property("X Rotation")).expression = "if (time <= " + playhead.getCurrentTime() + ") { freq = 0.1; amp = 2; accum = freq * time; wiggle(1, amp, 1, .5, accum); }";
    (<Property>camera.property("Y Rotation")).expression = "if (time <= " + playhead.getCurrentTime() + ") { freq = 0.3; amp = 4; accum = freq * time; wiggle(1, amp, 1, .5, accum); }";
    (<Property>camera.property("Z Rotation")).expression = "if (time <= " + playhead.getCurrentTime() + ") { freq = 0.2; amp = 7; accum = freq * time; wiggle(1, amp, 1, .5, accum); }";*/
    comp.duration = compDuration;
    comp.layers.addSolid([255, 255, 255], "BACKGROUND", comp.width, comp.height, comp.pixelAspect, comp.duration).moveToEnd();
    root.iterate(function (item) {
        if (!item.getLayer().locked) {
            item.setOutPoint(compDuration);
        }
    }, true);
    LTR_pushing_Hand.containerLayer.moveToBeginning();
    LTR_pushing_Hand.setOutPoint(compDuration);
    LTR_pushing_Hand.containerLayer.locked = true;
    RTL_pushing_Hand.containerLayer.moveToBeginning();
    RTL_pushing_Hand.setOutPoint(compDuration);
    RTL_pushing_Hand.containerLayer.locked = true;
    TTB_pushing_Hand.containerLayer.moveToBeginning();
    TTB_pushing_Hand.setOutPoint(compDuration);
    TTB_pushing_Hand.containerLayer.locked = true;
    BTT_pushing_Hand.containerLayer.moveToBeginning();
    BTT_pushing_Hand.setOutPoint(compDuration);
    BTT_pushing_Hand.containerLayer.locked = true;
    erasingHand.containerLayer.moveToBeginning();
    erasingHand.setOutPoint(compDuration);
    erasingHand.containerLayer.locked = true;
    drawingHand.containerLayer.moveToBeginning();
    drawingHand.setOutPoint(compDuration);
    drawingHand.containerLayer.locked = true;
    for (var i = 0; i < comp.layers.length; i++) {
        if (!comp.layers[i + 1].locked) {
            comp.layers[i + 1].outPoint = compDuration;
        }
    }
    return root;
}
function changeVertexDepth(vertex) {
    if (vertex.properties.get("depth") != undefined && vertex.properties.get("depth") != null) {
        var zoomFactor = parseFloat(vertex.properties.get("depth").getValue());
        var depth_1 = (zoomFactor - 100) / 100 * 2666.66667;
        var element = vertex.element;
        if (isType(element, Element)) {
            changeElementDepth(element, depth_1);
        }
        else {
            element = element;
            element.iterate(function (element) {
                changeElementDepth(element, depth_1);
            }, true);
        }
    }
}
function changeElementDepth(element, depth) {
    if (element.getLayer().property("Position").numKeys > 0) {
        for (var i = 0; i < element.getLayer().property("Position").numKeys; i++) {
            var value = element.getLayer().property("Position").keyValue(i + 1);
            value[2] = depth;
            element.getLayer().property("Position").setValueAtKey(i + 1, value);
        }
    }
    else {
        var value = element.getLayer().property("Position").value;
        value[2] = depth;
        element.getLayer().property("Position").setValue(value);
    }
}
/*function changeElementDepth(group: ElementGroup, depth: number = 0, autoScale: boolean = true) {
    for (var i = 0; i < group.length; i++) {
        let element: Element | ElementGroup = group.get(i);
        if (element.getProperties().get("depth")) {
            depth += parseFloat((<ElementProperty>element.getProperties().get("depth")).getValue());
        }

        if (element.getProperties().get("autoScale")) {
            autoScale = eval((<ElementProperty>element.getProperties().get("autoScale")).getValue());
        }

        if (depth != 0) {
            let depthController: AVLayer = element.addNullParent(undefined, function(nullObj: AVLayer) {
                nullObj.threeDLayer = true;
            }, element.getRawName() + " :: DEPTH_CONTROLLER");

            let position: [number, number, number] = <[number, number, number]>((<Property>depthController.property("Position")).value);
            (<Property>depthController.property("Position")).setValue([position[0], position[0], depth]);

            if (autoScale) {
                (<Property>depthController.property("Scale")).expression = "zoom=thisComp.activeCamera.cameraOption.zoom;transform.scale*(1+transform.position[2]/zoom)";
            }
        }
        
        if (isType(element, ElementGroup)) {
            let elementGroup: boolean = false;
            if (element.getProperties().get("elementGroup")) {
                elementGroup = (<ElementProperty>element.getProperties().get("elementGroup")).getValue();
            }

            if (!elementGroup) {
                changeElementDepth(<ElementGroup>element, depth);
            }
        }
    }
}*/ 
