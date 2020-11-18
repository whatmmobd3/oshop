import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import firebase from 'firebase/app'
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>

  constructor(private c: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = c.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'
    localStorage.setItem('returnUrl', returnUrl)

    this.c.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.c.signOut();
  }

}
