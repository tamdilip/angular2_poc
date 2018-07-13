import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private loginService: LoginService, private _route: Router) {}

  canActivate() {
    const isLoggedIn = this.loginService.isLoggedIn();
    if (!isLoggedIn) {
      this._route.navigate(['/login']);
    }
    return isLoggedIn;
  }
}
