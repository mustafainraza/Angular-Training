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
import { CustomerModule } from '../module/customer/customer.module';
import { PageNotAvailableComponent } from '../not-found/page-not-available/page-not-available.component';
import { customerGuard } from '../guards/customer.guard';
import { SignInComponent } from '../components/sign-in/signin/signin.component';

//routes specification
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'customers',
    component:CustomersComponent,canActivate: [customerGuard],
    children: [
      { path: '', redirectTo: 'list-view', pathMatch: 'full' },
      { path: 'card-view', component: CardViewCustomerComponent},
      { path: 'list-view', component: ListViewCustomerComponent },
      { path: 'create', component: CreateCustomerComponent },
      { path: 'map-view', component: MapViewCustomerComponent },
    ]

  },
  {//loadChildren function is use for lazy loading
    path: 'customer', 
    component: CustomerComponent ,canActivate: [customerGuard],
    children: [
      { path: 'orderdetails/:id', loadChildren: () => import('../module/customer/order/order.module').then(m => m.OrderModule),pathMatch:'full' },
      { path: 'detail/:id', loadChildren: () => import('../module/customer/details/details.module').then(m => m.DetailsModule),pathMatch:'full' },
      { path: 'editcustomer/:id', loadChildren: () => import('../module/customer/editcustomer/editcustomer.module').then(m => m.EditcustomerModule),pathMatch:'full' },
    ]


  },
  { path: 'orders', component: OrdersComponent,canActivate: [customerGuard] },
  { path: 'about', component: AboutComponent ,canActivate: [customerGuard] },
  { path: 'login', component: SignInComponent  },
  {path:'**',component:PageNotAvailableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
