import { Component, OnInit ,Input} from '@angular/core';
import { ShippingService } from 'src/app/services/shipping.service';
import {NgbdModalStacked} from '../modal/modal-config'; 
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html', 
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
currentCart:any;
  constructor(private shippingService:ShippingService,private router: Router) {
    console.log(this.router.getCurrentNavigation().extras.state); // should log out 'bar'
    this.currentCart=this.router.getCurrentNavigation().extras.state;
debugger;
   }
  @Input() drawer:any;
  allCategories:any[]=[];
  allProducts:any[]=[];
  
  ngOnInit() {
   debugger
    this.shippingService.CartStateEventEmitter.subscribe(cart=>{
      debugger
console.log(cart)

    })


    this.shippingService.getAllCategories().subscribe(data=>{
    
      this.allCategories=data;
    
      })

  }
  getCategoryProduct(event){
    debugger
    this.shippingService.getCategoryProductsByID({id:event.currentTarget.id}).subscribe(data=>{
   
      this.allProducts=data

    })
    
  }
}



