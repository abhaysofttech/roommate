import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdsDetailsPageRoutingModule } from './ads-details-routing.module';

import { AdsDetailsPage } from './ads-details.page';
import { AgePipe } from 'src/app/_service/age.pipe';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AdsDetailsPageRoutingModule,
    
  ],
  declarations: [AdsDetailsPage]
})
export class AdsDetailsPageModule {}
