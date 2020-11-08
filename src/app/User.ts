export class User {
    userId:number;
    name:string;
    email:string;
    username:string;

    constructor(id:number, name:string, email:string, username:string) {
        this.name = name;
        this.userId = id;
        this.email = email;
        this.username = username;
        
    }
}