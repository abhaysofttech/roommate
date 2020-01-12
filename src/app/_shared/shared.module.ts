import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from '../_service/age.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrderByPipe } from '../_service/order-by.pipe';

@NgModule({
  declarations: [
   AgePipe,
   OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // IonicSelectableModule,
    RouterModule,
    // NgbModule,
  ],
  exports:[
    AgePipe,
    OrderByPipe
  ]
})
export class SharedModule { }
