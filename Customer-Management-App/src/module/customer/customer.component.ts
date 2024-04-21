import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { CustomerService } from '../../core/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {

  customerId: any;
  customer:any;

  constructor(private route: ActivatedRoute,private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.currentCustomerId.subscribe(id => this.customerId = id);
    console.log("customer detail id11",this.customerId)
  }
}