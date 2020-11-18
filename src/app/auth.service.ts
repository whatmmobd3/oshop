import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>

  constructor(private c: AngularFireAuth) {
    this.user$ = c.authState;
  }

  login() {
    this.c.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.c.signOut();
  }

}
