import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentDetailsPageRoutingModule } from './rent-details-routing.module';

import { RentDetailsPage } from './rent-details.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RentDetailsPageRoutingModule
  ],
  providers: [
    Geolocation,
NativeGeocoder,
  ],
  declarations: [RentDetailsPage]
})
export class RentDetailsPageModule {}
