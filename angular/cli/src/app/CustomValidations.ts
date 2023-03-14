
import { AbstractControl, FormControl } from "@angular/forms";
import { zip } from "rxjs";

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
    static zipCheck(zipCk:FormControl){
        let zipVal:any=zipCk.value;
        if((zipVal===5 || zipVal.length==5)&& typeof(zipVal)==='number'){
            return null;
        }
        else{
            return {zipError:true}
        }
    }
}
