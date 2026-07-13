//@include "./Playhead.js"
//@include "./utils.js"
//@include "./Element/Element.js"
//@include "./Transitions/TransitionController.js"

// var mainComp: CompItem = app.project.items.addComp("MAIN", 1920, 1080, 1, 9999, 30);
// var playhead: Playhead = new Playhead(mainComp.frameRate);
// var transitionController: TransitionController = new TransitionController(playhead);

// var sceneFiles: Array<File> = <Array<File>>Folder(Folder.selectDialog("Select clips").toString()).getFiles("*.ai");
// sceneFiles.sort(function (a: File, b: File) {
//     let aIndex: number = parseInt(a.name.split('.').slice(0, -1).join('.'));
//     let bIndex: number = parseInt(b.name.split('.').slice(0, -1).join('.'));

//     if (aIndex != NaN && bIndex != NaN) {
//         return aIndex - bIndex;
//     } else {
//         return 0;
//     }
// });

app.beginUndoGroup("Apply transitions")
var playhead: Playhead = new Playhead(mainComp.frameRate);
var transitionController: TransitionController = new TransitionController(playhead);
let elements: Array<Element> = Array<Element>();

for (var i = 0; i < mainComp.layers.length; i++) {
    elements.push(new Element(<AVLayer>mainComp.layers[i+1], mainComp));
}

for (var i = 0; i < elements.length; i++) {
    let element: Element = elements[i];
    let layer: AVLayer = <AVLayer>element.getLayer();

    if (i > 0) {
        let prevElement: Element = elements[i-1];
        let prevLayer: AVLayer = <AVLayer>prevElement.getLayer();
        transitionController.applyTransition(element, prevElement, mainComp, "slide");
    }

    layer.startTime = playhead.getCurrentSecond();
    playhead.moveSeconds(layer.outPoint - layer.inPoint);
}

mainComp.duration = playhead.getCurrentSecond()
app.endUndoGroup()