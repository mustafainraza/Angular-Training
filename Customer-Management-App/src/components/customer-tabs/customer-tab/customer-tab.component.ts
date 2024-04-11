import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../core/services/customer.service';

@Component({
  selector: 'app-customer-tab',
  templateUrl: './customer-tab.component.html',
  styleUrl: './customer-tab.component.css'
})
export class CustomerTabComponent implements OnInit {

  id:any=1;
  customer:any
  constructor(private route: ActivatedRoute,private customerService:CustomerService,private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id')
    console.log("main id",this.id)
    //this.router.navigate(['/customer',this.id,'detail',this.id]);
  }
}