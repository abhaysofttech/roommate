import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from '../_service/age.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrderByPipe } from '../_service/order-by.pipe';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
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
    LoadingSpinnerComponent,
    AgePipe,
    OrderByPipe
  ]
})
export class SharedModule { }
