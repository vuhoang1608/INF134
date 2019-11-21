import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavController } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:
      [
        {
          path: 'sleep-track',
          children:
            [
              {
                path: '',
                loadChildren: '../sleep-track/sleep-track.module#SleepTrackPageModule'
              }
            ]
        },
        {
          path: 'sleep-log',
          children:
            [
              {
                path: '',
                loadChildren: '../sleep-log/sleep-log.module#SleepLogPageModule'
              }
            ]
        },
        {
          path: 'sleep-data',
          children:
            [
              {
                path: '',
                loadChildren: '../sleep-data/sleep-data.module#SleepDataPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/home/sleep-track',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo:'/home/sleep-track',
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
  declarations: [HomePage]
})
export class HomePageModule implements OnInit {
  btnName:string = "Click me";
  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.btnName = "Click me";
  }
  
  goToPage() 
  {
    this.navCtrl.navigateForward('/sleep-track');
    this.btnName = "Change Text";
    console.log("button click");
  }
}
