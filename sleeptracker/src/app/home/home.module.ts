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
    component: HomePage
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
