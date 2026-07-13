declare class Element {
    protected name: string;
    protected rawName: string;
    protected comp: any;
    protected layer: any;
    protected elementProperties: ElementPropertyGroup;

    constructor(layer: any, comp: any, name?: string, rawName?: string);
    preDraw(playhead: any) : void;
    postDraw(playhead: any) : void;
    setOutPoint(t: number): void;
    getName(): string;
    getRawName(): string;
    getLayer(): any;
    setLayer(layer: any): void;
    getComp(): any;
    getProperties(): ElementPropertyGroup;
    addNullParent(nullObj?: any, beforeParenting?: Function, name?: string): any;
}