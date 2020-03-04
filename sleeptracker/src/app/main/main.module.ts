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
          path: 'start',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../start/start.module').then( m => m.StartPageModule)
              }
            ]
        },
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
          path: 'sleep-data',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../sleep-data/sleep-data.module').then( m => m.SleepDataPageModule)
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
        }        
      ]
  },
  {
    path: '',
    redirectTo: 'main/start',
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
