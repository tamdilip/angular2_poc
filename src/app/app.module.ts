import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { ProductService } from './product/product.service';
import { SpecComponent } from './spec/spec.component';
import { ErrorComponent } from './error/error.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { LoginService } from './login/login.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'product', component: ProductComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'spec/:id', component: SpecComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SpecComponent,
    ErrorComponent,
    ChildComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    AuthService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
