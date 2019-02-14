import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  appareilName: string = "Cafetiére";
  isAuth: boolean = false;

  onClickButton() {
    console.log("=>" + this.appareilName);
  }

  constructor() {

    setTimeout(() => {
      this.isAuth = true;
    }, 1000);

  }

  ngOnInit() {
  }

}
