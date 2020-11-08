//This is used to validate code input in signup component
//This is an example of Template driven custom validator
//usage - add the codeVlidatorDirective class to declarations in module

import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms'
import { Directive, OnInit, forwardRef, Input } from '@angular/core';

@Directive({
    selector: '[codeValidator]',
    providers: [
      { provide: NG_VALIDATORS, useExisting: codeValidatorDirective, multi: true }
    ]
  })

  export class codeValidatorDirective implements Validator, OnInit {

    @Input('reqVal1') 
    reqVal1:string;

    ngOnInit() {
    }

    validate(c: AbstractControl): ValidationErrors | null {

        let v: string = c.value;
        
        if ((v != this.reqVal1) && (v != 'CODE284')) {
          return { 'code': true, 'requiredValue1': this.reqVal1, 'requiredValue2': 'CODE284' }
        }
     
        return null;
      }
  }