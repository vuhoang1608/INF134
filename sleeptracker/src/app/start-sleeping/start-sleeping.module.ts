import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartSleepingPageRoutingModule } from './start-sleeping-routing.module';

import { StartSleepingPage } from './start-sleeping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartSleepingPageRoutingModule
  ],
  declarations: [StartSleepingPage]
})
export class StartSleepingPageModule {}
