import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  FirstPart:boolean=true;
  alertErrShow:boolean=false;
  alertMsg:string='';
  SecondPart:boolean=false;
  AllCities:any[]=[];
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {

    this.authService.getAllCities().subscribe(data=>{
      this.AllCities=data

    })
  
  }
  FirstRegisterForm = new FormGroup({
  clientID: new FormControl('', Validators.required),
  username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required),
   
  });
  SecondRegisterForm= new FormGroup({
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    });
  FirstFormFunc(){
    this.alertErrShow=false
   if(this.FirstRegisterForm.value.password!=this.FirstRegisterForm.value.passwordConfirm){

    this.alertMsg=" the passwords are not the same"
this.alertErrShow=true 
}
else{
  debugger
  this.authService.checkClientID(this.FirstRegisterForm.value).subscribe(data=>{
if(data.msg=="ID Used"){
  this.alertErrShow=true
  this.alertMsg="this ID is used"
}
else if(data.msg=="user Name Used"){
  this.alertErrShow=true
this.alertMsg="this User Name is used"
}
else if(data.msg=="OK"){
  this.FirstPart=false;
  debugger;
  this.SecondPart=true
  }
  })
 
  }
  debugger;
}

SecondFormFunc(){
  this.alertErrShow=false
let returnedTarget = Object.assign(this.FirstRegisterForm.value,this.SecondRegisterForm.value);
debugger;
this.authService.doRegister(returnedTarget).subscribe(data=>{
  debugger;
if(data.msg=="OK"){
 this.router.navigate(["/main"])
}
else{
  this.alertErrShow=true
  this.alertMsg=" Something went wrong, please try again later"
}
})
}
PreviousForm()
{
  this.FirstPart=true;
  debugger;
  this.SecondPart=false
}
}
