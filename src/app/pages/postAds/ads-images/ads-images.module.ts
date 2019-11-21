import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdsImagesPageRoutingModule } from './ads-images-routing.module';

import { AdsImagesPage } from './ads-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdsImagesPageRoutingModule
  ],
  declarations: [AdsImagesPage]
})
export class AdsImagesPageModule {}
