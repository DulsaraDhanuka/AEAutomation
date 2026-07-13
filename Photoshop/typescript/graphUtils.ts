//@include "./graphCode.js"
//@include "./Element/Element.js"
//@include "./Element/ElementGroup.js"

function decodeTree(layers: Layers, mainComp: Document, group?: ElementGroup): ElementGroup {
    let mainGroup: ElementGroup = new ElementGroup("ROOT", mainComp);
    if (group != undefined && group != null) {
        mainGroup = group;
    }

    for (var i = 0; i < layers.length; i++) {
        if (layers[i].visible == false) {
            continue;
        }

        if (layers[i].typename == "ArtLayer") {
            mainGroup.add(new Element(layers[i], mainComp, layers[i].name));
        } else if (layers[i].typename == "LayerSet") {
            if (layers[i].name == "MODEL") {
                decodeTree((<LayerSet>layers[i]).layers, mainComp, mainGroup);
            } else {
                let newGroup: ElementGroup = new ElementGroup(layers[i].name, mainComp);
                mainGroup.add(decodeTree((<LayerSet>layers[i]).layers, mainComp, newGroup));
            }
        }
    }    

    return mainGroup;
} 

function drawVertexElement(element: Element | ElementGroup) {
    drawElement(element);
}

function drawEdgeElement(element: Element | ElementGroup) {
    drawElement(element);
}

function drawElement(element: Element | ElementGroup) {
    if (isType(element, Element)) {
        (<Element>element).getLayer().visible = true;
        $.sleep(0);
        app.refresh();
    } else if (isType(element, ElementGroup)) {
        element = <ElementGroup>element;
        let group: boolean = true;
        for (var i = 0; i < element.length; i++) {
            if (element.get(i).getName().search(/^\s*[0-9]+\s*$/) == -1 && group) {
                group = false;
            }
        }

        if (group && !(element.getProperties().get("elementGroup") && (<ElementProperty>element.getProperties().get("elementGroup")).getValue() == "true")) {
            for (var i = 0; i < element.length; i++) {
                drawElement(element.get(i));
            }
        } else {
            (<ElementGroup>element).iterate(function (element: Element) {
                element.getLayer().visible = true;
            }, true);
            $.sleep(0);
            app.refresh();
        }
    }
}

function drawGroupSequentially(elements: ElementGroup) {
    elements.sort(function (a: Element | ElementGroup, b: Element | ElementGroup) {
        let aIndex: number = parseInt(a.getName());
        let bIndex: number = parseInt(b.getName());

        if (aIndex > bIndex) {
            return 1;
        } else if (aIndex > bIndex) {
            return -1;
        } else {
            return 0;
        }
    });

    (<ElementGroup>elements).iterate(function (element: Element) {
        element.getLayer().visible = true;
        $.sleep(0);
        app.refresh();
    }, true);
}
