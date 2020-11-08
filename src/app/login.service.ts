import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class LoginService {
    
    usernamesubject : Subject<string> = new Subject<string>();

    username:string;
    constructor() { }

    setName(name:string) {
        console.log("name is set and published: " + name);
        this.username = name;

        this.usernamesubject.next(this.username);
    }

    getName() {
        console.log("returning name" + this.username);
        return this.username;
    }

}