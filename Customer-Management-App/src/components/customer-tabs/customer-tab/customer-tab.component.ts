import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../core/services/customer.service';

@Component({
  selector: 'app-customer-tab',
  templateUrl: './customer-tab.component.html',
  styleUrl: './customer-tab.component.css'
})
export class CustomerTabComponent implements OnInit {

  id:number=1;
  customer:any
  constructor(private route: ActivatedRoute,private customerService:CustomerService,private router:Router) { }

  ngOnInit() {
    this.customerService.currentCustomerId.subscribe(id => this.id = id);
    console.log("main id",this.id)
    //this.router.navigate(['/customer',this.id,'detail',this.id]);
  }
}