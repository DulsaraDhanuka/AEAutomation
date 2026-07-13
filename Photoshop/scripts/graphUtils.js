//@include "./graphCode.js"
//@include "./Element/Element.js"
//@include "./Element/ElementGroup.js"
function decodeTree(layers, mainComp, group) {
    var mainGroup = new ElementGroup("ROOT", mainComp);
    if (group != undefined && group != null) {
        mainGroup = group;
    }
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].visible == false) {
            continue;
        }
        if (layers[i].typename == "ArtLayer") {
            mainGroup.add(new Element(layers[i], mainComp, layers[i].name));
        }
        else if (layers[i].typename == "LayerSet") {
            if (layers[i].name == "MODEL") {
                decodeTree(layers[i].layers, mainComp, mainGroup);
            }
            else {
                var newGroup = new ElementGroup(layers[i].name, mainComp);
                mainGroup.add(decodeTree(layers[i].layers, mainComp, newGroup));
            }
        }
    }
    return mainGroup;
}
function drawVertexElement(element) {
    drawElement(element);
}
function drawEdgeElement(element) {
    drawElement(element);
}
function drawElement(element) {
    if (isType(element, Element)) {
        element.getLayer().visible = true;
        $.sleep(0);
        app.refresh();
    }
    else if (isType(element, ElementGroup)) {
        element = element;
        var group = true;
        for (var i = 0; i < element.length; i++) {
            if (element.get(i).getName().search(/^\s*[0-9]+\s*$/) == -1 && group) {
                group = false;
            }
        }
        if (group && !(element.getProperties().get("elementGroup") && element.getProperties().get("elementGroup").getValue() == "true")) {
            for (var i = 0; i < element.length; i++) {
                drawElement(element.get(i));
            }
        }
        else {
            element.iterate(function (element) {
                element.getLayer().visible = true;
            }, true);
            $.sleep(0);
            app.refresh();
        }
    }
}
function drawGroupSequentially(elements) {
    elements.sort(function (a, b) {
        var aIndex = parseInt(a.getName());
        var bIndex = parseInt(b.getName());
        if (aIndex > bIndex) {
            return 1;
        }
        else if (aIndex > bIndex) {
            return -1;
        }
        else {
            return 0;
        }
    });
    elements.iterate(function (element) {
        element.getLayer().visible = true;
        $.sleep(0);
        app.refresh();
    }, true);
}
