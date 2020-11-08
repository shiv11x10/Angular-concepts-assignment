import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private loginservice: LoginService, private router: Router) { 
    this.username = 'admin';
    this.password= 'admin';
  }

  change() {
    this.loginservice.setName(this.username);

    this.router.navigate(['']);
  }
  ngOnInit(): void {
  }

}
