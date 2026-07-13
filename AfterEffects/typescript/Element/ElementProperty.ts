class ElementProperty {
    protected name: string;
    protected value: any;

    constructor(name: string, value: any) {
        this.name = name;
        this.value = value;
    }

    getName() : string {
        return this.name;
    }

    getValue() : any {
        return this.value;
    }

    setValue(value: any) : void {
        this.value = value;
    }
}