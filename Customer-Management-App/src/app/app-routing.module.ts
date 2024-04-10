import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from '../module/Orders/Orders.component';
import { AboutComponent } from '../module/About/About.component';
import { LoginComponent } from '../module/Login/Login.component';
import { CustomersComponent } from '../module/Customers/Customers.component';
import { CardViewCustomerComponent } from '../module/Customers/CardViewCustomer/CardViewCustomer.component';
import { CreateCustomerComponent } from '../module/Customers/CreateCustomer/CreateCustomer.component';
import { MapViewCustomerComponent } from '../module/Customers/MapViewCustomer/MapViewCustomer.component';
import { ListViewCustomerComponent } from '../module/Customers/ListViewCustomer/ListViewCustomer.component';
import { CustomerdetailViewComponent } from '../module/customer/details/customerdetail-view/customerdetail-view.component';
import { CustomerComponent } from '../module/customer/customer.component';
import { CustomerOrderComponent } from '../module/customer/order/customer-order/customer-order.component';
import { CustomerEditComponent } from '../module/customer/editcustomer/customer-edit/customer-edit.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  {
    path: 'customers',
    component:CustomersComponent,
    children: [
      { path: '', redirectTo: 'list-view', pathMatch: 'full' },
      { path: 'card-view', component: CardViewCustomerComponent},
      { path: 'list-view', component: ListViewCustomerComponent },
      { path: 'create', component: CreateCustomerComponent },
      { path: 'map-view', component: MapViewCustomerComponent },
    ]

  },
  {
    path: 'customer/:id',
    component:CustomerComponent,
    children: [
      { path: 'customer/:id', redirectTo: 'list-view', pathMatch: 'prefix' },
      { path: 'detail/:id', component: CustomerdetailViewComponent },
      { path: 'orderdetails/:id', component: CustomerOrderComponent},
      { path: 'editcustomer/:id', component: CustomerEditComponent },
     
    ]

  },
  { path: 'orders', component: OrdersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
