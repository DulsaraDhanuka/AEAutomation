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


function graphMain(folder: string) {
    app.beginUndoGroup("GRAPH MAIN");
    var [drawingHandComp, erasingHandComp, BTT_pushing_HandComp, TTB_pushing_HandComp, RTL_pushing_HandComp, LTR_pushing_HandComp] = prepareProject(File("/I/Video Projects/New folder (26)/hands/DRAWING_HAND.ai"), File("/I/Video Projects/New folder (26)/hands/PUSHING_HAND.ai"), File("/I/Video Projects/New folder (26)/hands/ERASING_HAND.ai"));

    /*var sceneFiles = [
        File("/E/New folder (5)/New folder (7)/New folder (2)/1.ai"),
        File("/E/New folder (5)/New folder (7)/New folder (2)/2.ai")
    ];*/
    var sceneFiles: Array<File> = <Array<File>>Folder(folder).getFiles("*.ai");

    sceneFiles.sort(function (a: File, b: File) {
        let aIndex: number = parseInt(a.name.split('.').slice(0, -1).join('.'));
        let bIndex: number = parseInt(b.name.split('.').slice(0, -1).join('.'));

        if (aIndex != NaN && bIndex != NaN) {
            return aIndex - bIndex;
        } else {
            return 0;
        }
    });

    var mainComp: CompItem = app.project.items.addComp("MAIN", 1920, 1080, 1, 9999, 30);
    var playhead: Playhead = new Playhead(mainComp.frameRate);
    var transitionController: TransitionController = new TransitionController(playhead);

    var scenes: Array<{ scene: Element, transition: Element }> = [];

    for (var i = 0; i < sceneFiles.length; i++) {
        let [sceneComp, drawingHand, erasingHand, BTT_pushing_Hand, TTB_pushing_Hand, RTL_pushing_Hand, LTR_pushing_Hand]: [CompItem, Hand, Hand, Hand, Hand, Hand, Hand] = prepareScene(decodeURI(sceneFiles[i].name.split('.').slice(0, -1).join('.')), sceneFiles[i], drawingHandComp, erasingHandComp, BTT_pushing_HandComp, TTB_pushing_HandComp, RTL_pushing_HandComp, LTR_pushing_HandComp);
        sceneComp.openInViewer();
        let sceneRoot: ElementGroup = processScene(sceneComp, drawingHand, erasingHand, BTT_pushing_Hand, TTB_pushing_Hand, RTL_pushing_Hand, LTR_pushing_Hand);
        let sceneLayer: Element = new Element(mainComp.layers.add(sceneComp), mainComp);
        let transitionLayer: Element = null;
        sceneRoot.iterate(function (element: Element | ElementGroup) {
            if (element.getName() == "TRANSITION") {
                (<AVLayer>(<Element>element).getLayer()).enabled = false;
                transitionLayer = <Element>element;
            }
        });
        sceneLayer.getLayer().startTime = 0 - sceneLayer.getLayer().inPoint;
        scenes.push({ scene: sceneLayer, transition: transitionLayer });
        sceneComp.openInViewer();
        app.executeCommand(app.findMenuCommandId("Close"));

        //convertSceneLayersToImages(sceneComp);
        /*sceneLayer.startTime = playhead.getCurrentSecond();
        sceneLayer.timeRemapEnabled = true;
        let keyTime: number = sceneLayer.timeRemap.keyTime(2) - playhead.framesToSeconds(1);
        let keyValue: number = (<number>sceneLayer.timeRemap.keyValue(2)) - playhead.framesToSeconds(1);
        sceneLayer.timeRemap.removeKey(2);
        sceneLayer.timeRemap.setValueAtTime(keyTime, keyValue);*/
        //sceneLayers.push(sceneLayer);
    }

    for (var i = 0; i < scenes.length; i++) {
        var sceneElement: Element = scenes[i].scene;
        var transitionElement: Element = scenes[i].transition;

        sceneElement.getLayer().startTime = playhead.getCurrentSecond();
        playhead.moveSeconds((<CompItem>sceneElement.getLayer().source).duration);
        if (transitionElement != null && scenes.length > i + 1) {
            let transitionType: string = "none";
            if (transitionElement.getProperties().get("type")) {
                transitionType = (<ElementProperty>transitionElement.getProperties().get("type")).getValue();
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