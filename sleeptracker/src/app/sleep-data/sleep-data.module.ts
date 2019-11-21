import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepDataPageRoutingModule } from './sleep-data-routing.module';

import { SleepDataPage } from './sleep-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepDataPageRoutingModule
  ],
  declarations: [SleepDataPage]
})
export class SleepDataPageModule {}
