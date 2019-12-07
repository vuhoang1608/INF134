import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, AlertController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';
import { ToastController } from '@ionic/angular';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-sleep-track',
  templateUrl: './sleep-track.page.html',
  styleUrls: ['./sleep-track.page.scss'],
})

export class SleepTrackPage implements OnInit {
  lblUsername: String;
  startTime: Date;
  endTime: Date;
  arrSleepData: Array<OvernightSleepData>;
  sleepData: OvernightSleepData;
  valid: Boolean;

  constructor(public alertController: AlertController, private storage: Storage, public navCtrl: NavController,
    public sleepService: SleepService, public toastController: ToastController) { }

  ngOnInit() {
    this.storage.get("firstname").then((fName) => {
      this.lblUsername = fName;
    });
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Submit Data',
      message: 'Do you want to log the data?',
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
            this.logSleep();
            this.startTime.setDate(null);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertMissingData() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Please enter Start/End Time!',
      buttons: ['OK']
    });

    await alert.present();
  }

  validate() {
    if (this.startTime != null && this.endTime != null) {
      this.presentAlertConfirm();
    }
    else {
      this.presentAlertMissingData();
    }
  }

  logSleep() {
    this.sleepData = new OvernightSleepData(new Date(this.startTime), new Date(this.endTime));
    this.sleepService.logOvernightData(this.sleepData);
    this.storage.get("arrSleepData").then((result) => {
      this.arrSleepData = result;
      if (result === null) {
        this.arrSleepData = new Array<OvernightSleepData>();
      }
      this.arrSleepData.push(this.sleepData);
      this.storage.set('arrSleepData', this.arrSleepData);

    });

    //Show notification
    this.toastController.create({
      message: 'Overnight Sleep data logged!',
      duration: 1000
    }).then((toast) => {

      toast.present();

    });
  }


}
