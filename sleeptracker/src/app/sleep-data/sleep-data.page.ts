import { Component, OnInit } from '@angular/core';
//need to install Chart as below:
//npm install ng2-charts --save
//npm install chart.js --save
import { ChartsModule } from 'ng2-charts';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sleep-data',
  templateUrl: './sleep-data.page.html',
  styleUrls: ['./sleep-data.page.scss'],
})

export class SleepDataPage implements OnInit {
  sleepinessData:StanfordSleepinessData[];
  overnightSleepData:OvernightSleepData[];
  nightsleepData:OvernightSleepData;
  daysleepData:StanfordSleepinessData;

  
  constructor(public sleepService: SleepService,public toastController: ToastController, 
              public alertController: AlertController,private storage: Storage) {
    //Initialize overnightSleepData    
    this.storage.get("arrSleepData").then((result) => {      
      result.forEach((element) => {        
        this.nightsleepData = new OvernightSleepData(element.sleepStart, element.sleepEnd);
        sleepService.logOvernightData(this.nightsleepData);
      });
    this.overnightSleepData = SleepService.AllOvernightData;      
    });    
    //Initialize sleepinessData      
    this.storage.get("arrSleepinessData").then((result) => {           
      result.forEach((element) => {        
        this.daysleepData = new StanfordSleepinessData(element.loggedValue,element.loggedLocation,
                                element.loggedAt);
        sleepService.logSleepinessData(this.daysleepData);
      });
    this.sleepinessData = SleepService.AllSleepinessData;
    });    
   }
  
  ngOnInit() {    
  }
  async deleteOvernightSleepData(item){
    const alert = await this.alertController.create({
      header: 'Delete this data.',        
      message: "Are you sure?",
      
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            //No need to do anything
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(item);
            this.overnightSleepData = this.overnightSleepData.filter((item) =>{
              return !this.overnightSleepData.includes(item);
            });                        
          }
        }
      ]
      });
      await alert.present();
    }
  

  async deleteSleepLogData(item){
    const alert = await this.alertController.create({
      header: 'Delete this data.',        
      message: "Are you sure?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            //No need to do anything
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(item);                        
          }
        }
      ]
      });
      await alert.present();
  }
}
