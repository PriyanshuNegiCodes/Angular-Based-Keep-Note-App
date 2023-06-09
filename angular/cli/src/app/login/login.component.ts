import { Component } from '@angular/core';
import { AuthenticationnService } from '../authenticationn.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthenticationnService){
    
  }

  message:string="";

  username : string ="";
  password : string ="";
  show: boolean= false;
  hide:boolean=false;

  submit(){
    if(this.username=="Negi"&&this.password=="1234"){
      this.auth.loggedIn();  
      console.log("user name is " + this.username)
      
      this.message="login-success";
      this.hide=false;
      this.show=true;    
    }
 
  }

  LogOut(){
    this.auth.loggedOut();
      this.show=false;
      this.hide=true
      this.message="Logout Success"
  }

  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
  this.clear();
}
}
