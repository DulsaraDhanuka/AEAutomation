//@include "./mergeOverlappedAnchors.js"
function tracePathLayers() {
    var layers = app.activeDocument.layers;
    for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        if (layer.name.search(/vector/) != -1) {
            var vectorPath = layer.layers[0].rasterItems[0];
            var trace = vectorPath.trace();
            trace.tracing.tracingOptions.fills = false;
            trace.tracing.tracingOptions.strokes = true;
            trace.tracing.tracingOptions.ignoreWhite = true;
            trace.tracing.tracingOptions.threshold = 128;
            trace.tracing.tracingOptions.tracingMode = TracingModeType.TRACINGMODEBLACKANDWHITE;
            trace.tracing.tracingOptions.pathFidelity = 50;
            trace.tracing.tracingOptions.cornerFidelity = 75;
            trace.tracing.tracingOptions.noiseFidelity = 2;
            trace.tracing.tracingOptions.tracingMethod = TracingMethodType.TRACINGMETHODABUTTING;
            trace.tracing.tracingOptions.maxStrokeWeight = 50;
            var pathGroup = trace.tracing.expandTracing();
            var pathItems = [];
            var closed = false;
            for (var ii = 0; ii < pathGroup.pathItems.length; ii++) {
                pathItems.push(pathGroup.pathItems[ii]);
            }
        
            pathItems.sort(function(a, b){
                var aPosition = [a.left + a.width / 2, a.top + a.height / 2];
                var bPosition = [b.left + b.width / 2, b.top + b.height / 2];
                
                if (aPosition[1] > bPosition[1]) {
                    return -1
                } else if(aPosition[1] < bPosition[1]) {
                    return 1;
                } else {
                    if(aPosition[0] < aPosition[0]) {
                        return -1;
                    } else if (aPosition[0] > aPosition[0]) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            });
        
            for (var ii = 0; ii < pathItems.length; ii++) {
                pathItems[ii].move(pathItems[ii].parent, ElementPlacement.PLACEATBEGINNING);
            }
            /*if (!closed) {
                pathGroup.selected = true;
                app.executeMenuCommand("join");
            }
            app.executeMenuCommand("deselectall");
            
            pathGroup.selected = true;
            mergeOverlappedAnchors();
            app.executeMenuCommand("deselectall");*/
        }
    }
}
