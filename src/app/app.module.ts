import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './PageNotFound.component';
import { ShopModule } from './shop.module';
import { InventoryComponent } from './inventory/inventory.component';
import { PriceUpdateComponent } from './priceUpdate.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CustomerModule } from './customer.module';
import { HttpClientModule } from '@angular/common/http';
import { codeValidatorDirective } from './signup/code.validator';
import { ReactiveSignupComponent } from './reactive-signup/reactive-signup.component';
import { PipeComponent } from './pipes-demo/pipe.component';
import { ReversePipe } from './pipes-demo/reverse.pipe';

var routes : Routes= [
  {
    path: '',
    component: DisplayProductsComponent
  },
  {
    path: 'home',
    component: DisplayProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'reactive signup',
    component: ReactiveSignupComponent
  },
  {
    path: 'customers',
    loadChildren: './customer.module#CustomerModule'
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PageNotFoundComponent,
    InventoryComponent,
    PriceUpdateComponent,
    codeValidatorDirective,
    ReactiveSignupComponent,
    PipeComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ShopModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
