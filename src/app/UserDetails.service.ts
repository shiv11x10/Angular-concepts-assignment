import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserDetailsService {

    constructor(private http:HttpClient) { }

    getUsers():Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    postUsers(username:string, name:string, email:string):Observable<any> {
        return this.http.post('https://jsonplaceholder.typicode.com/users', {
            'username': username,
            'name' : name,
            'email' : email 
        })
    }

    deleteUser(index:number):Observable<any> {
        return this.http.delete('https://jsonplaceholder.typicode.com/users/'+index);
    }
}