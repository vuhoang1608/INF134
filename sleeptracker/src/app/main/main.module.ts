import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'main',
    component: MainPage,
    children:
      [
        {
          path: 'sleep-track',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../sleep-track/sleep-track.module').then( m => m.SleepTrackPageModule)
              }
            ]
        },
        {
          path: 'sleep-log',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../sleep-log/sleep-log.module').then( m => m.SleepLogPageModule)
              }
            ]
        },
        {
          path: 'sleep-data',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../sleep-data/sleep-data.module').then( m => m.SleepDataPageModule)
              }
            ]
        }
      ]
  },
  {
    path: '',
    redirectTo: 'main/sleep-track',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage]
})
export class MainPageModule { }
