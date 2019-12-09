import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdsDetailsPageRoutingModule } from './ads-details-routing.module';

import { AdsDetailsPage } from './ads-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdsDetailsPageRoutingModule
  ],
  declarations: [AdsDetailsPage]
})
export class AdsDetailsPageModule {}
