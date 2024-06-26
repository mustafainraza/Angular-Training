import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../core/services/customer.service'
import { Customer } from '../../../models/customer.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ListViewCustomer',
  templateUrl: './ListViewCustomer.component.html',
  styleUrls: ['./ListViewCustomer.component.css'],  
})
export class ListViewCustomerComponent implements OnInit {

  customers:Customer[] = [];

  constructor(private customerService:CustomerService,private router: Router) { }

  ngOnInit() {
    this.customers = this.customerService.customers;
  }

  viewCustomerDetail(customerId:Number):void{
    this.router.navigate(['/customer/detail',customerId])
  }

  viewCustomerOrder(event: MouseEvent,customerId:Number):void{
    event.stopPropagation();
    this.router.navigate(['/customer/orderdetails',customerId])
  }

}
