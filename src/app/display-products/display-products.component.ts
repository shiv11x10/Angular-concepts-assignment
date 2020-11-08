import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  isAdmin = true;
  Products = [];
  constructor(private productservice: ProductDataService) { 
    this.Products = productservice.getProducts();
  }

  delete(index:number) {
    this.productservice.delete(index);
  }

  ngOnInit(): void {
  }

}
