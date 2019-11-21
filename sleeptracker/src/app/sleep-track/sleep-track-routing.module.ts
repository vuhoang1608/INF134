import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepTrackPage } from './sleep-track.page';

const routes: Routes = [
  {
    path: '',
    component: SleepTrackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepTrackPageRoutingModule {}
