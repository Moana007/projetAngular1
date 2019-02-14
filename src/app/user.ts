export class User {
    private _nom: string;
    private _prenom: string;
    private _age: number;

    constructor(nom?: string, prenom?: string, age?: number) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    public get nom(): string {
        return this._nom;
    }
    public get prenom(): string {
        return this._prenom;
    }
    public get age(): number {
        return this._age;
    }
    public set nom(value: string) {
        this._nom = value; //toUpercase
    }
    public set prenom(value: string) {
        this._prenom = value;
    }
    public set age(value: number) {
        this._age = value;
    }

}
