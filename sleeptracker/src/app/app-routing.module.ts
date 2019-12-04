import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePage } from './home/home.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sleep-track',
    loadChildren: () => import('./sleep-track/sleep-track.module').then( m => m.SleepTrackPageModule)
  },  {
    path: 'sleep-log',
    loadChildren: () => import('./sleep-log/sleep-log.module').then( m => m.SleepLogPageModule)
  },
  {
    path: 'sleep-data',
    loadChildren: () => import('./sleep-data/sleep-data.module').then( m => m.SleepDataPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  }


 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
