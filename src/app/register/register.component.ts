import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public model: RegisterModel;

  constructor(private af: AngularFire, private router: Router) {
    this.model = { email: "", password: "" };
  }

  public submit() {
    this.af.auth.createUser(this.model).then(() => this.router.navigate([""]), alert);
  }

}

interface RegisterModel {
  email: string;
  password: string;
}