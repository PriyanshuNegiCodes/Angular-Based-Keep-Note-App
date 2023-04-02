import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';
import { EditnoteComponent } from './editnote/editnote.component';
import { LoginComponent } from './login/login.component';
import { NoteComponent } from './note/note.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { CanActivateGuard } from './services/can-activate.guard';
import { CanDeactivatedTeam } from './services/can-deactivated.service';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent, canActivate:[CanActivateGuard]},

  {path: 'add', component:AddComponent, canActivate:[CanActivateGuard]},
  {path: 'Registration', component:RegistrationComponent},
  {path: 'editnote/:id', component:EditnoteComponent, canDeactivate:[CanDeactivatedTeam]},
  {path: 'delete/:id', component:DeleteComponent},
  {path: 'login', component:LoginComponent},
  {path: 'search/:searchNote', component:SearchComponent, canActivate:[CanActivateGuard]},

  {path: '**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
