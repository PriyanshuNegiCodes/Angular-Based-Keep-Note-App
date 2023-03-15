
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class CustomValidator{
    
    static passwordMatchValidator(group: FormGroup) {
        const password = group.get('Password')?.value;
        const confirmPassword = group.get('CPassword')?.value;
      
        if (password !== confirmPassword) {
          return { PasswordError: true };
        }
        
        return null;
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
    static zipCheck(zipCk: FormControl) {
        let zipVal: any = zipCk.value;
       
        if (zipVal === '5' || zipVal.length==5) {
          return null;
        } else {
          return { zipError: true };
        }
      }     
}
