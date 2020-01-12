import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressPageRoutingModule } from './address-routing.module';

import { AddressPage } from './address.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWasxIddWK4mSe7YBixfrsuAiwDhxVQEs',
      libraries: ['places']
    })
  ],
  declarations: [AddressPage]
})
export class AddressPageModule {}
