import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypostPageRoutingModule } from './mypost-routing.module';

import { MypostPage } from './mypost.page';
import { OrderByPipe } from 'src/app/_service/order-by.pipe';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MypostPageRoutingModule
  ],
  declarations: [MypostPage]
})
export class MypostPageModule {}
