import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  Products: Product[] = [];
  constructor() {
    this.Products.push(new Product(1,"One Plus 5","./assets/images/1.jpg",1234,"mobile"))
        this.Products.push(new Product(2, "Moto G5 Plus", "./assets/images/2.jpg", 13999, "Mobile"));
        this.Products.push(new Product(3, "Nokia 6", "./assets/images/3.jpg", 14999, "Mobile"));
        this.Products.push(new Product(4, "Samsung Galaxy Note 8", "./assets/images/4.jpg", 67900, "Mobile"));
        this.Products.push(new Product(5, "Apple Iphone 8", "./assets/images/5.jpg", 64000, "Mobile"));
        this.Products.push( new Product(6, "Dell Laptop", "./assets/images/6.jpg", 52000, "Laptop"));
        this.Products.push( new Product(7, "Canon DSLR", "./assets/images/7.jpg", 65000,  "Camera"));
        this.Products.push( new Product(8, "HP Printer", "./assets/images/8.jpg", 4000,  "Printer"));
        this.Products.push(new Product(9, "Apple iPad", "./assets/images/9.jpg", 24900,"Tab"));
   }

   getProducts() {
     return this.Products;
   }

   delete(index:number){
    console.log("deleted " + this.Products[index].name);
    this.Products.splice(index, 1);
  }

  update(index:number, newprice:number) {
    console.log("update " + this.Products[index].name);
    this.Products[index].price = newprice;
  }
}
