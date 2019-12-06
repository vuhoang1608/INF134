import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
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

  constructor(private storage: Storage, public navCtrl: NavController,
                public sleepService: SleepService, public toastController: ToastController) { }

  ngOnInit() {
    this.storage.get("firstname").then((fName) => {
      this.lblUsername = fName;
    });        
  }

  logSleep() {        
    this.sleepData = new OvernightSleepData(new Date(this.startTime), new Date(this.endTime));
    this.sleepService.logOvernightData(this.sleepData);
    this.storage.get("arrSleepData").then((result) => {
      this.arrSleepData = result;
      if (result === null) 
      {
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
