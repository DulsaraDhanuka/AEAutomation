declare class JSON {
    static stringify(value: Object | Array<any>, replacer?: Function | Array<string>, space?: number | string): string;
    static parse(text: string, reviver?: Function): Object
}