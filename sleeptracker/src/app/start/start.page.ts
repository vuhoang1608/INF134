import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, AlertController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  lblUsername: String;
  time=Date.now();
  constructor(private storage: Storage, public navCtrl: NavController,
    public sleepService: SleepService) { }

  ngOnInit() {
    
    this.storage.get("firstname").then((fName) => {
      this.lblUsername = fName;
    });
  }

  openProfile(){
    this.navCtrl.navigateForward('/profile');
  }

}
