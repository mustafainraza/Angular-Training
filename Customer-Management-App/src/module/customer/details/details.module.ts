import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerdetailViewComponent } from './customerdetail-view/customerdetail-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CustomerdetailViewComponent
  }
];

@NgModule({
  declarations: [
    CustomerdetailViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class DetailsModule { }
