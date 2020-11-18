import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';


// storing user in firebase
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';
  constructor(private userService: UserService, private c: AuthService, router: Router) {
    c.user$.subscribe(e => {
      if (e) {
        userService.save(e)
        let returnUrl = localStorage.getItem('returnUrl')
        router.navigateByUrl(returnUrl)
      }
    })
  }
}
