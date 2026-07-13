class ReferenceVertex {
    id: string;
    vertexID: number;
    properties: ElementPropertyGroup;
    sequential: boolean;
    sequentialChilds: boolean;
    drawn: boolean;
    type: string;

    constructor(id: string, vertexID: number, properties: ElementPropertyGroup, type: string = "default", sequential: boolean = true, sequentialChilds: boolean = true) {
        this.id = id;
        this.vertexID = vertexID;
        this.properties = properties;
        this.type = type;
        this.sequential = sequential;
        this.sequentialChilds = sequentialChilds;
        this.drawn = false;
    }
}