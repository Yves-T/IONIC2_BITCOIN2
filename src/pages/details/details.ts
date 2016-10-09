import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Currency} from "../../models/currency";
import {TickerService} from "../../providers/ticker";
import {HistoryPage} from "../history/history";


@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  currencyCode;
  currency: Currency;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ticketService: TickerService) {
    this.currencyCode = navParams.get('currencyCode');

    this.ticketService.getTickers().subscribe(tickers => {
      this.currency = tickers.find((currency) => {
        return currency.code === this.currencyCode;
      });
    });
  }

  showHistory(currencyCode) {
    this.navCtrl.setRoot(HistoryPage, {currencyCode});
  }

}
