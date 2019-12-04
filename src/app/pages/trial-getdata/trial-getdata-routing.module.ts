import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrialGetdataPage } from './trial-getdata.page';

const routes: Routes = [
  {
    path: '',
    component: TrialGetdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrialGetdataPageRoutingModule {}
