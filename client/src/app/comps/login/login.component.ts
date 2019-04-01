import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ShippingService } from 'src/app/services/shipping.service';
import { async } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router,private shippingService:ShippingService) { }

  ngOnInit() {
  }
  loginForm = new FormGroup({
    
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  login  () {
   
    this.authService.dologin(this.loginForm.value).subscribe(async data=>{
      await  this.router.navigate(["/main"])
    await  this.shippingService.getUserCart(data.user._id).subscribe(async UserCart=>{
      let obj={
        UserCarts:UserCart,
        user:data.user
      }
      await  this.shippingService.CartEventEmitter.emit(obj)
        debugger
        
      })
     
     
     
    })
  }
}
