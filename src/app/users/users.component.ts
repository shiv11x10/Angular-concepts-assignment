import { ConditionalExpr } from '@angular/compiler';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserDetailsService } from '../UserDetails.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isAdmin = true;
  Users:User[] = []
  constructor(private userservice: UserDetailsService) {
    // this.Users.push(new User(1, 'Shivam', 'shivam96.sa@gmail.com', '../assets/images/1.jpg'));
    // this.Users.push(new User(2, 'xyz', 'xyz@xyz.com', '../assets/images/2.jpg'));
    // this.Users.push(new User(3, 'abc', 'abc@abc.com', '../assets/images/3.jpg'));
    // this.Users.push(new User(4, 'abz', 'abc@xyz.com', '../assets/images/4.jpg'));
   }

  ngOnInit() {
    console.log("ngOnInIt is called.....");

    this.userservice.getUsers().subscribe(
      res=>{
        res.map((value)=>{this.Users.push(new User(value.id, value.name, value.email, value.username))})
      }
    )
  }

  delete(index:number) {
    console.log("Deleting...")
    this.userservice.deleteUser(index).subscribe();
  }

  doSearch(criteria:string) {
    var searchedProduct = []; //add products whose name starts with criteria
    for(let obj of this.Users) {
      if(obj.name.toLowerCase().startsWith(criteria.toLowerCase()))
        searchedProduct.push(obj.name);
    }
    
    alert(searchedProduct);
    // alert(criteria);
    // alert("Lost focus");
  }

}
