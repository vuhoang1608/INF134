import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  fName: string;
  lName: string;
  DOB: Date;
  email: string;
  constructor(public storage: Storage,
              public alertController: AlertController,
              public navCtrl: NavController) {
    Promise.all([this.storage.get("firstname"),
    this.storage.get("lastname"),
    this.storage.get("DOB"),
    this.storage.get("email")]).then(values => {
      if (values[0] && values[1] && values[2] && values[3]) {
        this.fName = values[0];
        this.lName = values[1];
        this.DOB = new Date(values[2]);
        this.email = values[3];
      }
    });
  }

  ngOnInit() {}

  async presentAlertConfirm() {
		const alert = await this.alertController.create({
		  header: 'Confirm',
		  message: 'Are you sure you want to log out ?',
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
          this.logOut();
			  }
			}
		  ]
		});
	
		await alert.present();
	}

  logOut() {
    this.storage.set("loggedIn", false).then(() => {
      this.navCtrl.navigateForward('/home');
    });
  }


}
