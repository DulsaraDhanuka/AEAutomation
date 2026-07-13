declare class ElementPropertyGroup {
    protected name: string;
    length: number;
    protected properties: Array<ElementProperty | ElementPropertyGroup>;

    constructor(name: string);
    iterate(fn: Function, recursive?: true);
    getName(): string;
    get(id: number | string): ElementProperty | ElementPropertyGroup;
    add(property: ElementProperty): void;
    remove(id: number | string): void;
}