import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  show = false;
  listData = [
    { id : 1, name : 'Test1'},
    { id : 2, name : 'Test2'}
  ];

  constructor(private _route: Router) {}
  ngOnInit() {
    const loggedUser = localStorage.getItem('currentUser');
    if (loggedUser) {
      this._route.navigate(['product']);
    }
  }
}
