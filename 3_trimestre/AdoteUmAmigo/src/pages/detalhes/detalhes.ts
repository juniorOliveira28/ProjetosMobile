import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  animais;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.animais = this.navParams.get("animais");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}
