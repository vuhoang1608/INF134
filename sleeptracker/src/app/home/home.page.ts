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
		this.storage.get('has_account').then((rs) => {
			if(rs)
			{
				this.hasAcc = rs;
			}
		});

		this.storage.get('loggedI').then((rs) => {
			if(rs)
			{
				this.loggedIn = rs;
			}
		});
	}

	createAccount()
	{
		this.storage.set("firstname", this.fName);
		this.storage.set("lastname", this.lName);
		this.storage.set("email", this.email);
		this.storage.set("DOB", this.DOB);
		this.storage.set("username", this.userName);
		this.storage.set("password", this.password);
		this.storage.set("has_account", true);
		this.storage.set("loggedIn", true);
		this.navCtrl.navigateForward('/main');
	}

	ngOnInit() {
		this.fName = "";
		this.lName = "";
		this.email = "";
		this.userName = "";
		this.password = "";
		this.storage.get("loggedIn").then((check) => {
			if(check) {
				this.loggedIn = check;
				this.navCtrl.navigateForward('/main');
			}
		});

		this.storage.get("has_account").then((result) => {
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
				console.log('Confirm Okay');
			  }
			}
		  ]
		});
	
		await alert.present();
	}

	async presentWarningUserPass() {
		const alert = await this.alertController.create({
		  header: 'Alert',
		  message: 'Incorrect Username/Password.',
		  buttons: ['OK']
		});
	
		await alert.present();
	  }

	doLogin()
	{
		let tempUsr:String = "";
		let tempPass:String = "";
		Promise.all([this.storage.get("username"), this.storage.get("password")]).then(values => {
			if(values[0] === this.userName && values[1] === this.password)
			{
				this.userName = "";
				this.password = "";
				this.navCtrl.navigateForward('/main');
			}			
			else
				this.presentWarningUserPass();

		});
	}

	// /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	// get allSleepData() {
	// 	return SleepService.AllSleepData;		
	// }

	// get allSleepinessData(){
	// 	return SleepService.AllSleepinessData;
	// }
}
