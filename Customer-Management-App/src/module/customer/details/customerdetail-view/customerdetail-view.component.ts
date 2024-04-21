import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../../core/services/customer.service';

@Component({
  selector: 'app-customerdetail-view',
  templateUrl: './customerdetail-view.component.html',
  styleUrl: './customerdetail-view.component.css'
})
export class CustomerdetailViewComponent implements OnInit {
  customerId: any;
  customer:any;

  constructor(private route: ActivatedRoute,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerId = +params['id'];
      this.customerService.changeCustomerId(this.customerId);
    });
    this.customer= this.customerService.findbyId(this.customerId);
    console.log("customer detail id",this.customerId)
  }


}