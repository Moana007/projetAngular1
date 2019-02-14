import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, OnChanges {
  appareilStatus: boolean = true;
  @Input() userName: string; // @input() : rend ces variables accessiblent via le parent
  @Input() lastName: string; // ecoute les valeurs du parents (val defini dans parent)
  @Output() ratingUserName: EventEmitter<string> = new EventEmitter<string>();
  @Output() ratingLastName: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  getStatus() {
    return this.appareilStatus;
  }
  notifyUserName() {
    //propagation de la variable (userName)
    this.ratingUserName.emit(this.userName);
  }
  notifyLastName() {
    //propagation de la variable (lastName)
    this.ratingLastName.emit(this.lastName);
  }

  ngOnChanges(): void {

  }
  ngOnInit() {
  }

}
