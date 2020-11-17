import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import  firebase from 'firebase'
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar', 
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  // user : firebase.User;
  user$: Observable<firebase.User>

  constructor(private c: AngularFireAuth) { 
    c.authState.subscribe(e => {
      this.user$ = c.authState;
      console.log(e);
      
    })
  }

  logout() {
    this.c.signOut();
  }
}
