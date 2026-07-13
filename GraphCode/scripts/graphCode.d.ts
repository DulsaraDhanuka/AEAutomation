declare function buildGraph(graphGroup: ElementGroup, splitter?: string): Graph;
declare function arrangeElements(graphGroup: ElementGroup): ElementGroup;
declare function fillGraph(group: ElementGroup, graph: Graph, parentVertexID?: number): void;
declare function traverseGraph(graph: Graph, fn: Function, initialNodes?: Array<[number, number]>): void;
declare function handleSequential(graph: Graph, fn: Function, initialNode: number): void;
declare function getParentID(graph: Graph, parentVertexID: number, c?: Array<string>): Array<string>;
declare function propertyParser(name: string): ElementPropertyGroup;
declare function isType(obj: any, type: any): boolean;
declare function elementInArray(element: any, array: Array<any>): boolean;
declare class Edge {
    v1ID: number;
    v2ID: number;
    element: ElementGroup | Element;
    constructor(v1ID: number, v2ID: number, element?: ElementGroup | Element);
}
declare class Graph {
    vertices: Array<Vertex | ReferenceVertex>;
    edges: Array<Edge>;
    constructor();
    getVertexIDFromString(id: string): number;
    addVertex(vertex: Vertex | ReferenceVertex): number;
    addEdge(edge: Edge): void;
}
declare class ReferenceVertex {
    id: string;
    vertexID: number;
    properties: ElementPropertyGroup;
    sequential: boolean;
    sequentialChilds: boolean;
    drawn: boolean;
    type: string;
    constructor(id: string, vertexID: number, properties: ElementPropertyGroup, type?: string, sequential?: boolean, sequentialChilds?: boolean);
}
declare class Vertex {
    edges: Array<Edge>;
    id: string;
    properties: ElementPropertyGroup;
    element: ElementGroup | Element;
    scene: ElementGroup | Element;
    sequential: boolean;
    sequentialChilds: boolean;
    drawn: boolean;
    constructor(id: string, properties: ElementPropertyGroup, element: ElementGroup | Element, scene: ElementGroup | Element, sequential?: boolean, sequentialChilds?: boolean);
    addEdge(edge: Edge): void;
}
