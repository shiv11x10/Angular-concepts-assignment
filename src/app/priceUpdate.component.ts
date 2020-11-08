//This component updates the price value in inventory
//Creation of a separate component ensures high cohesion rather than mixing up with functionality in the InventoryComponent. 


import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductDataService } from './product-data.service';

@Component({
    selector: 'app-priceupdate',
    template: `
        <input type="text" name="pricevalue" [(ngModel)]="pricevalue"/>
        <button class="btn btn-info" (click)="updatePrice()">Update</button>
    `
})
export class PriceUpdateComponent implements OnInit {

    @Input()
    pricevalue:number;

    // @Input()
    // index:number;
    
    @Output()
    update:EventEmitter<number> = new EventEmitter<number>();


    constructor(private productservice: ProductDataService) {
     }

     //we can directly send the updated price to product service but instead we will use @output here to send it back to inventory
    //  update() {
    //      console.log("update price to: " + this.pricevalue);
    //     this.productservice.update(this.index, this.pricevalue);
    //  }

    updatePrice() {
        console.log("sending updated price to Inventory with output decorator: " + this.pricevalue);
        this.update.emit(this.pricevalue);
    }

    ngOnInit() { 

    }

}