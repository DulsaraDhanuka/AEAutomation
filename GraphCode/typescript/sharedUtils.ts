function buildGraph(graphGroup: ElementGroup, splitter: string = " :: ") : Graph {
    let graph: Graph = new Graph();

    fillGraph(graphGroup, graph);
    
    return graph;
}

function arrangeElements(graphGroup: ElementGroup): ElementGroup {

    let newGroup: ElementGroup = new ElementGroup(graphGroup.getRawName(), graphGroup.getComp());

    let node: Element | ElementGroup = null;
    let connector: Element | ElementGroup = null;
    let scene: Element | ElementGroup = null;

    if (isType(graphGroup, ElementGroup)) {
        node = graphGroup.get("NODE");
        connector = graphGroup.get("CONNECTOR");
        scene = graphGroup.get("SCENE");
    }

    if (node) {
        if (isType(node, ElementGroup)) {
            node = <ElementGroup>node;
            let tmpNode: ElementGroup = new ElementGroup(node.getRawName(), graphGroup.getComp());

            let nodeChilds: Array<Element | ElementGroup> = new Array<Element | ElementGroup>();
            for (var i = 0; i < node.length; i++) {
                nodeChilds.push(node.get(i));
            }

            nodeChilds.sort(function (a: Element | ElementGroup, b: Element | ElementGroup): number {
                let a_int: number = parseInt(a.getName());
                let b_int: number = parseInt(b.getName());

                if (a_int > b_int) {
                    return 1;
                } else if (a_int < b_int) {
                    return -1;
                } else {
                    return 0;
                }
            });

            for (var i = 0; i < nodeChilds.length; i++) {
                tmpNode.add(nodeChilds[i]);
            }

            node = tmpNode;
        }
    }

    if (node) {
        newGroup.add(node);
    }

    if (connector) {
        newGroup.add(connector);
    }
    if (scene) {
        newGroup.add(scene);
    }

    let childs: Array<Element | ElementGroup> = new Array<Element | ElementGroup>();
    for (var i = 0; i < graphGroup.length; i++) {
        if (graphGroup.get(i).getName().search(/^\s*[0-9]+\s*$/) != -1) {
            childs.push(graphGroup.get(i));
        }
    }

    childs.sort(function (a: Element | ElementGroup, b: Element | ElementGroup): number {
        let a_int: number = parseInt(a.getName().replace(/ /g, ""));
        let b_int: number = parseInt(b.getName().replace(/ /g, ""));

        if (a_int > b_int) {
            return 1;
        } else if (a_int < b_int) {
            return -1;
        } else {
            return 0;
        }
    });

    for (var i = 0; i < childs.length; i++) {
        childs[i] = arrangeElements(<ElementGroup>childs[i]);
        newGroup.add(childs[i]);
    }

    return newGroup;
}

function fillGraph(group: ElementGroup, graph: Graph, parentVertexID?: number) : void {
    let id: string = "";
    
    if (parentVertexID != undefined) {
        let parentIDS: Array<string> = getParentID(graph, parentVertexID);
        let ids: Array<string> = new Array<string>();
        if (parentIDS[0] != undefined) {
            ids.push(parentIDS[0]);
        }
        ids.push(group.getName());
        id = ids.join("_");
    } else {
        id = "0";
    }

    let vertexID: number = 0;
    if ((group.getProperties().get("REF") && group.getProperties().get("REF") != null) || (group.getProperties().get("REFERASE") && group.getProperties().get("REFERASE") != null)) {
        let sequential: boolean = true;

        if (parentVertexID != undefined) {
            sequential = graph.vertices[parentVertexID].sequentialChilds;
        }

        if (group.getProperties().get("sequential") && group.getProperties().get("sequential") != null && (<ElementProperty> group.getProperties().get("sequential")).getValue() != null) {
            if ((<ElementProperty>group.getProperties().get("sequential")).getValue() == "false") {
                sequential = false;
            } else if ((<ElementProperty>group.getProperties().get("sequential")).getValue() == "true") {
                sequential = true;
            }
        }

        let sequentialChilds: boolean = true;

        if (group.getProperties().get("sequentialChilds") && group.getProperties().get("sequentialChilds") != null && (<ElementProperty>group.getProperties().get("sequentialChilds")).getValue() != null) {
            if ((<ElementProperty>group.getProperties().get("sequentialChilds")).getValue() == "false") {
                sequentialChilds = false;
            } else if ((<ElementProperty>group.getProperties().get("sequentialChilds")).getValue() == "true") {
                sequentialChilds = true;
            }
        }

        let type: string = "default";
        if (group.getProperties().get("REF") && group.getProperties().get("REF") != null) {
            vertexID = graph.getVertexIDFromString((<ElementProperty>group.getProperties().get("REF")).getValue());
        } else if (group.getProperties().get("REFERASE") && group.getProperties().get("REFERASE") != null) {
            vertexID = graph.getVertexIDFromString((<ElementProperty>group.getProperties().get("REFERASE")).getValue());
            type = "erase";
        }
        vertexID = graph.addVertex(new ReferenceVertex(id, vertexID, group.getProperties(), type, sequential, sequentialChilds));
        let connector: Element | ElementGroup = null;
        if (isType(group, ElementGroup)) {
            connector = group.get("CONNECTOR");
        }
        graph.addEdge(new Edge(parentVertexID, vertexID, connector));
    } else {
        let sequential: boolean = true;

        if (parentVertexID != undefined) {
            sequential = graph.vertices[parentVertexID].sequentialChilds;
        }

        if (group.getProperties().get("sequential") && group.getProperties().get("sequential") != null && (<ElementProperty>group.getProperties().get("sequential")).getValue() != null) {
            if ((<ElementProperty>group.getProperties().get("sequential")).getValue() == "false") {
                sequential = false;
            } else if ((<ElementProperty>group.getProperties().get("sequential")).getValue() == "true") {
                sequential = true;
            }
        }

        let sequentialChilds: boolean = true;

        if (group.getProperties().get("sequentialChilds") && group.getProperties().get("sequentialChilds") != null && (<ElementProperty>group.getProperties().get("sequentialChilds")).getValue() != null) {
            if ((<ElementProperty>group.getProperties().get("sequentialChilds")).getValue() == "false") {
                sequentialChilds = false;
            } else if ((<ElementProperty>group.getProperties().get("sequentialChilds")).getValue() == "true") {
                sequentialChilds = true;
            }
        }

        let vertex: Vertex = new Vertex(id, group.getProperties(), <ElementGroup>group.get("NODE"), group.get("SCENE"), sequential, sequentialChilds);
        vertexID = graph.addVertex(vertex);
        if (parentVertexID != undefined) {
            graph.addEdge(new Edge(parentVertexID, vertexID, group.get("CONNECTOR")));
        }
    }

    if (group.length > 1) {
        group.iterate(function(element: Element | ElementGroup) {
            if (element.getName() != "NODE" && element.getName() != "SCENE" && element.getName() != "CONNECTOR") {
                fillGraph(<ElementGroup> element, graph, vertexID);
            }
        });
    }
    
}

function traverseGraph(graph: Graph, fn: Function, initialNodes: Array<[number, number]> = [[0, null]]): void {
    if (initialNodes[0][0] == 0) {
        if (!graph.vertices[initialNodes[0][0]].drawn) {
            fn(graph.vertices[initialNodes[0][0]], graph.edges[initialNodes[0][1]]);
            graph.vertices[initialNodes[0][0]].drawn = true;
        }
    }

    let childNodes: Array<[number, number]> = new Array<[number, number]>();

    for (var i = 0; i < initialNodes.length; i++) {
        for (var ii = 0; ii < graph.edges.length; ii++) {
            if (graph.edges[ii].v1ID == initialNodes[i][0]) {
                if (!graph.vertices[graph.edges[ii].v2ID].drawn) {
                    fn(graph.vertices[graph.edges[ii].v2ID], graph.edges[ii]);
                    graph.vertices[graph.edges[ii].v2ID].drawn = true;
                }
                if (!graph.vertices[graph.edges[ii].v2ID].sequential) {
                    handleSequential(graph, fn, graph.edges[ii].v2ID);
                }

                childNodes.push([graph.edges[ii].v2ID, ii]);
            }
        }
    }

    if (childNodes.length > 0) {
        traverseGraph(graph, fn, childNodes);
    }
}

function handleSequential(graph: Graph, fn: Function, initialNode: number): void {
    for (var ii = 0; ii < graph.edges.length; ii++) {
        if (graph.edges[ii].v1ID == initialNode) {
            if (!graph.vertices[graph.edges[ii].v2ID].drawn) {
                fn(graph.vertices[graph.edges[ii].v2ID], graph.edges[ii]);
                graph.vertices[graph.edges[ii].v2ID].drawn = true;
            }
            if (!graph.vertices[graph.edges[ii].v2ID].sequential) {
                handleSequential(graph, fn, graph.edges[ii].v2ID);
            }
        }
    }
}

/*function traverseGraph(graph: Graph, fn: Function, recurse: boolean = false, vID?: number) : void {
    let edges: Array<Edge> = new Array<Edge>();
    let vertexID: number = 0;
    if (vID == undefined) {
        vertexID = graph.getVertexIDFromString("0");
        fn(graph.vertices[vertexID], null);
    } else {
        vertexID = vID;
    }

    for (var i = 0; i < graph.edges.length; i++) {
        if (graph.edges[i].v1ID == vertexID) {
            fn(graph.vertices[graph.edges[i].v2ID], graph.edges[i]);
        }
    }


    let sequential = true;
    let sequentialProp: ElementProperty = <ElementProperty>(<Vertex>graph.vertices[vertexID]).properties.get("sequential");
    if (sequentialProp && sequentialProp.getValue() == "false") {
        sequential = false;
    }
     
    for (var i = 0; i < graph.edges.length; i++) {
        if (graph.edges[i].v1ID == vertexID) {
            fn(graph.vertices[graph.edges[i].v2ID], graph.edges[i]);
        }
    }

    for (var i = 0; i < edges.length; i++) {
        traverseGraph(graph, fn, edges[i].v2ID);
    }
}*/

function getParentID(graph: Graph, parentVertexID: number, c?: Array<string>) : Array<string> {
    let ids: Array<string> = [];

    if (c != undefined) {
        ids = c;
    }

    for (var i = 0; i < graph.edges.length; i++) {
        if (graph.edges[i].v2ID == parentVertexID) {
            ids.push(graph.vertices[graph.edges[i].v2ID].id);
            ids = getParentID(graph, graph.edges[i].v1ID, ids);
        }
    }

    return ids;
}

function propertyParser(name: string): ElementPropertyGroup {
    let rootGroup: ElementPropertyGroup = new ElementPropertyGroup("root");

    let match: RegExpMatchArray = name.match(/\[(.*)\]/);
    if (match != null && match.length > 1) {
        let propertiesString: string = match[match.length - 1];
        let regex = /(.*?)\s*=\s*\"(.*?)\"(?:\s*,\s*)?/gm;
        let x;

        while ((x = regex.exec(propertiesString)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (x.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            rootGroup.add(new ElementProperty(x[1], x[2]));
        }
        /*let propertyStrings: Array<string> = propertiesString.split(/\s*,\s*(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/g);
        for (var l = 0; l < propertyStrings.length; l++) {
            let regExp: RegExp = new RegExp(/\s*(.*?)\s*=\s*\"(.*)\"/g);
            let propMatch = regExp.exec(propertyStrings[l]);
            rootGroup.add(new ElementProperty(propMatch[1], propMatch[2]));
        }*/
    }

    return rootGroup;
}

//TODO: Add multi-level inheritance
function isType(obj: any, type: any) {
    if (obj.__proto__.constructor.name == type.name) {
        return true;
    } else {
        if (obj.__proto__.constructor.prototype.__proto__.constructor.name == type.name) {
            return true;
        } else {
            return false;
        }
    }
}

function elementInArray(element: any, array: Array<any>) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == element) {
            return true;
        }
    }

    return false;
}