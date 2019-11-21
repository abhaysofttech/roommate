import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmenitiesDetailsPageRoutingModule } from './amenities-details-routing.module';

import { AmenitiesDetailsPage } from './amenities-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmenitiesDetailsPageRoutingModule
  ],
  declarations: [AmenitiesDetailsPage]
})
export class AmenitiesDetailsPageModule {}
