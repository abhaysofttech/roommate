import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdsImagesPage } from './ads-images.page';

const routes: Routes = [
  {
    path: '',
    component: AdsImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsImagesPageRoutingModule {}
