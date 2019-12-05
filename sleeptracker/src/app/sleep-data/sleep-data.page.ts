import { Component, OnInit } from '@angular/core';
//need to install Chart as below:
//npm install ng2-charts --save
//npm install chart.js --save
import { ChartsModule } from 'ng2-charts';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-sleep-data',
  templateUrl: './sleep-data.page.html',
  styleUrls: ['./sleep-data.page.scss'],
})

export class SleepDataPage implements OnInit {
  sleepinessData:StanfordSleepinessData[];
  overnightSleepData:OvernightSleepData[];
  searchbar:any;
  items:Array<any>;
  
  constructor(public sleepService: SleepService) {
    this.sleepinessData = SleepService.AllSleepinessData;
    this.overnightSleepData = SleepService.AllOvernightData;   
   }
  
  ngOnInit() {    
  }
}
