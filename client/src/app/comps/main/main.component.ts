import { Component, OnInit ,Input} from '@angular/core';
import { ShippingService } from 'src/app/services/shipping.service';
import {NgbdModalStacked} from '../modal/modal-config'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html', 
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private shippingService:ShippingService) {
    
   }
  @Input() drawer:any;
  allCategories:any[]=[];
  allProducts:any[]=[];
   msg:any={
    msg:''
  }
  ngOnInit() {
   
this.shippingService.CartEventEmitter.subscribe(data=>{
if(data.UserCarts.length==0){
  debugger
  this.msg.msg="new user"
 this.shippingService.CartStateEventEmitter.emit(this.msg)

   this.shippingService.createNewCart(data.user._id).subscribe(data=>{
     debugger
   })
}
else {
let unDoneCart= data.UserCarts.filter(c=>c.isDone==false)
debugger;
 this.msg.msg="unDone Cart"
 this.shippingService.CartStateEventEmitter.emit(this.msg)
 }
})






    this.shippingService.getAllCategories().subscribe(data=>{
    
      this.allCategories=data;
    
      })
  }
  getCategoryProduct(event){

    this.shippingService.getCategoryProductsByID({id:event.currentTarget.id}).subscribe(data=>{
    this.allProducts=data

    })
    
  }
}



