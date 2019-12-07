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
import { identifierModuleUrl } from '@angular/compiler';
import { element } from 'protractor';

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
        this.sleepService.logOvernightData(this.nightsleepData);
      });
    this.overnightSleepData = SleepService.AllOvernightData;      
    });    
    //Initialize sleepinessData      
    this.storage.get("arrSleepinessData").then((result) => {           
      result.forEach((element) => {        
        this.daysleepData = new StanfordSleepinessData(element.loggedValue,element.loggedLocation,
                                element.loggedAt);
        this.sleepService.logSleepinessData(this.daysleepData);
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
            //remove item from overnightSLeepData
            let index:number = this.overnightSleepData.indexOf(item);            
            this.overnightSleepData.splice(index,1);

            //Show notification
            this.toastController.create({
              message: 'Data was deleted!',
              duration: 5000,
              showCloseButton: true,
              closeButtonText: "Undo"
            }).then((toast) => {
              let closedByTimeout = false;
              let timeoutHandle = setTimeout(() => { closedByTimeout = true; toast.dismiss(); }, 5000);
              toast.onDidDismiss().then((data) => {
                if(closedByTimeout){
                  console.log("Closed by time out");
                  //remove from storage
                  this.storage.set("arrSleepData",this.overnightSleepData);
                  clearTimeout(timeoutHandle);
                }
                else{
                  //add item back to the list
                  this.sleepService.logOvernightData(item);
                  console.log("Undo button was hitted");
                  this.toastController.create({
                    message: 'Data was restored!',
                    duration: 3000,
                    showCloseButton: true,
                    closeButtonText: "OK"
                  }).then((toast) => {
                    toast.present();
                  });
                }
              })
              toast.present();              
            });
            return this.overnightSleepData;                        
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
            //remove item from sleepinessData         
            let index:number = this.sleepinessData.indexOf(item);            
            this.sleepinessData.splice(index,1);
            
             //Show notification
             this.toastController.create({
              message: 'Data was deleted!',
              duration: 5000,
              showCloseButton: true,
              closeButtonText: "Undo"
            }).then((toast) => {
              let closedByTimeout = false;
              let timeoutHandle = setTimeout(() => { closedByTimeout = true; toast.dismiss(); }, 5000);
              toast.onDidDismiss().then((data) => {
                if(closedByTimeout){
                  console.log("Closed by time out");
                  //remove from storage
                  this.storage.set("arrSleepinessData",this.sleepinessData);
                  clearTimeout(timeoutHandle);
                }
                else{
                  //add item back to the list
                  this.sleepService.logSleepinessData(item);                  
                  console.log("Undo button was hitted");
                  this.toastController.create({
                    message: 'Data was restored!',
                    duration: 3000,
                    showCloseButton: true,
                    closeButtonText: "OK"
                  }).then((toast) => {
                    toast.present();
                  });
                }
              })
              toast.present();              
            });
            
            return this.sleepinessData;                        
          }
        }
      ]
      });
      await alert.present();
  }
}
