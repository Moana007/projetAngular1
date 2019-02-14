import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @Input() userName: string;
  @Input() lastName: string;

  constructor() { }

  ngOnInit() {
  }

}
