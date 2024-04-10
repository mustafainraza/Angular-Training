import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './Customers.component';
import { CustomerTabsComponent } from '../../components/CustomersTabs/CustomerTabs.component';
import { CardViewCustomerComponent } from './CardViewCustomer/CardViewCustomer.component';
import { CreateCustomerComponent } from './CreateCustomer/CreateCustomer.component';
import { RouterModule } from '@angular/router';
import { ListViewCustomerComponent } from './ListViewCustomer/ListViewCustomer.component';
import { CustomerRowHoverDirective } from '../../core/directive/customerRowHover.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CustomersComponent,
    CustomerTabsComponent,
    CardViewCustomerComponent,
    ListViewCustomerComponent,
    CreateCustomerComponent,
    CustomerRowHoverDirective
  ]
})
export class CustomersModule { }
