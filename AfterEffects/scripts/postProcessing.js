//@include "./utils.js"
app.beginUndoGroup("Post Processing");
var mainComp = app.project.activeItem;
//let post_processing_template: CompItem = <CompItem>importAsset(File.openDialog("Select post processing template", ["Aftereffects Files: *.aep"]).absoluteURI, app.project, ImportAsType.COMP);
var post_processing_template = importAsset("/e/post_processing_template.aep", ImportAsType.PROJECT);
var post_processing_comp = searchProjectItem("MAIN", CompItem, post_processing_template);
var post_processing_layers = post_processing_comp.layers;
for (var i = 0; i < post_processing_layers.length; i++) {
    if (post_processing_layers[i + 1].name == "SKIP") {
    }
    else if (post_processing_layers[i + 1].name == "PROP") {
        var properties = ["Anchor Point", "Position", "Scale", "Orientation", "X Rotation", "Y Rotation", "Z Rotation", "Opacity"];
        var layer = mainComp.layers[post_processing_layers[i + 1].index];
        for (var ii = 0; ii < properties.length; ii++) {
            if (layer.property("Transform").property(properties[ii]) != null && layer.property("Transform").property(properties[ii]) != undefined) {
                if (post_processing_layers[i + 1].property("Transform").property(properties[ii]).canSetEnabled) {
                    if (post_processing_layers[i + 1].property("Transform").property(properties[ii]).canVaryOverTime) {
                        if (post_processing_layers[i + 1].property("Transform").property(properties[ii]).numKeys > 0) {
                            for (var iii = 0; iii < post_processing_layers[i + 1].property("Transform").property(properties[ii]).numKeys; iii++) {
                                layer.property("Transform").property(properties[ii]).setValueAtTime(post_processing_layers[i + 1].property("Transform").property(properties[ii]).keyTime(iii + 1), post_processing_layers[i + 1].property("Transform").property(properties[ii]).keyValue(iii + 1));
                            }
                        }
                        else {
                            layer.property("Transform").property(properties[ii]).setValue(post_processing_layers[i + 1].property("Transform").property(properties[ii]).value);
                        }
                    }
                    if (post_processing_layers[i + 1].property("Transform").property(properties[ii]).canSetExpression) {
                        layer.property("Transform").property(properties[ii]).expression = post_processing_layers[i + 1].property("Transform").property(properties[ii]).expression;
                    }
                }
            }
        }
    }
    else {
        post_processing_layers[i + 1].copyToComp(mainComp);
        var layer = mainComp.layer(post_processing_layers[i + 1].name);
        layer.outPoint = mainComp.duration;
        while (layer.index != post_processing_layers[i + 1].index) {
            layer.moveAfter(mainComp.layers[layer.index + 1]);
        }
    }
}
app.endUndoGroup();
