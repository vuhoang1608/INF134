import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { NavController,AlertController } from '@ionic/angular';
import { HomePageModule } from './home.module';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	constructor(public sleepService: SleepService, public navCtrl: NavController, public alertController: AlertController) {}

	ngOnInit() {
		console.log(this.allSleepData);
	}

	async presentAlertConfirm() {
		const alert = await this.alertController.create({
		  header: 'Are you sure?',
		  message: 'All the information you input are correct?',
		  buttons: [
			{
			  text: 'No',
			  role: 'cancel',
			  handler: (blah) => {
				console.log('Confirm Cancel: blah');
			  }
			}, {
			  text: 'Yes',
			  handler: () => {
				console.log('Confirm Okay');
			  }
			}
		  ]
		});
	
		await alert.present();
	  }

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;		
	}

	get allSleepinessData(){
		return SleepService.AllSleepinessData;
	}
}
