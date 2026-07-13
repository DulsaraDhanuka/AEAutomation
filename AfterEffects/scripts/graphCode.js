function buildGraph(graphGroup, splitter) {
    if (splitter === void 0) { splitter = " :: "; }
    var graph = new Graph();
    fillGraph(graphGroup, graph);
    return graph;
}
function arrangeElements(graphGroup) {
    var newGroup = new ElementGroup(graphGroup.getRawName(), graphGroup.getComp());
    var node = null;
    var connector = null;
    var scene = null;
    if (isType(graphGroup, ElementGroup)) {
        node = graphGroup.get("NODE");
        connector = graphGroup.get("CONNECTOR");
        scene = graphGroup.get("SCENE");
    }
    if (node) {
        if (isType(node, ElementGroup)) {
            node = node;
            var tmpNode = new ElementGroup(node.getRawName(), graphGroup.getComp());
            var nodeChilds = new Array();
            for (var i = 0; i < node.length; i++) {
                nodeChilds.push(node.get(i));
            }
            nodeChilds.sort(function (a, b) {
                var a_int = parseInt(a.getName());
                var b_int = parseInt(b.getName());
                if (a_int > b_int) {
                    return 1;
                }
                else if (a_int < b_int) {
                    return -1;
                }
                else {
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
    var childs = new Array();
    for (var i = 0; i < graphGroup.length; i++) {
        if (graphGroup.get(i).getName().search(/^\s*[0-9]+\s*$/) != -1) {
            childs.push(graphGroup.get(i));
        }
    }
    childs.sort(function (a, b) {
        var a_int = parseInt(a.getName().replace(/ /g, ""));
        var b_int = parseInt(b.getName().replace(/ /g, ""));
        if (a_int > b_int) {
            return 1;
        }
        else if (a_int < b_int) {
            return -1;
        }
        else {
            return 0;
        }
    });
    for (var i = 0; i < childs.length; i++) {
        childs[i] = arrangeElements(childs[i]);
        newGroup.add(childs[i]);
    }
    return newGroup;
}
function fillGraph(group, graph, parentVertexID) {
    var id = "";
    if (parentVertexID != undefined) {
        var parentIDS = getParentID(graph, parentVertexID);
        var ids = new Array();
        if (parentIDS[0] != undefined) {
            ids.push(parentIDS[0]);
        }
        ids.push(group.getName());
        id = ids.join("_");
    }
    else {
        id = "0";
    }
    var vertexID = 0;
    if ((group.getProperties().get("REF") && group.getProperties().get("REF") != null) || (group.getProperties().get("REFERASE") && group.getProperties().get("REFERASE") != null)) {
        var sequential = true;
        if (parentVertexID != undefined) {
            sequential = graph.vertices[parentVertexID].sequentialChilds;
        }
        if (group.getProperties().get("sequential") && group.getProperties().get("sequential") != null && group.getProperties().get("sequential").getValue() != null) {
            if (group.getProperties().get("sequential").getValue() == "false") {
                sequential = false;
            }
            else if (group.getProperties().get("sequential").getValue() == "true") {
                sequential = true;
            }
        }
        var sequentialChilds = true;
        if (group.getProperties().get("sequentialChilds") && group.getProperties().get("sequentialChilds") != null && group.getProperties().get("sequentialChilds").getValue() != null) {
            if (group.getProperties().get("sequentialChilds").getValue() == "false") {
                sequentialChilds = false;
            }
            else if (group.getProperties().get("sequentialChilds").getValue() == "true") {
                sequentialChilds = true;
            }
        }
        var type = "default";
        if (group.getProperties().get("REF") && group.getProperties().get("REF") != null) {
            vertexID = graph.getVertexIDFromString(group.getProperties().get("REF").getValue());
        }
        else if (group.getProperties().get("REFERASE") && group.getProperties().get("REFERASE") != null) {
            vertexID = graph.getVertexIDFromString(group.getProperties().get("REFERASE").getValue());
            type = "erase";
        }
        vertexID = graph.addVertex(new ReferenceVertex(id, vertexID, group.getProperties(), type, sequential, sequentialChilds));
        var connector = null;
        if (isType(group, ElementGroup)) {
            connector = group.get("CONNECTOR");
        }
        graph.addEdge(new Edge(parentVertexID, vertexID, connector));
    }
    else {
        var sequential = true;
        if (parentVertexID != undefined) {
            sequential = graph.vertices[parentVertexID].sequentialChilds;
        }
        if (group.getProperties().get("sequential") && group.getProperties().get("sequential") != null && group.getProperties().get("sequential").getValue() != null) {
            if (group.getProperties().get("sequential").getValue() == "false") {
                sequential = false;
            }
            else if (group.getProperties().get("sequential").getValue() == "true") {
                sequential = true;
            }
        }
        var sequentialChilds = true;
        if (group.getProperties().get("sequentialChilds") && group.getProperties().get("sequentialChilds") != null && group.getProperties().get("sequentialChilds").getValue() != null) {
            if (group.getProperties().get("sequentialChilds").getValue() == "false") {
                sequentialChilds = false;
            }
            else if (group.getProperties().get("sequentialChilds").getValue() == "true") {
                sequentialChilds = true;
            }
        }
        var vertex = new Vertex(id, group.getProperties(), group.get("NODE"), group.get("SCENE"), sequential, sequentialChilds);
        vertexID = graph.addVertex(vertex);
        if (parentVertexID != undefined) {
            graph.addEdge(new Edge(parentVertexID, vertexID, group.get("CONNECTOR")));
        }
    }
    if (group.length > 1) {
        group.iterate(function (element) {
            if (element.getName() != "NODE" && element.getName() != "SCENE" && element.getName() != "CONNECTOR") {
                fillGraph(element, graph, vertexID);
            }
        });
    }
}
function traverseGraph(graph, fn, initialNodes) {
    if (initialNodes === void 0) { initialNodes = [[0, null]]; }
    if (initialNodes[0][0] == 0) {
        if (!graph.vertices[initialNodes[0][0]].drawn) {
            fn(graph.vertices[initialNodes[0][0]], graph.edges[initialNodes[0][1]]);
            graph.vertices[initialNodes[0][0]].drawn = true;
        }
    }
    var childNodes = new Array();
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
function handleSequential(graph, fn, initialNode) {
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
function getParentID(graph, parentVertexID, c) {
    var ids = [];
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
function propertyParser(name) {
    var rootGroup = new ElementPropertyGroup("root");
    var match = name.match(/\[(.*)\]/);
    if (match != null && match.length > 1) {
        var propertiesString = match[match.length - 1];
        var regex = /(.*?)\s*=\s*\"(.*?)\"(?:\s*,\s*)?/gm;
        var x = void 0;
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
function isType(obj, type) {
    if (obj.__proto__.constructor.name == type.name) {
        return true;
    }
    else {
        if (obj.__proto__.constructor.prototype.__proto__.constructor.name == type.name) {
            return true;
        }
        else {
            return false;
        }
    }
}
function elementInArray(element, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == element) {
            return true;
        }
    }
    return false;
}
var Edge = /** @class */ (function () {
    function Edge(v1ID, v2ID, element) {
        this.v1ID = v1ID;
        this.v2ID = v2ID;
        if (element) {
            this.element = element;
        }
        else {
            this.element = null;
        }
    }
    return Edge;
}());
var Graph = /** @class */ (function () {
    function Graph() {
        this.vertices = new Array();
        this.edges = new Array();
    }
    Graph.prototype.getVertexIDFromString = function (id) {
        for (var i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i].id == id) {
                return i;
            }
        }
        return null;
    };
    Graph.prototype.addVertex = function (vertex) {
        this.vertices.push(vertex);
        return this.vertices.length - 1;
    };
    Graph.prototype.addEdge = function (edge) {
        this.edges.push(edge);
    };
    return Graph;
}());
var ReferenceVertex = /** @class */ (function () {
    function ReferenceVertex(id, vertexID, properties, type, sequential, sequentialChilds) {
        if (type === void 0) { type = "default"; }
        if (sequential === void 0) { sequential = true; }
        if (sequentialChilds === void 0) { sequentialChilds = true; }
        this.id = id;
        this.vertexID = vertexID;
        this.properties = properties;
        this.type = type;
        this.sequential = sequential;
        this.sequentialChilds = sequentialChilds;
        this.drawn = false;
    }
    return ReferenceVertex;
}());
var Vertex = /** @class */ (function () {
    function Vertex(id, properties, element, scene, sequential, sequentialChilds) {
        if (sequential === void 0) { sequential = true; }
        if (sequentialChilds === void 0) { sequentialChilds = true; }
        this.id = id;
        this.properties = properties;
        this.element = new ElementGroup("VERTEX", element.getComp());
        this.element.add(element);
        this.scene = scene;
        this.sequential = sequential;
        this.sequentialChilds = sequentialChilds;
        this.edges = new Array();
        this.drawn = false;
    }
    Vertex.prototype.addEdge = function (edge) {
        this.edges.push(edge);
    };
    return Vertex;
}());
