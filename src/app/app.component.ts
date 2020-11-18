import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';
  constructor(private c: AuthService, router: Router){
    c.user$.subscribe(e => {
      if(e){
        let returnUrl = localStorage.getItem('returnUrl')
        router.navigateByUrl(returnUrl)
      }
    })
  }
}
