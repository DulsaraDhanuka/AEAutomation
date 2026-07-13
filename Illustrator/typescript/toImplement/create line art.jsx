var doc = app.activeDocument;
app.executeMenuCommand("Colors7");
app.redraw();
var raster = doc.rasterItems[0];
var item = raster.trace();
var tracingObj = item.tracing;

loadTraceoptions(tracingObj);
var layer = tracingObj.expandTracing();
app.redraw();
layer.active = true;
layer.selected = true;
//app.executeMenuCommand("simplify menu item");
//app.redraw();
layer.selected = true;
layer.active = true;
//app.executeMenuCommand("join");


function loadTraceoptions(thisImage){
    //thisImage.tracingOptions.loadFromPreset("nalaka");
     thisImage.tracingOptions.fills =false;
     thisImage.tracingOptions.strokes = true;
     thisImage.tracingOptions.ignoreWhite = true;
     thisImage.tracingOptions.threshold = 128;
     thisImage.tracingOptions.tracingMode = TracingModeType.TRACINGMODEBLACKANDWHITE;
     thisImage.tracingOptions.pathFidelity = 50;
     thisImage.tracingOptions.cornerFidelity = 75;
     thisImage.tracingOptions.noiseFidelity = 2;
     thisImage.tracingOptions.tracingMethod = TracingMethodType.TRACINGMETHODABUTTING;
     
       /*
    thisImage.tracingOptions.tracingMethod = TracingMethodType.TRACINGMETHODABUTTING;
    thisImage.tracingOptions.tracingMode = TracingModeType.TRACINGMODECOLOR;
    thisImage.tracingOptions.cornerFidelity = 50;
    thisImage.tracingOptions.pathFidelity = 55;
    thisImage.tracingOptions.noiseFidelity = 5;
    thisImage.tracingOptions.maxColors = 40; 
    thisImage.tracingOptions.colorFidelity = 50; 
    //app.redraw();
    */
}