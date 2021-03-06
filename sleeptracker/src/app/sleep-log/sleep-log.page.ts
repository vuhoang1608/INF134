import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import {SleepData} from '../data/sleep-data';
import {StanfordSleepinessData} from '../data/stanford-sleepiness-data';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sleep-log',
  templateUrl: './sleep-log.page.html',
  styleUrls: ['./sleep-log.page.scss'],
})
export class SleepLogPage implements OnInit {
  // loggedValue:number;
  // sleepScaleValues:any[] = [];
  // sleepData:StanfordSleepinessData;
  // loggedLocation:String;
  // lblUsername:String;
  // arrSleepinessData:Array<StanfordSleepinessData>;
  // constructor(public sleepService: SleepService, public navCtrl: NavController,
  //                 public toastController: ToastController, public alertController: AlertController,
  //                   public storage:Storage) {}

//   ngOnInit() {
//     //this.sleepScaleValues = StanfordSleepinessData.ScaleValues.slice(1,7);
//     for (let i:number = 1; i <= 7; i ++){
//       this.sleepScaleValues.push({'item':StanfordSleepinessData.ScaleValues[i],
//         'selected': false,'value':i});
//     }    
//     this.loggedValue = -1;
//     this.loggedLocation = "";
//     this.storage.get("firstname").then((fName) => {
//     this.lblUsername = fName;
//     });
//   }
//   submit(){
//     if(this.loggedValue != -1 && this.loggedLocation != ""){
//       this.sleepData = new StanfordSleepinessData(this.loggedValue, this.loggedLocation, new Date(Date.now()));
//       this.sleepService.logSleepinessData(this.sleepData);
//       this.storage.get("arrSleepinessData").then((result) => {
//         this.arrSleepinessData = result;
//         if (result === null) 
//         {
//           this.arrSleepinessData = new Array<StanfordSleepinessData>();
//         }
//         this.arrSleepinessData.push(this.sleepData);
//         this.storage.set("arrSleepinessData", this.arrSleepinessData);        
//       });

//       //Show notification
//       this.toastController.create({
//           message: 'Sleepiness data logged!',
//           duration: 1000
//         }).then((toast) => {
//           toast.present();
//       });

//       //reset Radio button
//       this.sleepScaleValues[this.loggedValue-1]["selected"] = false;
//       //reset loggedValue to trigger alert
//       this.loggedValue = -1;
//       this.loggedLocation = "";
//     }
//     else{
//       if(this.loggedValue == -1 && this.loggedLocation != ""){
//         this.alertController.create({
//           header: 'Warning',        
//           message: "Please pick an option! Then hit 'Submit'.",
//           buttons: ['OK']
//           }).then((alert) => {
//           alert.present();
//           });
//       }
//       else if(this.loggedValue != -1 && this.loggedLocation == ""){
//         this.alertController.create({
//           header: 'Warning',        
//           message: "Please put your location! Then hit 'Submit'.",
//           buttons: ['OK']
//           }).then((alert) => {
//           alert.present();
//           });
//       }
//       else{
//         this.alertController.create({
//           header: 'Warning',        
//           message: "Please put your location and pick an option! Then hit 'Submit'.",
//           buttons: ['OK']
//           }).then((alert) => {
//           alert.present();
//           }); 
//       }
//     }
//   }

//   radioSelect(event) {
//     //reset all "selected" filed to false
//     this.sleepScaleValues.forEach((item)=>{
//       item["selected"] = false;
//     });
//     //set new selected field to true
//     this.sleepScaleValues[event.detail.value - 1]["selected"] = event.detail.checked;
//     this.loggedValue = event.detail.value;
//   } 

  level:number = 1;
  loggedLocation:String;
  arrSleepinessData:Array<StanfordSleepinessData>;
  sleepiness:StanfordSleepinessData = new StanfordSleepinessData(this.level, this.loggedLocation, new Date(Date.now())); 
  sleepiness_label:Array<string> = this.sleepiness.summaryString().substring(2).split(';');
  
  constructor(private storage: Storage, public navCtrl: NavController,  
    public toastController: ToastController, public sleepService: SleepService, public alertController: AlertController) { 
    
  }
  ngOnInit() {
    this.loggedLocation = "";
  }

  changeSlider() {
    this.sleepiness = new StanfordSleepinessData(this.level, this.loggedLocation, new Date(Date.now())); 
    this.sleepiness_label = this.sleepiness.summaryString().substring(2).split(';');
  }

  submit(){
        if(this.loggedLocation != ""){
          this.sleepiness = new StanfordSleepinessData(this.level, this.loggedLocation, new Date(Date.now()));
          this.sleepService.logSleepinessData(this.sleepiness);
          this.storage.get("arrSleepinessData").then((result) => {
            this.arrSleepinessData = result;
            if (result === null) 
            {
              this.arrSleepinessData = new Array<StanfordSleepinessData>();
            }
            this.arrSleepinessData.push(this.sleepiness);
            this.storage.set("arrSleepinessData", this.arrSleepinessData);        
          });
          this.toastController.create({
                      message: 'Sleepiness data logged!',
                      duration: 1000
                    }).then((toast) => {
                      toast.present();
                  });
          this.loggedLocation = "";
    }
    else {
          this.alertController.create({
            header: 'Warning',        
            message: "Please put your location! Then hit 'Submit'.",
            buttons: ['OK']
            }).then((alert) => {
            alert.present();
            });
        }
  }
}




