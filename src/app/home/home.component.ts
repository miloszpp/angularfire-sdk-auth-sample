import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public af: AngularFire) { }

  ngOnInit() {
  }

}
