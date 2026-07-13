class Edge {
    v1ID: number;
    v2ID: number;
    element: ElementGroup | Element;

    constructor(v1ID: number, v2ID: number, element?: ElementGroup | Element) {
        this.v1ID = v1ID;
        this.v2ID = v2ID;

        if (element) {
            this.element = element;
        } else {
            this.element = null;
        }
    }
}