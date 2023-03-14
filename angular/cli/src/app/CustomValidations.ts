import { AbstractControl } from "@angular/forms";

export class CustomValidator{
    static PasswordCheck(pwd:AbstractControl){
        if(pwd.get('Password')?.value< pwd.get('CPassword')?.value){
            return null;
        }else{
            return {PasswordError:true}
        }
    }
}
