import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../UserDetails.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username:string;
  name:string;
  email:string;
  password:string;
  gender:string;
  code:string;
  constructor(private userservice: UserDetailsService) { }

  submit() {
    console.log(`values: \nUsername: ${this.username} \nName: ${this.name} \nEmail:${this.email} \nPassword: ${this.password} \nGender: ${this.gender} \nCode: ${this.code}`);
    this.userservice.postUsers(this.username, this.name, this.email).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log("Error posting");
      },
      ()=>{
        console.log("Post completed");
      }
    )
  }

  ngOnInit(): void {
  }

}
