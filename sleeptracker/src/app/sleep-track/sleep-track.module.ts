import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepTrackPageRoutingModule } from './sleep-track-routing.module';

import { SleepTrackPage } from './sleep-track.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepTrackPageRoutingModule
  ],
  declarations: [SleepTrackPage]
})
export class SleepTrackPageModule {}
