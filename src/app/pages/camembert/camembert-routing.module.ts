import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamembertPage } from './camembert.page';

const routes: Routes = [
  {
    path: '',
    component: CamembertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamembertPageRoutingModule {}
