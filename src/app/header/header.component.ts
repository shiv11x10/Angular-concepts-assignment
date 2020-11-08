import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string;
  
  constructor(private loginservice: LoginService) {
    console.log("header is called");
    // this.username = loginservice.getName()
  }

  ngOnInit(): void {
    console.log("Subscribing to username subject");

    this.loginservice.usernamesubject.subscribe(
      res=>{
        console.log("user name is changed");
        this.username = res;
      }
    )
  }

}
