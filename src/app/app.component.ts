import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'Guillaume';
  heroes: string[] = ["Toto", "Titi", "Tata", "Tete"];

  userName: string = "Ryan";
  lastName: string = "gbd";


  constructor() {

  }

  /*   let toto: any
    toto = "titi"
    toto = 1
    toto = true
 
    let liste: any[] = ["Adrien", false, 123]
    let isDone: string = undefined
    let tab0: number[] = [-1, 3, 2]
    tab0.push(45.1)
 
    enum Fruit { 'banane', "ananas" }
    let k: Fruit = Fruit.ananas;
    let s: string
    //console.log(k);
 
    let uneValeur: any = "Peut etre une chaine ?"
    let longeur: number = (<string>uneValeur).length
 
    let autreValeur: string = "123"
    let newVal: number = autreValeur.toString().length;
 
    let x = 1;
    let y = 3;
    let z = 29;
    [x, y] = [z, x]; //z = 29 / x = 29
    //console.log(z, x);
 
    let o = { a: "foo", b: "toto", c: 12, i: "Johan" };
    let { a, b, c, i } = o;
    //console.log(a, b, c, i)
 
    let res1: number = this.doAddition(5);
    let res2: number = this.doAddition2(5, 6, 10, 30, 60);
    //console.log(res2);
 
 
    let t = new Bonjour("Salut a qqlin mais qui !?", "Moana", 26);
    //t.affiche();
 
  }
 
 
  doAddition(x: number, y: number = 0, z?: number): number {
    return x + y;
  }
  doAddition2(x: number, ...leReste: number[]): number {
    for (let i = 0; i < leReste.length; i++) {
      x += leReste[i];
    }
    return x;
  }
  tools1(): string {
    return ''
  }
  tools2(): void {
    //rien
  }
  tools3(): number {
    return 2;
  } */

} // End AppComponent

/* class Bonjour {
  private _message: string;
  private _userName: string;
  private _userAge: number;

  public toString(): string {
    let ch = '';
    //ch = ;
    return ch;
  }
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

  constructor(message: string, userName: string, userAge: number) {
    this.message = message;
  }

  affiche() {
    console.log("Bonjour " + this.message);
  }
} */


