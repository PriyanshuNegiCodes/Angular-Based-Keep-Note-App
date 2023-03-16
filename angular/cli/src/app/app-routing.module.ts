import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';
import { EditnoteComponent } from './editnote/editnote.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path: 'add', component:AddComponent},
  {path: 'Registration', component:RegistrationComponent},
  {path: 'editnote', component:EditnoteComponent},
  {path: 'editnote/:id', component:EditnoteComponent},
  {path: 'delete/:id', component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
