import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message:string="";

  username : string ="";
  password : string ="";
  show: boolean= false;
  hide:boolean=false;

  submit(){
  console.log("user name is " + this.username)
  this.message="login-success";
  this.clear();
  }

  LogOut(){
    // this.service.loggedOut();
    this.show=false;
    this.hide=true
    this.message="Logout Success"
  }

  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
}
}
