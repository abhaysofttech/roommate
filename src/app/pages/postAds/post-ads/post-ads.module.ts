import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostAdsPageRoutingModule } from './post-ads-routing.module';

import { PostAdsPage } from './post-ads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostAdsPageRoutingModule
  ],
  declarations: [PostAdsPage]
})
export class PostAdsPageModule {}
