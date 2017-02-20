import { Component, AfterViewInit } from '@angular/core';
import { AngularFire } from "angularfire2";

import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
}
