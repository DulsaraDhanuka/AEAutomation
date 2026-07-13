//@include "../utils.js"
//@include "../Playhead.js"
var animationTemplateLocation = File("/e/New folder (19)/animation_template.aep");
var slideSourceLocation = Folder("/e/New folder (19)/New folder/");
var animationTemplate = importAsset(animationTemplateLocation.absoluteURI, ImportAsType.PROJECT);
var idleTemplate = null;
var transitionTemplates = [];
for (var i = 0; i < animationTemplate.items.length; i++) {
    if (animationTemplate.items[i + 1].name.search(/TRANSITION [0-9]+/) != -1 && isType(animationTemplate.items[i + 1], CompItem)) {
        transitionTemplates.push(animationTemplate.items[i + 1]);
    }
    else if (animationTemplate.items[i + 1].name == "IDLE" && isType(animationTemplate.items[i + 1], CompItem)) {
        idleTemplate = animationTemplate.items[i + 1];
    }
}
var transitionTemplate = transitionTemplates[Math.floor(Math.random() * transitionTemplates.length)];
var slideSources = [];
var slideSourcesFolder = createFolder("SLIDES");
var slideLayers = [];
for (var i = 0; i < slideSourceLocation.getFiles("*").length; i++) {
    slideSources.push(importAsset(slideSourceLocation.getFiles("*")[i].absoluteURI, ImportAsType.FOOTAGE));
    slideSources[i].parentFolder = slideSourcesFolder;
}
var main = app.project.items.addComp("MAIN", 1920, 1080, 1, 99, 30);
var playhead = new Playhead(main.frameRate);
for (var i = 0; i < slideSources.length; i++) {
    var slideSource = slideSources[i];
    var slideLayer = main.layers.add(slideSource);
    slideLayer.name = "SLIDE " + (i + 1);
    slideLayer.selected = false;
    slideLayer.moveToEnd();
    slideLayers.push(slideLayer);
    if (i != 0) {
        for (var ii = 0; ii < transitionTemplate.layers.length; ii++) {
            transitionTemplate.layers[ii + 1].copyToComp(main);
            main.layers[1].startTime = playhead.getCurrentSecond();
            if (main.layers[1].name == "OUT_SLIDE") {
                main.layers[1].replaceSource(slideSources[i - 1], true);
                main.layers[1].name = "SLIDE " + (i) + " OUT";
                parentToLayer(slideLayers[i - 1], main.layers[1]);
            }
            else if (main.layers[1].name == "IN_SLIDE") {
                main.layers[1].replaceSource(slideSources[i], true);
                main.layers[1].name = "SLIDE " + (i + 1) + " IN";
                parentToLayer(slideLayers[i], main.layers[1]);
            }
            main.layers[1].moveBefore(slideLayer);
        }
        playhead.moveSeconds(transitionTemplate.duration);
    }
    var idleController = searchLayerFromName(idleTemplate, "CONTROLLER");
    if (idleController) {
        idleController.copyToComp(main);
        idleController = main.layers[1];
        idleController.name = "SLIDE CONTROLLER " + (i + 1);
        idleController.moveBefore(slideLayer);
        parentToLayer(idleController, slideLayer);
    }
    slideLayer.startTime = playhead.getCurrentSecond();
    if (i != 0) {
        idleController.startTime = playhead.getCurrentSecond() - transitionTemplate.duration;
    }
    else {
        idleController.startTime = playhead.getCurrentSecond();
    }
    if (i != 0) {
    }
    var duration = 0.5;
    if (slideLayer.canSetTimeRemapEnabled) {
        duration = slideLayer.source.duration;
    }
    playhead.moveSeconds(duration);
    slideLayer.outPoint = playhead.getCurrentSecond();
    transitionTemplate = transitionTemplates[Math.floor(Math.random() * transitionTemplates.length)];
    idleController.stretch = ((duration + transitionTemplate.duration) / idleTemplate.duration) * 100;
    if (i != slideSources.length - 1 && i != 0) {
        idleController.stretch = ((duration + transitionTemplate.duration + transitionTemplate.duration) / idleTemplate.duration) * 100;
    }
}
main.duration = playhead.getCurrentSecond();
