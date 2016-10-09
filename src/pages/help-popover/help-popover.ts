import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  selector: 'page-help-popover',
  templateUrl: 'help-popover.html'
})
export class HelpPopoverPage {

  constructor(public viewCtrl: ViewController) {
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
