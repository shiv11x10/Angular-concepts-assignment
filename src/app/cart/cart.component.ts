import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  Products = [];
  constructor() { 
    this.Products.push(new Product(1,"One Plus 5","./assets/images/1.jpg",1234,"mobile"))
        this.Products.push(new Product(2, "Moto G5 Plus", "./assets/images/2.jpg", 13999, "Mobile"));
        this.Products.push(new Product(3, "Nokia 6", "./assets/images/3.jpg", 14999, "Mobile"));
  }

  ngOnInit(): void {
  }

}
