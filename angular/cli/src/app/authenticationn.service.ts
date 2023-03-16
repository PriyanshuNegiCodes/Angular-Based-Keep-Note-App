import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationnService {

  constructor() { }
  loggingStatus=false;
  loggedIn(){
    this.loggingStatus=true;
  }
  loggedOut(){
    this.loggingStatus=false;
  }
  getLogggingStatus(){
    return this.loggingStatus
   }

}
