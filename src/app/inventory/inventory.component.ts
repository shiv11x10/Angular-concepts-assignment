import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  isAdmin=true;
  products = []
  constructor(private productservice: ProductDataService) {
      this.products = productservice.getProducts();
   }

  //  update(index:number) {
  //   this.productservice.update(index);
  // }

  updatePrice(value:number, index:number) {
    this.productservice.update(index, value);
  }

  ngOnInit(): void {
  }

}
