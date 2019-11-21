import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepDataPage } from './sleep-data.page';

const routes: Routes = [
  {
    path: '',
    component: SleepDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepDataPageRoutingModule {}
