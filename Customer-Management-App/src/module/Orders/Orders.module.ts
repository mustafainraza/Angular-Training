import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './Orders.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrdersComponent]
})
export class OrdersModule implements OnInit {
  ngOnInit(): void {
  }
  
 }
