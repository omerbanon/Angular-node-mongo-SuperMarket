import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { MainComponent } from './comps/main/main.component';
import { CanleaveGuard } from './guards/canleave.guard';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './comps/register/register.component';
import { CategoryComponent } from './comps/category/category.component';
import { StartShoppingComponent } from './comps/start-shopping/start-shopping.component';


const routes: Routes = [

  { path:"" , component:LoginComponent , pathMatch:"full"} ,
  { path:"register" , component:RegisterComponent } ,
  { path:"main" , component:MainComponent, canActivate:[AuthGuard ] },
   { path:"startshopping" , component:StartShoppingComponent, canActivate:[AuthGuard ] 
    }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
