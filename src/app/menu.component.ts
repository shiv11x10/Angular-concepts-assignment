import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="navbar-header">
            <a class="navbar-brand" routerLink="">
                Ecommerce
            </a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav">
            <li *ngFor="let item of menus" class="nav-item">
                <a class="nav-link" routerLink="{{item | lowercase}}">{{item}}</a>
            </li>
            </ul>
        </div>

        <app-header></app-header>
    </nav>
    `
})
export class MenuComponent implements OnInit {
//structural directives: they are responsible for HTML layout - ngFor, ngIf

    menus = []
    constructor() {
        this.menus = ["Home", 'Cart', 'Inventory','Login', 'Signup', 'Reactive Signup', 'Customers', 'Pipe'];
     }

    ngOnInit() { 

    }

}