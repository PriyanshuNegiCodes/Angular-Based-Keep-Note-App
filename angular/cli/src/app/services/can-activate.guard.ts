import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationnService } from '../authenticationn.service';


@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor (private service:AuthenticationnService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.service.getLogggingStatus();
  }
  
}
