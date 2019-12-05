import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sleep-track',
  templateUrl: './sleep-track.page.html',
  styleUrls: ['./sleep-track.page.scss'],
})
export class SleepTrackPage implements OnInit {

  constructor(private storage:Storage, public navCtrl: NavController) { }

  ngOnInit() {
    this.storage.get("fName").then((fName) => {
      console.log(fName);
    });
  }

  logOut()
  {
    this.storage.set("loggedIn", false).then(() => {
      this.navCtrl.navigateForward('/home');
    });
  }

}
