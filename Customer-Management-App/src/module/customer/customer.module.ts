import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';
//import {CustomerTabComponent} from '../../components/CustomerTabs/CustomerTab.component';
import { CustomerTabsComponent } from '../../components/CustomersTabs/CustomerTabs.component';
import { CustomerTabComponent } from '../../components/customer-tabs/customer-tab/customer-tab.component';
import { OrderModule } from './order/order.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OrderModule
  ],
  declarations: [
    CustomerComponent,
    CustomerTabComponent,


  ]
})
export class CustomerModule { }
