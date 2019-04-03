import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShippingService } from 'src/app/services/shipping.service';

@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">${cartMsg}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, World!</p>
      <p><button class="btn btn-lg btn-outline-primary" (click)="open()">Launch demo modal</button></p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModal1Content {
 cartMsg:string='ddd'

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private shippingService:ShippingService) {
debugger
  }

  ngOnInit(): void {
    debugger;
   }

  open() {
    debugger;
    this.modalService.open(NgbdModal2Content, {
      size: 'lg'
    });
  }
}

@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, World!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModal2Content {
  constructor(public activeModal: NgbActiveModal) {debugger}
}

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html'
})
export class NgbdModalStacked implements OnInit  {
  @Input() CartMsg;
  constructor(private modalService: NgbModal, private shippingService:ShippingService) {
    debugger
 
     
  }
 async ngOnInit(){
    debugger
   await this.shippingService.CartStateEventEmitter.subscribe(data=>{
      cartMsg=data.msg
   
      this.open()
    })
  
  }
  open() {
 
    this.modalService.open(NgbdModal1Content);
  }
}