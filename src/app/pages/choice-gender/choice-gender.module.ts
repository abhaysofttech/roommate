import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoiceGenderPageRoutingModule } from './choice-gender-routing.module';

import { ChoiceGenderPage } from './choice-gender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoiceGenderPageRoutingModule
  ],
  declarations: [ChoiceGenderPage]
})
export class ChoiceGenderPageModule {}
