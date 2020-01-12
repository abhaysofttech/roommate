import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdsPageRoutingModule } from './ads-routing.module';

import { AdsPage } from './ads.page';
import { OrderByPipe } from 'src/app/_service/order-by.pipe';
import { AgePipe } from 'src/app/_service/age.pipe';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AdsPageRoutingModule
  ],
  declarations: [AdsPage]
})
export class AdsPageModule {}
