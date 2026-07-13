//@include "./Hand.js"
//@include "./utils.js"
//@include "./Playhead.js"
//@include "./graphCode.js"
//@include "./bridgeGraph.js"
//@include "./graphPlayback.js"
//@include "./Element/Element.js"
//@include "./CameraController.js"
//@include "./Element/ElementGroup.js"
//@include "./Drawer/DrawController.js"
//@include "./Effects/EffectController.js"
//@include "./Transitions/TransitionController.js"
function graphMain(folder) {
    app.beginUndoGroup("GRAPH MAIN");
    var _a = prepareProject(File("/I/Video Projects/New folder (26)/hands/DRAWING_HAND.ai"), File("/I/Video Projects/New folder (26)/hands/PUSHING_HAND.ai"), File("/I/Video Projects/New folder (26)/hands/ERASING_HAND.ai")), drawingHandComp = _a[0], erasingHandComp = _a[1], BTT_pushing_HandComp = _a[2], TTB_pushing_HandComp = _a[3], RTL_pushing_HandComp = _a[4], LTR_pushing_HandComp = _a[5];
    /*var sceneFiles = [
        File("/E/New folder (5)/New folder (7)/New folder (2)/1.ai"),
        File("/E/New folder (5)/New folder (7)/New folder (2)/2.ai")
    ];*/
    var sceneFiles = Folder(folder).getFiles("*.ai");
    sceneFiles.sort(function (a, b) {
        var aIndex = parseInt(a.name.split('.').slice(0, -1).join('.'));
        var bIndex = parseInt(b.name.split('.').slice(0, -1).join('.'));
        if (aIndex != NaN && bIndex != NaN) {
            return aIndex - bIndex;
        }
        else {
            return 0;
        }
    });
    var mainComp = app.project.items.addComp("MAIN", 1920, 1080, 1, 9999, 30);
    var playhead = new Playhead(mainComp.frameRate);
    var transitionController = new TransitionController(playhead);
    var scenes = [];
    var _loop_1 = function () {
        var _a = prepareScene(decodeURI(sceneFiles[i].name.split('.').slice(0, -1).join('.')), sceneFiles[i], drawingHandComp, erasingHandComp, BTT_pushing_HandComp, TTB_pushing_HandComp, RTL_pushing_HandComp, LTR_pushing_HandComp), sceneComp = _a[0], drawingHand = _a[1], erasingHand = _a[2], BTT_pushing_Hand = _a[3], TTB_pushing_Hand = _a[4], RTL_pushing_Hand = _a[5], LTR_pushing_Hand = _a[6];
        sceneComp.openInViewer();
        var sceneRoot = processScene(sceneComp, drawingHand, erasingHand, BTT_pushing_Hand, TTB_pushing_Hand, RTL_pushing_Hand, LTR_pushing_Hand);
        var sceneLayer = new Element(mainComp.layers.add(sceneComp), mainComp);
        var transitionLayer = null;
        sceneRoot.iterate(function (element) {
            if (element.getName() == "TRANSITION") {
                element.getLayer().enabled = false;
                transitionLayer = element;
            }
        });
        sceneLayer.getLayer().startTime = 0 - sceneLayer.getLayer().inPoint;
        scenes.push({ scene: sceneLayer, transition: transitionLayer });
        sceneComp.openInViewer();
        app.executeCommand(app.findMenuCommandId("Close"));
    };
    for (var i = 0; i < sceneFiles.length; i++) {
        _loop_1();
    }
    for (var i = 0; i < scenes.length; i++) {
        var sceneElement = scenes[i].scene;
        var transitionElement = scenes[i].transition;
        sceneElement.getLayer().startTime = playhead.getCurrentSecond();
        playhead.moveSeconds(sceneElement.getLayer().source.duration);
        if (transitionElement != null && scenes.length > i + 1) {
            var transitionType = "none";
            if (transitionElement.getProperties().get("type")) {
                transitionType = transitionElement.getProperties().get("type").getValue();
            }
            sceneElement.getComp().openInViewer();
            transitionController.applyTransition(scenes[i + 1].scene, sceneElement, sceneElement.getComp(), transitionType);
            sceneElement.getComp().openInViewer();
            app.executeCommand(app.findMenuCommandId("Close"));
        }
    }
    /*let firstScene: Element = new Element(sceneLayers[parseInt((<ElementProperty>transitions[0].getProperties().get("outScene")).getValue()) - 1], mainComp);
    firstScene.getLayer().timeRemapEnabled = true;
    let key2Time: number = firstScene.getLayer().timeRemap.keyTime(2);
    firstScene.getLayer().timeRemap.removeKey(1);
    firstScene.getLayer().timeRemap.setValueAtTime(playhead.getCurrentSecond(), 0);
    firstScene.getLayer().timeRemap.removeKey(firstScene.getLayer().timeRemap.nearestKeyIndex(key2Time));
    playhead.moveSeconds((<CompItem>firstScene.getLayer().source).duration - playhead.framesToSeconds(1));
    firstScene.getLayer().timeRemap.setValueAtTime(playhead.getCurrentSecond(), (<CompItem>firstScene.getLayer().source).duration - playhead.framesToSeconds(1));

    for (var i = 0; i < transitions.length; i++) {
        if ((<ElementProperty>transitions[i].getProperties().get("inScene")).getValue() == "none") {
            continue;
        }

        let inScene: Element = new Element(sceneLayers[parseInt((<ElementProperty>transitions[i].getProperties().get("inScene")).getValue()) - 1], mainComp);
        let outScene: Element = new Element(sceneLayers[parseInt((<ElementProperty>transitions[i].getProperties().get("outScene")).getValue()) - 1], mainComp);

        transitionController.applyTransition(inScene, outScene, mainComp, (<ElementProperty>transitions[i].getProperties().get("type")).getValue());
        inScene.getLayer().inPoint = playhead.getCurrentSecond();
        inScene.getLayer().timeRemapEnabled = true;
        let key2Time: number = inScene.getLayer().timeRemap.keyTime(2);
        inScene.getLayer().timeRemap.removeKey(1);
        inScene.getLayer().timeRemap.setValueAtTime(playhead.getCurrentSecond(), 0);
        inScene.getLayer().timeRemap.removeKey(inScene.getLayer().timeRemap.nearestKeyIndex(key2Time));
        playhead.moveSeconds((<CompItem>inScene.getLayer().source).duration - playhead.framesToSeconds(1));
        inScene.getLayer().timeRemap.setValueAtTime(playhead.getCurrentSecond(), (<CompItem>inScene.getLayer().source).duration - playhead.framesToSeconds(1));
    }*/
    mainComp.duration = playhead.getCurrentSecond();
    app.endUndoGroup();
}
