export class Product {
    id:number;
    name:string;
    image:string;
    price:number;
    category:string;

    constructor(id:number, name:string, image:string, price:number, category:string) {
        this.name = name;
        this.id = id;
        this.image = image;
        this.price = price;
        this.category = category;
    }
}