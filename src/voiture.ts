export class Bonjour {
    private _message: string;
    private _userName: string;
    private _userAge: number;


    public get userName(): string {
        return this._userName;
    }
    public set userName(value: string) {
        this._userName = value;
    }
    public get userAge(): number {
        return this._userAge;
    }
    public set userAge(value: number) {
        this._userAge = value;
    }
    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }



    // affiche() {
    //     console.log("Bonjour " + this.message);
    // }
}