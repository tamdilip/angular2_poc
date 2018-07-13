import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class LoginService {

  private url = 'http://localhost:3005/login';

  constructor(private _http: Http) { }

  login(data): Observable<any> {
    const body = {
      username: btoa(data.username),
      password: btoa(data.password)
    };
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url, body, options)
    .map(this.successHandler)
    .catch(this.errorHandler);
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }else {
      return false;
    }
  }

  private successHandler(res: Response) {
    return res.json;
  }

  private errorHandler (err: Response) {
    return Observable.throw(err);
  }

}
