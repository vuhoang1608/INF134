import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { NavController } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

@Component({
	selector: 'app-main',
	templateUrl: './main.page.html',
	styleUrls: ['./main.page.scss'],
})

export class MainPage implements OnInit {
  btnName:string = "Click me";
 

  constructor(public sleepService: SleepService, public navCtrl: NavController) {
	  
  }

  goToPage() 
  {
    this.navCtrl.navigateForward('/sleep-track');
    this.btnName = "Change Text";
    console.log("button click");
  }
	ngOnInit() {
		this.btnName = "Click me";		
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;		
	}

	get allSleepinessData(){
		return SleepService.AllSleepinessData;
	}
}
