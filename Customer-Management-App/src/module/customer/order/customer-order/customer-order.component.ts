import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../../core/services/customer.service';
import { Item } from '../../../../models/customer.interface';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrl: './customer-order.component.css'
})
export class CustomerOrderComponent implements OnInit {

  id:any=1;
  customer:any
  constructor(private route: ActivatedRoute,private customerService:CustomerService) { }

  items: Item[]= [
    { id: 1, itemName: 'Basketball', price: 7.99 },
    { id: 2, itemName: 'Shoes', price: 199.99 },
  ];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.customer= this.customerService.findbyId(this.id);
    console.log("cust",this.id)
  }
}