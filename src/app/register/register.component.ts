import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

var firebase = require("firebase");

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public model: RegisterModel;

  constructor(private router: Router) {
    this.model = { email: "", password: "" };
  }

  public submit() {
    firebase.auth().createUserWithEmailAndPassword(this.model.email, this.model.password)
      .then(() => this.router.navigate([""]), alert);
  }

}

interface RegisterModel {
  email: string;
  password: string;
}