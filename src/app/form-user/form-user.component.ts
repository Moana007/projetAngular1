import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  listUser: User[] = new Array<User>();
  update: boolean = false;
  user: User = new User();

  constructor() {

  }
  ngOnInit() {
  }

  editUser(u: User) {
    var userId = this.listUser.findIndex(function (element) {
      return element.nom == u.nom;
    });
    this.update = true;
    this.user = this.listUser[userId];
  }
  validationButton() {
    if (!this.update) {
      this.listUser.push(this.user);
    }
    this.update = false;
    this.user = new User();
  }
  supprUser(elmt: User) {
    var userIdToDelete = this.listUser.findIndex(function (element) {
      return element.nom == elmt.nom;
    });
    this.listUser.splice(userIdToDelete, 1);
  }

}
