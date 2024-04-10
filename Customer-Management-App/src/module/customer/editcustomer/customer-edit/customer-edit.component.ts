import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../../core/services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { style } from '@angular/animations';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.css'
})
export class CustomerEditComponent implements OnInit {
  customerId: any;
  customer:any;

  constructor(private route: ActivatedRoute,private customerService:CustomerService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
        this.customerId=this.route.snapshot.paramMap.get('id')
        this.customer= this.customerService.findbyId(this.customerId);
        // Initialize customer data (e.g., fetch from service)
        
      }
    
      saveChanges(): void {
        this.router.navigate(['/customer',this.customerId,'detail',this.customerId]);
      }
    
}

