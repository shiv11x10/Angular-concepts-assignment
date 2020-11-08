import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        DisplayProductsComponent,
        CartComponent
     ],
    exports: [
        DisplayProductsComponent,
        CartComponent
    ]
})
export class ShopModule { }