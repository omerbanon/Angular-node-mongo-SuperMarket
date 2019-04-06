import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: '[cart-tr]',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})

export class CartProductComponent implements OnInit {

  constructor() { }
  @Input()CartProduct
  amount:string="1"
  ngOnInit() {
    
  }

}
