import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageViewPage } from './message-view.page';

const routes: Routes = [
  {
    path: '',
    component: MessageViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageViewPageRoutingModule {}
