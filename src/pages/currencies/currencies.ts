import {Component} from '@angular/core';
import {NavController, reorderArray} from 'ionic-angular';
import {TickerService} from "../../providers/ticker";


@Component({
  selector: 'page-currencies',
  templateUrl: 'currencies.html'
})
export class CurrenciesPage {
  currencies;
  reorderState: boolean = false;

  constructor(public navCtrl: NavController, private tickerService: TickerService) {
    this.tickerService.getTickers()
      .subscribe(tickers => {
        this.currencies = tickers;
      });
  }

  updateSelected(currency) {
    this.tickerService.pushedData.emit(currency);
  }

  reorderItems(indexes) {
    this.currencies = reorderArray(this.currencies, indexes);
  }

}
