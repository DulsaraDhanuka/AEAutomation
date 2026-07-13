//@include "./mergeOverlappedAnchors.js"

function tracePathLayers() {
    let layers: Layers = app.activeDocument.layers;

    for (var i = 0; i < layers.length; i++) {
        let layer: Layer = layers[i];

        if (layer.name.search(/vector/) != -1) {
            let vectorPath: RasterItem = layer.layers[0].rasterItems[0];

            let trace: PluginItem = vectorPath.trace();
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
            let pathGroup: GroupItem = trace.tracing.expandTracing();
            let pathItems: PathItems = pathGroup.pathItems;

            var closed: boolean = false;
            for (var ii = 0; ii < pathItems.length; ii++) {
                var pathItem: PathItem = pathItems[ii];

                if (pathItem.closed) {
                    if (!pathItem.stroked) {
                        pathItem.stroked = true;

                        var newRGBColor: RGBColor = new RGBColor();
                        newRGBColor.red = 0;
                        newRGBColor.green = 0;
                        newRGBColor.blue = 0;

                        pathItem.strokeColor = newRGBColor;
                        pathItem.strokeWidth = 10;
                    }
                    closed = true;
                }
            }

            if (!closed) {
                pathGroup.selected = true;
                app.executeMenuCommand("join");
            }
            app.executeMenuCommand("deselectall");
            pathGroup.selected = true;
            mergeOverlappedAnchors();
            app.executeMenuCommand("deselectall");
        }
    }
}