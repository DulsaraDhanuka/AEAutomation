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

function processScene(comp: CompItem, drawingHand: Hand, erasingHand: Hand, BTT_pushing_Hand: Hand, TTB_pushing_Hand: Hand, RTL_pushing_Hand: Hand, LTR_pushing_Hand: Hand): ElementGroup {
    let parralaxPresetFile = File(File($.fileName).parent.absoluteURI + "/ParralaxPresets.json");

    var playhead = new Playhead(comp.frameRate);

    var camera: CameraLayer = <CameraLayer>comp.layers.addCamera("CAMERA", [comp.width / 2, comp.height / 2]);
    (<Property>camera.property("Position")).setValue([comp.width / 2, comp.height / 2, -(<Property>camera.property("Camera Options").property("Zoom")).value]);
    camera.autoOrient = AutoOrientType.NO_AUTO_ORIENT;

    for (var i = 0; i < comp.layers.length; i++) {
        (<AVLayer>comp.layers[i + 1]).threeDLayer = true;

        if ((<AVLayer>comp.layers[i + 1]).canSetCollapseTransformation && !(isType((<AVLayer>comp.layers[i + 1]).source, CompItem))) {
            (<AVLayer>comp.layers[i + 1]).collapseTransformation = true;
        }
    }

    var root = decodeTree(comp.layers, comp);

    var main: ElementGroup = arrangeElements(<ElementGroup>root.get("MAIN"));
    var fills: ElementGroup | Element = root.get("FILL");
    var colors: ElementGroup | Element = root.get("COLOR");
    var highlighters: ElementGroup | Element = root.get("HIGHLIGHTER");

    var [containerTop, containerLeft, containerRight, containerBottom]: [number, number, number, number] = getGroupBoundaries(root, true, playhead.getCurrentSecond());
    var size: [number, number] = [containerRight - containerLeft, containerBottom - containerTop];

    var hands: { drawingHand, BTT_pushing_Hand, TTB_pushing_Hand, LTR_pushing_Hand, RTL_pushing_Hand, erasingHand, highlightingHand } = {
        drawingHand: drawingHand.containerLayer,
        BTT_pushing_Hand: BTT_pushing_Hand.containerLayer,
        TTB_pushing_Hand: TTB_pushing_Hand.containerLayer,
        LTR_pushing_Hand: LTR_pushing_Hand.containerLayer,
        RTL_pushing_Hand: RTL_pushing_Hand.containerLayer,
        erasingHand: erasingHand.containerLayer,
        highlightingHand: drawingHand.containerLayer
    };

    var drawController: DrawController = new DrawController(playhead, size, hands);
    var effectController: EffectController = new EffectController(playhead);

    root.iterate(function (item: Element) {
        if (item.getProperties().get("visible")) {
            if ((<ElementProperty>item.getProperties().get("visible")).getValue() == "none") {
                item.getLayer().enabled = false;
            }
        }
    }, true);

    var adjLayer: AVLayer = comp.layers.addSolid([255, 255, 255], "Adjustment Layer", comp.width, comp.height, comp.pixelAspect, comp.duration);
    adjLayer.adjustmentLayer = true;
    let motionBlur: PropertyGroup = <PropertyGroup>(<PropertyGroup>adjLayer.property("Effects")).addProperty("CC Force Motion Blur");
    let motionBlurSamplesProperty: Property = <Property>motionBlur.property("Motion Blur Samples");
    let motionBlurSamples: number = 32;
    var cameraController: CameraController = new CameraController(camera);

    var cameraTime: number = 8;

    var referenceDelay = 15;
    var graph = buildGraph(main);
    var mainGroup = new ElementGroup("MAIN", comp);

    //changeElementDepth(root);

    cameraController.viewElement((<ElementGroup>(<Vertex>graph.vertices[0]).element).get("NODE"), playhead.getCurrentSecond());

    motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), 1);

    traverseGraph(graph, function (vertex: Vertex | ReferenceVertex, edge: Edge) {
        if (isType(vertex, Vertex)) {
            changeVertexDepth(<Vertex>vertex);
        }

        if (edge != undefined && (edge.element != undefined && edge.element != null)) {
            let tempGroup: ElementGroup = new ElementGroup("tmp", comp);

            if (isType(graph.vertices[edge.v1ID], Vertex)) {
                tempGroup.add((<ElementGroup>(<Vertex>graph.vertices[edge.v1ID]).element).get("NODE"));
            } else if (isType(graph.vertices[edge.v1ID], ReferenceVertex)) {
                tempGroup.add((<ElementGroup>(<Vertex>graph.vertices[(<ReferenceVertex>graph.vertices[edge.v1ID]).vertexID]).element).get("NODE"));
            }

            tempGroup.add(edge.element);
            mainGroup.add(edge.element);

            if (isType(graph.vertices[edge.v2ID], Vertex)) {
                tempGroup.add((<ElementGroup>(<Vertex>graph.vertices[edge.v2ID]).element).get("NODE"));
            } else if (isType(graph.vertices[edge.v2ID], ReferenceVertex)) {
                tempGroup.add((<ElementGroup>(<Vertex>graph.vertices[(<ReferenceVertex>graph.vertices[edge.v2ID]).vertexID]).element).get("NODE"));
            }

            cameraController.pauseMovement(playhead.getCurrentSecond());
            motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), motionBlurSamples);

            playhead.moveFrames(cameraTime);

            if (!(vertex.properties.get("zoom") != undefined && vertex.properties.get("zoom") != null && (<ElementProperty>vertex.properties.get("zoom")).getValue() == "false")) {
                if (vertex.properties.get("zoom") != undefined && vertex.properties.get("zoom") != null && (<ElementProperty>vertex.properties.get("zoom")).getValue() == "fullscreen") {
                    cameraController.viewElement(tempGroup, playhead.getCurrentSecond());
                } else {
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

            mainGroup.add((<ElementGroup>(<Vertex>vertex).element).get("NODE"));

            if (!((vertex.properties.get("zoom") != undefined || vertex.properties.get("zoom") != null) && (<ElementProperty>vertex.properties.get("zoom")).getValue() == "false")) {
                if (vertex.properties.get("zoom") != undefined && vertex.properties.get("zoom") != null && (<ElementProperty>vertex.properties.get("zoom")).getValue() == "fullscreen") {
                    cameraController.viewElement(main, playhead.getCurrentSecond());
                } else {
                    cameraController.viewElement((<ElementGroup>(<Vertex>vertex).element).get("NODE"), playhead.getCurrentSecond());
                }
            }

            motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), 1);
        } else if (isType(vertex, ReferenceVertex)) {
            cameraController.pauseMovement(playhead.getCurrentSecond());
            motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), motionBlurSamples);

            playhead.moveFrames(cameraTime);

            mainGroup.add((<Vertex>graph.vertices[(<ReferenceVertex>vertex).vertexID]).element);

            if (!((vertex.properties.get("zoom") != undefined || vertex.properties.get("zoom") != null) && (<ElementProperty>vertex.properties.get("zoom")).getValue() == "false")) {
                if (vertex.properties.get("zoom") != undefined && vertex.properties.get("zoom") != null && (<ElementProperty>vertex.properties.get("zoom")).getValue() == "fullscreen") {
                    cameraController.viewElement(main, playhead.getCurrentSecond());
                } else {
                    cameraController.viewElement((<ElementGroup>(<Vertex>graph.vertices[(<ReferenceVertex>vertex).vertexID]).element).get("NODE"), playhead.getCurrentSecond());
                }
            }

            motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), 1);

            if ((<ReferenceVertex>vertex).type == "erase") {
                eraseVertexElement((<ElementGroup>(<Vertex>graph.vertices[(<ReferenceVertex>vertex).vertexID]).element).get("NODE"), playhead, drawController, effectController);
                playhead.moveFrames(1.0);
            }

            cameraController.pauseMovement(playhead.getCurrentSecond());
            motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), 1);
        }

        if (isType(vertex, Vertex)) {
            drawVertexElement((<ElementGroup>(<Vertex>vertex).element).get("NODE"), playhead, drawController, effectController);

            if ((<ElementGroup>(<Vertex>vertex).element).get("NODE").getProperties().get("delay") != null) {
                playhead.moveSeconds(parseInt((<ElementProperty>(<ElementGroup>(<Vertex>vertex).element).get("NODE").getProperties().get("delay")).getValue()));
            }

            playhead.moveFrames(10);

            if ((<Vertex>vertex).scene && (<Vertex>vertex).scene != null) {
                if (isType((<Vertex>vertex).scene, Element)) {
                    (<Property>(<Element>(<Vertex>vertex).scene).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
                    playhead.moveFrames(1);
                    (<Property>(<Element>(<Vertex>vertex).scene).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
                } else if (isType((<Element>(<Vertex>vertex).scene), ElementGroup)) {
                    (<ElementGroup>(<Vertex>vertex).scene).iterate(function (element: Element) {
                        (<Property>element.getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
                    }, true);
                    playhead.moveFrames(1);
                    (<ElementGroup>(<Vertex>vertex).scene).iterate(function (element: Element) {
                        (<Property>element.getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
                    }, true);
                }

                mainGroup.add((<Vertex>vertex).scene);
            }
        }

        cameraController.pauseMovement(playhead.getCurrentSecond());
        motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), 1);

        playhead.moveFrames(cameraTime);
    });

    cameraController.pauseMovement(playhead.getCurrentSecond());
    motionBlurSamplesProperty.setValueAtTime(playhead.getCurrentSecond(), motionBlurSamples);

    playhead.moveFrames(cameraTime);

    let endZoom: string = "true";

    if ((<Vertex>graph.vertices[0]).properties.get("endZoom")) {
        endZoom = (<ElementProperty>(<Vertex>graph.vertices[0]).properties.get("endZoom")).getValue();
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
        } else if (isType(fills, ElementGroup)) {
            (<ElementGroup>fills).sort(function (a: Element | ElementGroup, b: Element | ElementGroup) {
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

            (<ElementGroup>fills).iterate(function (element: Element) {
                drawController.draw(element);
                playhead.moveFrames(30);
            }, true)
        }
    }

    if (colors) {
        if (isType(colors, Element)) {
            (<Property>(<Element>colors).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
            (<Property>(<Element>colors).getLayer().property("Opacity")).setInterpolationTypeAtKey((<Property>(<Element>colors).getLayer().property("Opacity")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            playhead.moveFrames(5);
            (<Property>(<Element>colors).getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
            (<Property>(<Element>colors).getLayer().property("Opacity")).setInterpolationTypeAtKey((<Property>(<Element>colors).getLayer().property("Opacity")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            playhead.moveFrames(30);
        } else if (isType(colors, ElementGroup)) {
            (<ElementGroup>colors).sort(function (a: Element | ElementGroup, b: Element | ElementGroup) {
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

            (<ElementGroup>colors).iterate(function (element: Element) {
                (<Property>element.getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
                (<Property>element.getLayer().property("Opacity")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Opacity")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
                playhead.moveFrames(5);
                (<Property>element.getLayer().property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
                (<Property>element.getLayer().property("Opacity")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Opacity")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
                playhead.moveFrames(30);
            }, true);
        }
    }

    if (highlighters) {
        if (isType(highlighters, Element)) {
            drawController.draw(highlighters);
        } else if (isType(highlighters, ElementGroup)) {
            (<ElementGroup>highlighters).sort(function (a: Element | ElementGroup, b: Element | ElementGroup) {
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

            (<ElementGroup>highlighters).iterate(function (element: Element) {
                drawController.draw(element);
                playhead.moveFrames(30);
            }, true)
        }
    }

    let compDuration: number = playhead.getCurrentSecond();
    if ((<ElementProperty>root.get("MAIN").getProperties().get("duration")) != null) {
        compDuration = parseFloat((<ElementProperty>root.get("MAIN").getProperties().get("duration")).getValue());
    }

    if (root.get("PARRALAX")) {
        camera.outPoint = compDuration;
        camera.locked = true;

        let parralaxCamera: CameraLayer = <CameraLayer>camera.duplicate();
        parralaxCamera.locked = false;
        parralaxCamera.name = "PARRALAX_CAMERA";
        parralaxCamera.inPoint = compDuration;

        parralaxPresetFile.open("r");
        let parralaxPresets = JSON.parse(parralaxPresetFile.read());
        parralaxPresetFile.close();

        let selectedPreset = "1";
        if (root.get("PARRALAX").getProperties().get("preset")) {
            selectedPreset = (<ElementProperty>root.get("PARRALAX").getProperties().get("preset")).getValue();
        }
        let parralaxDuration = 2.0;
        let properties = parralaxPresets[selectedPreset];
        let propertyNames = Object.keys(properties);
        for (var i = 0; i < propertyNames.length; i++) {
            let value: PropertyValue = (<Property>parralaxCamera.property(propertyNames[i])).valueAtTime(compDuration, true);
            (<Property>parralaxCamera.property(propertyNames[i])).setValueAtTime(compDuration, value);
            (<Property>parralaxCamera.property(propertyNames[i])).setValueAtTime(compDuration + parralaxDuration, value + properties[propertyNames[i]]);
        }
        playhead.moveSeconds(parralaxDuration);
    }

    /*(<Property>camera.property("X Rotation")).expression = "if (time <= " + playhead.getCurrentTime() + ") { freq = 0.1; amp = 2; accum = freq * time; wiggle(1, amp, 1, .5, accum); }";
    (<Property>camera.property("Y Rotation")).expression = "if (time <= " + playhead.getCurrentTime() + ") { freq = 0.3; amp = 4; accum = freq * time; wiggle(1, amp, 1, .5, accum); }";
    (<Property>camera.property("Z Rotation")).expression = "if (time <= " + playhead.getCurrentTime() + ") { freq = 0.2; amp = 7; accum = freq * time; wiggle(1, amp, 1, .5, accum); }";*/

    comp.duration = compDuration;
    comp.layers.addSolid([255, 255, 255], "BACKGROUND", comp.width, comp.height, comp.pixelAspect, comp.duration).moveToEnd();

    root.iterate(function (item: Element) {
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

function changeVertexDepth(vertex: Vertex) {
    if (vertex.properties.get("depth") != undefined && vertex.properties.get("depth") != null) {
        let zoomFactor: number = parseFloat((<ElementProperty>vertex.properties.get("depth")).getValue());
        let depth: number = (zoomFactor - 100) / 100 * 2666.66667;
        let element: ElementGroup | Element = vertex.element;

        if (isType(element, Element)) {
            changeElementDepth(<Element>element, depth)
        } else {
            element = <ElementGroup>element;
            element.iterate(function(element: Element) {
                changeElementDepth(element, depth);
            }, true);
        }
    }
}

function changeElementDepth(element: Element, depth: number) {
    if ((<Property>(<AVLayer>element.getLayer()).property("Position")).numKeys > 0) {
        for (var i = 0; i < (<Property>(<AVLayer>element.getLayer()).property("Position")).numKeys; i++) {
            let value: [number, number, number] = <[number, number,number]>(<Property>(<AVLayer>element.getLayer()).property("Position")).keyValue(i+1);
            value[2] = depth;
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtKey(i+1, value);
        }
    } else {
        let value: [number, number, number] = (<[number, number, number]>(<Property>(<AVLayer>element.getLayer()).property("Position")).value);
        value[2] = depth;
        (<Property>(<AVLayer>element.getLayer()).property("Position")).setValue(value);
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