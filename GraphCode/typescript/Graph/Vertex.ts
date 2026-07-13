class Vertex {
    edges: Array<Edge>;
    id: string;
    properties: ElementPropertyGroup;
    element: ElementGroup | Element;
    scene: ElementGroup | Element;
    sequential: boolean;
    sequentialChilds: boolean;
    drawn: boolean;

    constructor(id: string, properties: ElementPropertyGroup, element: ElementGroup | Element, scene: ElementGroup | Element, sequential: boolean = true, sequentialChilds: boolean = true) {
        this.id = id;
        this.properties = properties;
        this.element = new ElementGroup("VERTEX", element.getComp());
        this.element.add(element);
        this.scene = scene;
        this.sequential = sequential;
        this.sequentialChilds = sequentialChilds;
        this.edges = new Array<Edge>();
        this.drawn = false;
    }

    addEdge(edge: Edge) : void {
        this.edges.push(edge);
    }
}