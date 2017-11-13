import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageBPage } from '../page-b/page-b';

/**
 * Generated class for the PageAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-a',
  templateUrl: 'page-a.html',
})
export class PageAPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageAPage');
  }
  loadPageB() {
    this.navCtrl.push(PageBPage);
  }

}
