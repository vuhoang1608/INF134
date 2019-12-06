import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';

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
                public sleepService: SleepService) { }

  ngOnInit() {
    this.storage.get("firstname").then((fName) => {
      this.lblUsername = fName;
    });        
  }

  logSleep() {        
    this.sleepData = new OvernightSleepData(new Date(this.startTime), new Date(this.endTime));
    this.storage.get("arrSleepData").then((result) => {
      this.arrSleepData = result;
      if (result === null) 
      {
        this.arrSleepData = new Array<OvernightSleepData>();
      }
      this.arrSleepData.push(this.sleepData);
      this.storage.set('arrSleepData', this.arrSleepData);
           
    });    
  }

  logOut() {
    this.storage.set("loggedIn", false).then(() => {
      this.navCtrl.navigateForward('/home');
    });
  }

}
