import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypostDetailsPageRoutingModule } from './mypost-details-routing.module';

import { MypostDetailsPage } from './mypost-details.page';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MypostDetailsPageRoutingModule
  ],
  declarations: [MypostDetailsPage]
})
export class MypostDetailsPageModule {}
