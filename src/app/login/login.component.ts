import { Component, OnInit, Output } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public model: LoginModel;
  public authState: FirebaseAuthState;

  constructor(public af: AngularFire) {
    this.model = { email: "", password: "" };
    this.af.auth.subscribe((auth) => {
      this.authState = auth;
    });
  }

  public submit() {
    this.af.auth.login(this.model).catch(alert);
  }

  public logout() {
    this.af.auth.logout();
  }

}

interface LoginModel {
  email: string;
  password: string;
}