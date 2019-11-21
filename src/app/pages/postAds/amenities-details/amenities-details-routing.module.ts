import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmenitiesDetailsPage } from './amenities-details.page';

const routes: Routes = [
  {
    path: '',
    component: AmenitiesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmenitiesDetailsPageRoutingModule {}
