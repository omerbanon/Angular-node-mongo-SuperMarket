import {Component,Input, OnInit} from '@angular/core';
import { ShippingService } from 'src/app/services/shipping.service';

/** @title Drawer with explicit backdrop setting */
@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.html',
  styleUrls: ['sidenav.css'],
})

export class SidenavComponent implements OnInit {
 
  constructor(private shippingService:ShippingService) { }
  allCatgories:any[]=[]
  ngOnInit() {

    this.shippingService.getAllCategories().subscribe(data=>{
    
    this.allCatgories=data;
    debugger
    })
      }
@Input() hasBackdrop:any=false;
@Input() mode:'push';
@Input() drawer:any;
showFiller = false;

}





/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */