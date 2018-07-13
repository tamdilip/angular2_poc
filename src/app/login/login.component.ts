import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  login() {
    const data = {
      username: this.username,
      password: this.password
    };
    this._login.login(data).subscribe(
      res => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this._route.navigate(['/product']);
      },
      err => {
        this._route.navigate(['/error']);
      });
  }
  constructor(private _login: LoginService, private _route: Router) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
  }

}
