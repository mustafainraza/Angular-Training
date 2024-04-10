import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomerEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EditcustomerModule { }
