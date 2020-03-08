import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartSleepingPage } from './start-sleeping.page';

const routes: Routes = [
  {
    path: '',
    component: StartSleepingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartSleepingPageRoutingModule {}
