declare class ElementGroup {
    protected name: string;
    protected rawName: string;
    length: number;
    protected comp: any;
    protected elementProperties: ElementPropertyGroup;
    protected elements: Array<Element | ElementGroup>;

    constructor(name: string, comp: any, rawName?: string);
    sort(fn: (a: ElementGroup | Element, b: ElementGroup | Element) => number);
    iterate(fn: Function, recursive?: boolean, currIndex?: number);
    preDraw(playhead: any): void;
    postDraw(playhead: any): void;
    getName(): string;
    getRawName(): string;
    getComp(): any;
    get(id: number | string): Element | ElementGroup;
    add(element: Element | ElementGroup): void;
    getProperties(): ElementPropertyGroup;
    addNullParent(nullObj?: any, beforeParenting?: Function, name?: string): any;
}