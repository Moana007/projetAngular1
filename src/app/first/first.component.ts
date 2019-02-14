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
    console.log(this.userName);
    this.ratingUserName.emit(this.userName);
  }

  ngOnChanges(): void {

  }
  ngOnInit() {
  }

}
