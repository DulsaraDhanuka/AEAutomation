//@include "../Playhead.js"

class TransitionController {
    protected transitions: Array<File>;
    protected playhead: Playhead;

    constructor(playhead: Playhead) {
        this.transitions = new Array<File>();

        /*this.transitions.push(File($.fileName).parent.absoluteURI + "/Transitions/none.aep");
        this.transitions.push(File($.fileName).parent.absoluteURI + "/Transitions/slide.aep");
        this.transitions.push(File($.fileName).parent.absoluteURI + "/Transitions/glitch.aep");*/
        let transitionFiles: Array<File | Folder> = Folder(File($.fileName).parent.absoluteURI + "/Transitions").getFiles("*.aep");

        for (var i = 0; i < transitionFiles.length; i++) {
            if (isType(transitionFiles[i], File)) {
                this.transitions.push(<File>transitionFiles[i]);
            }
        }

        this.playhead = playhead;
    }

    getTransitionNames(): Array<string> {
        let transitionNames: Array<string> = new Array<string>();
        for (var i = 0; i < this.transitions.length; i++) {
            transitionNames.push(decodeURI(this.transitions[i].name.split('.').slice(0, -1).join('.')))
        }
        return transitionNames
    }
    
    applyTransition(inElement: Element, outElement: Element, comp: CompItem, transitionName: string): void {
        let transition: File = null;
        for (var i = 0; i < this.transitions.length; i++) {
            if (decodeURI(this.transitions[i].name.split('.').slice(0, -1).join('.')) == transitionName) {
                transition = this.transitions[i];
            }
        }

        if (transition == null) {
            transition = this.transitions[0];
        }

        let transitionProject: FolderItem = <FolderItem>importAsset(transition.absoluteURI, ImportAsType.PROJECT);
        transitionProject.name = inElement.getName() + " -> " + outElement.getName();
        let transitionComp: CompItem = <CompItem>searchProjectItem("TRANSITION", CompItem, transitionProject);

        let outScene: AVLayer = searchLayerFromName(transitionComp, "OUT_SCENE", true);
        outScene.replaceSource(outElement.getLayer().source, true);
        outScene.timeRemapEnabled = true;
        let endTime: number = <number>outScene.timeRemap.keyValue(2) - playhead.framesToSeconds(1);
        outScene.timeRemap.setValueAtTime(outScene.timeRemap.keyTime(1), endTime);
        outScene.timeRemap.setValueAtTime(outScene.timeRemap.keyTime(2), endTime);

        let inScene: AVLayer = searchLayerFromName(transitionComp, "IN_SCENE", true);
        inScene.replaceSource(inElement.getLayer().source, true);
        inScene.timeRemapEnabled = true;
        inScene.timeRemap.setValueAtTime(inScene.timeRemap.keyTime(2), inScene.timeRemap.keyValue(1));

        let transitionLayer: AVLayer = comp.layers.add(transitionComp);
        transitionLayer.startTime = playhead.getCurrentSecond();
        playhead.moveSeconds(transitionComp.duration);
    }
}