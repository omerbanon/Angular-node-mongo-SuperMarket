import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
bodyClass:string=""
Amount:number;
  constructor() { }
@Input() Product
  ngOnInit() {
 

  }
  addToCart(event){
    debugger
    if( this.bodyClass=="expanded"){
      this.bodyClass=""
    }
    else
    {
   let price=parseInt(this.Product.price)
    let obj={
      productID: this.Product._id,
      cartID:"",
     amount: this.Amount,
     totalPrice:this.Amount*price
  }
  debugger;
    this.bodyClass="expanded"
  }
  }
  handleChange(){
    debugger;
  }

}
