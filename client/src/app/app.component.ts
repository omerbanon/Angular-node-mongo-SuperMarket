import { Component, Input } from '@angular/core';
import { ShippingService } from './services/shipping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  AllCartProducts:any;
  constructor(private shippingService:ShippingService) {}

  title = 'client';
  @Input() hasBackdrop:any=false;
@Input() mode:'push';
@Input() drawer:any;
showFiller = false;

ngOnInit() {
  debugger
   this.shippingService.CartStateEventEmitter.subscribe(cart=>{
   if(cart.cartProducts){
     this.AllCartProducts=cart.cartProducts
debugger
   }
console.log(cart)

   })

  }


}
