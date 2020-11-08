import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipe',
    template: `
    Name: {{ProductName | lowercase}} <br/>
    Name: {{ProductName | uppercase}} <br/>
    Name: {{ProductDate | date}} <br/>
    Name: {{ProductDate | date:'short'}} <br/>
    Name: {{ProductDate | date:'MMM/dd/yyy'}} <br/>
    Name: {{ProductPrice | currency}} <br/>
    Name: {{ProductPrice | currency : 'INR'}} <br/>
    Name: {{ProductName | reverse}} <br/> <!--Custom pipe is used in reverse.pipe.ts-->
    `
})
export class PipeComponent implements OnInit {

    ProductName:string = "Samsung";
    ProductDate:Date = new Date();
    ProductPrice:number = 100;
    constructor() { }

    ngOnInit() { 

    }

}