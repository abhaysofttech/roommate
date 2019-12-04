import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrialGetdataPageRoutingModule } from './trial-getdata-routing.module';

import { TrialGetdataPage } from './trial-getdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrialGetdataPageRoutingModule
  ],
  declarations: [TrialGetdataPage]
})
export class TrialGetdataPageModule {}
