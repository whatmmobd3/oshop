import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private c: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.c.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })

  }
}
