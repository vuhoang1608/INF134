import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageViewPageRoutingModule } from './message-view-routing.module';

import { MessageViewPage } from './message-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageViewPageRoutingModule
  ],
  declarations: [MessageViewPage]
})
export class MessageViewPageModule {}
