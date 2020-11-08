//custom validator for code input - Reactive
//usage - import code function into reactive signup component

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

//Using validator with parameters
export function code(reqVal1:string, reqVal2:string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const v = control.value;
 
    if ((v != reqVal1) && (v != reqVal2)) {
        return { 'code': true, 'requiredValue1': reqVal1, 'requiredValue2': reqVal2 }
      }     
 
    return null
    }
}

/*using validator without parameters and hard coded required value
export function code(control: AbstractControl): ValidationErrors | null {
 
    const v = control.value;
 
    if ((v != 'CODE368') && (v != 'CODE284')) {
        return { 'code': true, 'requiredValue1': 'CODE368', 'requiredValue2': 'CODE284' }
      }     
 
    return null
 
}
*/