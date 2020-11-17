import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {

  constructor(private c: AngularFireAuth) { 
    c.authState.subscribe(e => {
      console.log(e);
    })
  }

  logout() {
    this.c.signOut();
  }
}
