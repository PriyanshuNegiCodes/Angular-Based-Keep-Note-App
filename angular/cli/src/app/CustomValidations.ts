
import { AbstractControl, FormControl } from "@angular/forms";

export class CustomValidator{
    
    static PasswordCheck(pwd:AbstractControl){
        if(pwd.get('Password')?.value !== pwd.get('CPassword')?.value){
            
            return {PasswordError:true};
        }else{
           
            return null;
        }
    }
    static ageCheck(age:FormControl){
        if(age.value>18){
            return null;
        }else{
            return {AgeCheck:true}
        }
    }
    static contactCheck(age:FormControl){
        let contact:any=age.value;
        if(contact.length==10 && (contact.startsWith(7)||contact.startsWith(8)||contact.startsWith(9))){
            return null;
        }else{
            return {contactError:true}
        }
    }
}
