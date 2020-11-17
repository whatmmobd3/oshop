import { Component } from '@angular/core';

import firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private c: AngularFireAuth) {
  }

  login() {
    this.c.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

}
