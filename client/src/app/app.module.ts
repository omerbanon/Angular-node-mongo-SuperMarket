import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './comps/login/login.component';
import { RegisterComponent } from './comps/register/register.component';
import { HeaderComponent } from './comps/header/header.component';
import { FooterComponent } from './comps/footer/footer.component';
import { MatToolbarModule,MatButtonModule , MatInputModule, MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainComponent } from './comps/main/main.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidenavComponent} from "./comps/sidenav/sidenav.component";
import { CategoryComponent } from './comps/category/category.component';
import { ProductComponent } from './comps/product/product.component';
import { CartComponent } from './comps/cart/cart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalStacked} from './comps/modal/modal-config';
import {NgbdModal1Content} from './comps/modal/modal-config'; 
@NgModule({
  declarations: [
  
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidenavComponent,
    CategoryComponent,
    ProductComponent,
    CartComponent, 
    NgbdModalStacked,
    NgbdModal1Content
  ],
   entryComponents: [NgbdModal1Content],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule ,
    MatInputModule ,
    MatCardModule ,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
