//@include "../Playhead.js"
var TransitionController = /** @class */ (function () {
    function TransitionController(playhead) {
        this.transitions = new Array();
        /*this.transitions.push(File($.fileName).parent.absoluteURI + "/Transitions/none.aep");
        this.transitions.push(File($.fileName).parent.absoluteURI + "/Transitions/slide.aep");
        this.transitions.push(File($.fileName).parent.absoluteURI + "/Transitions/glitch.aep");*/
        var transitionFiles = Folder(File($.fileName).parent.absoluteURI + "/Transitions").getFiles("*.aep");
        for (var i = 0; i < transitionFiles.length; i++) {
            if (isType(transitionFiles[i], File)) {
                this.transitions.push(transitionFiles[i]);
            }
        }
        this.playhead = playhead;
    }
    TransitionController.prototype.getTransitionNames = function () {
        var transitionNames = new Array();
        for (var i = 0; i < this.transitions.length; i++) {
            transitionNames.push(decodeURI(this.transitions[i].name.split('.').slice(0, -1).join('.')));
        }
        return transitionNames;
    };
    TransitionController.prototype.applyTransition = function (inElement, outElement, comp, transitionName) {
        var transition = null;
        for (var i = 0; i < this.transitions.length; i++) {
            if (decodeURI(this.transitions[i].name.split('.').slice(0, -1).join('.')) == transitionName) {
                transition = this.transitions[i];
            }
        }
        if (transition == null) {
            transition = this.transitions[0];
        }
        var transitionProject = importAsset(transition.absoluteURI, ImportAsType.PROJECT);
        transitionProject.name = inElement.getName() + " -> " + outElement.getName();
        var transitionComp = searchProjectItem("TRANSITION", CompItem, transitionProject);
        var outScene = searchLayerFromName(transitionComp, "OUT_SCENE", true);
        outScene.replaceSource(outElement.getLayer().source, true);
        outScene.timeRemapEnabled = true;
        var endTime = outScene.timeRemap.keyValue(2) - playhead.framesToSeconds(1);
        outScene.timeRemap.setValueAtTime(outScene.timeRemap.keyTime(1), endTime);
        outScene.timeRemap.setValueAtTime(outScene.timeRemap.keyTime(2), endTime);
        var inScene = searchLayerFromName(transitionComp, "IN_SCENE", true);
        inScene.replaceSource(inElement.getLayer().source, true);
        inScene.timeRemapEnabled = true;
        inScene.timeRemap.setValueAtTime(inScene.timeRemap.keyTime(2), inScene.timeRemap.keyValue(1));
        var transitionLayer = comp.layers.add(transitionComp);
        transitionLayer.startTime = playhead.getCurrentSecond();
        playhead.moveSeconds(transitionComp.duration);
    };
    return TransitionController;
}());
