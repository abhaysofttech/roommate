import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoiceGenderPage } from './choice-gender.page';

const routes: Routes = [
  {
    path: '',
    component: ChoiceGenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoiceGenderPageRoutingModule {}
