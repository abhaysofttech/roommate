import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmenitiesDetailsPageRoutingModule } from './amenities-details-routing.module';

import { AmenitiesDetailsPage } from './amenities-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AmenitiesDetailsPageRoutingModule
  ],
  declarations: [AmenitiesDetailsPage]
})
export class AmenitiesDetailsPageModule {}
