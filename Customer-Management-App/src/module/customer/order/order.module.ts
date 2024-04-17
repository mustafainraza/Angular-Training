import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CustomerOrderComponent
  }
];

@NgModule({
  declarations: [
    CustomerOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class OrderModule { }
