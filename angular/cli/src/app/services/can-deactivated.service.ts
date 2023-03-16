import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditnoteComponent } from '../editnote/editnote.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivatedTeam implements CanDeactivate<EditnoteComponent> {

  canDeactivate(
    component: EditnoteComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
    ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return component.canExit();
    }   
}
