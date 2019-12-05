import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { NavController,AlertController } from '@ionic/angular';
import { HomePageModule } from './home.module';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})

export class HomePage {
	hasAcc:boolean = false;
	loggedIn:boolean = false;
	fName:string = "";
	lName:string = "";
	email:string = "";
	DOB:Date;
	userName:string = "";
	password:string = "";

	constructor(public sleepService: SleepService, 
				public navCtrl: NavController, 
				public alertController: AlertController,
				public storage: Storage) 
	{

		
	}

	createAccount()
	{
		this.storage.set("fName", this.fName);
		this.storage.set("lName", this.lName);
		this.storage.set("email", this.email);
		this.storage.set("DOB", this.DOB);
		this.storage.set("userName", this.userName);
		this.storage.set("password", this.password);
		this.storage.set("hasAcc", true);
		this.storage.set("loggedIn", true);
	}

	ngOnInit() {
		this.storage.get("loggedIn").then((check) => {
			if(check) {
				this.loggedIn = check;
				this.navCtrl.navigateForward('/main');
			}
		});

		this.storage.get("hasAcc").then((result) => {
			this.hasAcc = result;
		});
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
				this.createAccount();
				if(this.hasAcc && !this.loggedIn)
				{
					tempUsr:String;
					tempPass:String
					this.storage.get("userName").then((usr) => {
						this.hasAcc = usr;
					});

					this.storage.get("password").then((pass) => {
						this.hasAcc = pass;
					});
				}
				this.navCtrl.navigateForward('/main');
				console.log('Confirm Okay');
			  }
			}
		  ]
		});
	
		await alert.present();
	  }

	// /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	// get allSleepData() {
	// 	return SleepService.AllSleepData;		
	// }

	// get allSleepinessData(){
	// 	return SleepService.AllSleepinessData;
	// }
}
