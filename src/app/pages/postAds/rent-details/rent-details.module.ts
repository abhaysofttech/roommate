import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentDetailsPageRoutingModule } from './rent-details-routing.module';

import { RentDetailsPage } from './rent-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RentDetailsPageRoutingModule
  ],
  declarations: [RentDetailsPage]
})
export class RentDetailsPageModule {}
