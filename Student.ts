export class Student {
    private _name : string
    private _group : string
    private _Dk1 : number
    private _Dk2 :number


    constructor(name: string, group: string, Dk1: number, Dk2: number) {
        this._name = name;
        this._group = group;
        this._Dk1 = Dk1;
        this._Dk2 = Dk2;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get group(): string {
        return this._group;
    }

    set group(value: string) {
        this._group = value;
    }

    get Dk1(): number {
        return this._Dk1;
    }

    set Dk1(value: number) {
        this._Dk1 = value;
    }

    get Dk2(): number {
        return this._Dk2;
    }

    set Dk2(value: number) {
        this._Dk2 = value;
    }
}
