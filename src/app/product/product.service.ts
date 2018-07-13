import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IProduct } from './product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {

  private _producturl = 'http://localhost:3004/products';

  constructor(private _http: Http) { }

  /* getProducts(): Promise<IProduct[]> {
    return this._http.get(this._producturl).toPromise()
    .then((response: Response) => <IProduct[]>response.json());
  } */

  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._producturl)
    .map(this.successHandler)
    .catch(this.errorHandler);
  }

  private successHandler(response: Response) {
    return <IProduct[]>response.json();
  }

  private errorHandler (error: Response) {
    return Observable.throw('down');
  }
}
