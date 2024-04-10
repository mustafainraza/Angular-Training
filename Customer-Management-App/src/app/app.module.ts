import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { OrdersModule } from '../module/Orders/Orders.module';
import { AboutModule } from '../module/About/About.module';
import { LoginModule } from '../module/Login/Login.module';
import { CustomersModule } from '../module/Customers/Customers.module';
import {CustomerModule} from '../module/customer/customer.module'
import { EditcustomerModule } from '../module/customer/editcustomer/editcustomer.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
   ],
   imports: [
   FormsModule,
	 BrowserModule,
	 AppRoutingModule,
    CustomersModule,
	 OrdersModule,
	 AboutModule,
	 LoginModule,
    CustomerModule,
    OrdersModule,
    EditcustomerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500, // Set the default visible timeout to 3000 milliseconds (3 seconds)
      positionClass: 'toast-center-bottm', // Set the default position of the Toastr messages
      preventDuplicates: true, // Prevent duplicate Toastr messages
      progressBar: true, // Enable the progress bar for auto-closing Toastr messages
      enableHtml: true // Enable HTML content in Toastr messages
      // Add more configuration options as needed
    })
    
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
