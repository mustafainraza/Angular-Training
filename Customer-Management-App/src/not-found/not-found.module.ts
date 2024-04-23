import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotAvailableComponent } from './page-not-available/page-not-available.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageNotAvailableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NotFoundModule { }
