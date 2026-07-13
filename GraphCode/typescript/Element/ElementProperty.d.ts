declare class ElementProperty {
    protected name: string;
    protected value: any;

    constructor(name: string, value: any);
    getName(): string;
    getValue(): any;
    setValue(value: any): void;
}