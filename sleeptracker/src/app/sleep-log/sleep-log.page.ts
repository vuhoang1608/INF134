import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import {SleepData} from '../data/sleep-data';
import {StanfordSleepinessData} from '../data/stanford-sleepiness-data';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sleep-log',
  templateUrl: './sleep-log.page.html',
  styleUrls: ['./sleep-log.page.scss'],
})
export class SleepLogPage implements OnInit {
  loggedValue:number;
  sleepScaleValues:any[] = [];
  sleepData:StanfordSleepinessData;
  constructor(public sleepService: SleepService, public navCtrl: NavController,
                  public toastController: ToastController) {}

  ngOnInit() {
    //this.sleepScaleValues = StanfordSleepinessData.ScaleValues.slice(1,7);
    for (let i:number = 1; i <= 7; i ++){
      this.sleepScaleValues.push({'item':StanfordSleepinessData.ScaleValues[i],
        'selected': false,'value':i});
    }    
    this.loggedValue = -1;
  }
  submit(){
    if(this.loggedValue != -1){
      this.sleepData = new StanfordSleepinessData(this.loggedValue, new Date(Date.now()));
      this.sleepService.logSleepinessData(this.sleepData);
      console.log(SleepService.AllSleepData);

      //Show notification
      this.toastController.create({
          message: 'Data submitted!',
          duration: 1500
        }).then((toast) => {
          toast.present();
      });

      //reset Radio button
      this.sleepScaleValues[this.loggedValue-1]["selected"] = false;
    }
    else{
      this.toastController.create({
        message: 'Please pick an option!',
        duration: 1500
      }).then((toast) => {
        toast.present();
    });
    }
  }

  radioSelect(event) {
    //reset all "selected" filed to false
    this.sleepScaleValues.forEach((item)=>{
      item["selected"] = false;
    });
    //set new selected field to true
    this.sleepScaleValues[event.detail.value - 1]["selected"] = event.detail.checked;
    this.loggedValue = event.detail.value;
  } 
  

}
