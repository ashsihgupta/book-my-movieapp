import { Directive } from '@angular/core';
import {NG_VALIDATORS,Validator,AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appSelectvalidator]',
  providers : [{
    provide : NG_VALIDATORS,
    useExisting: SelectvalidatorDirective,
    multi :true


  }]
})
export class SelectvalidatorDirective  implements Validator{

  validate(control:AbstractControl):{[key : string]:any} | null
  {

    return control.value==="select" ? {'defaultSelected':true}:null;

  }

  constructor() { }

}