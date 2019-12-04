import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';
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
          redirectTo: '/main/sleep-track',
          pathMatch: 'full'
        }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MainPage]
})
 
export class MainPageModule implements OnInit {
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
