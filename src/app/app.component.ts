import { Component } from '@angular/core';
import { User } from './login/user.model';
import { Router } from '@angular/router';
import { AuthenticationService } from './login/authentication.service';
import { NavbarService } from './shared/navbar/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private navbarService: NavbarService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}
