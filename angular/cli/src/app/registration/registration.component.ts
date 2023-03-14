import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomValidator } from '../CustomValidations';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor( private fb:FormBuilder){ }

  register=this.fb.group({
    FirstName: ['', [Validators.required]] ,
    LastName:['', [Validators.required]] ,
    Password: ['', [Validators.required]],
    CPassword: ['', [Validators.required]],
    Age :['', [Validators.required, CustomValidator.ageCheck]],
    contact: ['', [Validators.required, CustomValidator.contactCheck]],
    street: ['', [Validators.required]],
    city: ['',[Validators.required]], 
    state: ['',[Validators.required]], 
    zip: ['',[Validators.required], CustomValidator.zipCheck]
  }, {validators:[CustomValidator.PasswordCheck]})
  get getFirstName(){
    return this.register.get('FirstName');
  }
  
  get getLastName(){
    return this.register.get('FirstName');
  }

  get getPassword(){
    return this.register.get('Password');
  }
  get getCPassword(){
    return this.register.get('CPassword');
  }
  
  get getAge(){
    return this.register.get('Age')
  }

  get getContact(){
    return this.register.get('contact')
  }

  get getStreet(){
    return this.register.get('street');
  }
  get getCity(){
    return this.register.get('city');
  }

  get getState(){
    return this.register.get('state');
  }
  get getZip(){
    return this.register.get('zip');
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  
}
