import { AbstractControl, FormControl } from "@angular/forms";

export class CustomValidator{
    
    static PasswordCheck(pwd:AbstractControl){
        if(pwd.get('Password')?.value === pwd.get('CPassword')?.value){
            
            return null;
        }else{
           
            return {PasswordError:true}
        }
    }
    static ageCheck(age:FormControl){
        if(age.value>18){
            return null;
        }else{
            return {AgeCheck:true}
        }
    }
}
