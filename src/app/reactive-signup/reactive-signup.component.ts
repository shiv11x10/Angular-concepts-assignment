//Reactive Form and validations

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDetailsService } from '../UserDetails.service';
import { code } from './reactiveCode.validator';

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.component.html',
  styleUrls: ['./reactive-signup.component.css']
})
export class ReactiveSignupComponent implements OnInit {
  signupform: FormGroup

  constructor(private userservice: UserDetailsService) { 
    this.signupform = new FormGroup({
      username: new FormControl('', Validators.required),
      name:new FormControl('', Validators.required),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('', [Validators.required, Validators.minLength(6)]),
      gender:new FormControl('', Validators.required),
      //code:new FormControl('', [Validators.required, code]), //without paramter passing
      code:new FormControl('', [Validators.required, code('CODE368', 'CODE284')])  //with parameter passing
    })
  }

  submit() {
    console.log(`values: 
      Username: ${this.signupform.value.username} 
      Name: ${this.signupform.value.name} 
      Email:${this.signupform.value.email} 
      Password: ${this.signupform.value.password} 
      Gender: ${this.signupform.value.gender} 
      Code: ${this.signupform.value.code}`
    )
  }

  ngOnInit(): void {
  }

  //getter methods are used as shorthand for the template. This makes use of handling erros similar to template-driven form
  get user() {
    return this.signupform.get('username');
  }

  get uname() {
    return this.signupform.get('name');
  }

  get uemail() {
    return this.signupform.get('email');
  }

  get upassword() {
    return this.signupform.get('password');
  }

  get ugender() {
    return this.signupform.get('gender');
  }

  get ucode() {
    return this.signupform.get('code');
  }

}
