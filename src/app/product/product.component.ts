import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { error } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId: number;
  productName: string;
  iproducts: IProduct[];
  errorMessage: string;
  successHandler(data) {
    console.log('Success', data);
  }
  errorHandler(data) {
    console.log('Error', data);
  }
  save() {
    console.log('Saved');
  }
  showSpec(data) {
    console.log(data);
    this._route.navigate(['/spec/' + data.ProductID]);
  }
  productAction(data) {
    console.log(data);
  }

  constructor(private _product: ProductService, private _route: Router) {
    this.productId = 1111;
    this.productName = 'Test';
   }

  ngOnInit() {
    /* this._product.getProducts()
    .then(iproducts => this.iproducts = iproducts); */

    this._product.getProducts()
    .subscribe(
      iproducts => {
        // this.successHandler(iproducts);
        this.iproducts = iproducts;
      } ,
      error => {
        // this.errorHandler(error);
        this.errorMessage = error;
      }
    );
  }

}
