import { Component, OnInit } from '@angular/core';
import { ShippingService } from 'src/app/services/shipping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-shopping',
  templateUrl: './start-shopping.component.html',
  styleUrls: ['./start-shopping.component.css']
})
export class StartShoppingComponent implements OnInit {

  constructor(private shippingService: ShippingService, private router: Router) {

  }
  msg: string;
  user: any;
  StartButton: string;
  userName: string;
  unDoneBtn: boolean = false;
  latestCart: any;
  latestCartProducts: any;
  unDoneCarts: any
  ngOnInit() {

    this.shippingService.CartEventEmitter.subscribe(data => {
      this.userName = data.user.name
      this.user = data.user
      if (data.UserCarts.length == 0) {

        this.StartButton = "My first cart"
        this.msg = ` Hi thank you for choosing us
        To start shopping click the 'My first cart' button`



        this.shippingService.CartStateEventEmitter.emit(this.msg)


      }
      else {
        let unDoneCarts = data.UserCarts.filter(c => c.isDone == false)
        debugger
        this.shippingService.getLatestCart(this.user._id).subscribe(latestCartObj => {
          debugger
          this.latestCart = latestCartObj.LatestCart
          this.latestCartProducts = latestCartObj.products
        });
        if (unDoneCarts.length == 0) {

          this.StartButton = "Start new Cart"

          this.msg = ` Hey thanks for coming back to us,
      This is your old cart,
      To start a new purchase click the "Start new Cart" button`

        }
        else {
          this.unDoneCarts = unDoneCarts
          this.StartButton = "Start new Cart"
          this.unDoneBtn = true
          this.msg = ` Please note that you have a cart that you have not completed. 
      If you wish to continue shopping, click the "Continue Cart" button or 
      if you want to start a new cart, click the "Start new Cart" button.`

          // this.shippingService.CartStateEventEmitter.emit(this.msg)
        }

      }
    })

  }

  newCart() {
    this.shippingService.createNewCart(this.user._id).subscribe(data => {

      this.router.navigate(["/main"], { state: { cart: data } })

      this.shippingService.CartStateEventEmitter.emit(data)

    })
  }
  async continueCart() {
    let latestCartObj = {
      cartProducts: this.latestCartProducts,
      cart: this.latestCart
    };
    this.router.navigate(["/main"], { state: { cart: latestCartObj } });

    this.shippingService.CartStateEventEmitter.emit(latestCartObj)

  }

}
