//@include "./utils.js"

app.beginUndoGroup("Post Processing");

var mainComp: CompItem = <CompItem>app.project.activeItem;
//let post_processing_template: CompItem = <CompItem>importAsset(File.openDialog("Select post processing template", ["Aftereffects Files: *.aep"]).absoluteURI, app.project, ImportAsType.COMP);
var post_processing_template: FolderItem = <FolderItem>importAsset("/e/post_processing_template.aep", ImportAsType.PROJECT);

var post_processing_comp: CompItem = <CompItem>searchProjectItem("MAIN", CompItem, post_processing_template);
var post_processing_layers: LayerCollection = post_processing_comp.layers;

for (var i = 0; i < post_processing_layers.length; i++) {
    if (post_processing_layers[i + 1].name == "SKIP") {

    } else if (post_processing_layers[i + 1].name == "PROP") {
        let properties: Array<string> = ["Anchor Point", "Position", "Scale", "Orientation", "X Rotation", "Y Rotation", "Z Rotation", "Opacity"];
        let layer: Layer = mainComp.layers[post_processing_layers[i + 1].index];
        for (var ii = 0; ii < properties.length; ii++) {
            if ((<Property>layer.property("Transform").property(properties[ii])) != null && (<Property>layer.property("Transform").property(properties[ii])) != undefined) {
                if ((<Property>post_processing_layers[i + 1].property("Transform").property(properties[ii])).canSetEnabled) {
                    if ((<Property>post_processing_layers[i + 1].property("Transform").property(properties[ii])).canVaryOverTime) {
                        if ((<Property>post_processing_layers[i + 1].property("Transform").property(properties[ii])).numKeys > 0) {
                            for (var iii = 0; iii < (<Property>post_processing_layers[i + 1].property("Transform").property(properties[ii])).numKeys; iii++) {
                                (<Property>layer.property("Transform").property(properties[ii])).setValueAtTime((<Property>post_processing_layers[i + 1].property("Transform").property(properties[ii])).keyTime(iii + 1), (<Property>post_processing_layers[i + 1].property("Transform").property(properties[ii])).keyValue(iii + 1));
                            }
                        } else {
                            (<Property>layer.property("Transform").property(properties[ii])).setValue((<Property>post_processing_layers[i + 1].property("Transform").property(properties[ii])).value);
                        }
                    }

                    if ((<Property>post_processing_layers[i + 1].property("Transform").property(properties[ii])).canSetExpression) {
                        (<Property>layer.property("Transform").property(properties[ii])).expression = (<Property>post_processing_layers[i + 1].property("Transform").property(properties[ii])).expression;
                    }
                }
            }
        }
    } else {
        post_processing_layers[i + 1].copyToComp(mainComp);
        let layer: Layer = mainComp.layer(post_processing_layers[i + 1].name);
        layer.outPoint = mainComp.duration;
        while (layer.index != post_processing_layers[i + 1].index) {
            layer.moveAfter(mainComp.layers[layer.index + 1]);
        }
    }
}

app.endUndoGroup();