import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationSelect } from './location-select.page';

const routes: Routes = [
  {
    path: '',
    component: LocationSelect
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationSelectPageRoutingModule {}
