import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { MainComponent } from './comps/main/main.component';
import { CanleaveGuard } from './guards/canleave.guard';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './comps/register/register.component';
import { CategoryComponent } from './comps/category/category.component';


const routes: Routes = [

  { path:"" , component:LoginComponent , pathMatch:"full"} ,
  { path:"register" , component:RegisterComponent } ,
  { path:"main" , component:MainComponent, canActivate:[AuthGuard ] ,
   canDeactivate:[CanleaveGuard] }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
