import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Currencies} from "../../providers/currencies";
import {Currency} from "../../models/currency";
import {TickerService} from "../../providers/ticker";

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  options: HighchartsOptions = {};
  currencies: [Currency];
  currency: string = 'USD';

  constructor(public navCtrl: NavController,
              private currencyService: Currencies,
              private ticketService: TickerService,
              public navParams: NavParams) {
    let currencyCode = this.navParams.get('currencyCode');
    if (currencyCode) {
      this.currency = currencyCode;
    }

    this.options = {
      chart: {
        type: 'line'
      },
      legend: {
        enabled: false
      },
      title: {
        text: null
      },
      yAxis: {
        title: null
      },
      xAxis: {
        type: 'datetime'
      },
      series: []
    };

    this.ticketService.getTickers()
      .subscribe(tickers => {
        this.currencies = tickers;
      });

    this.currencies = currencyService.getCurrencies();
    this.ticketService.getHistory(this.currency)
      .subscribe(series => {
        this.options.series = [{data: series.data}];
        this.options = JSON.parse(JSON.stringify(this.options));
      });
  }

  changeCurrency() {
    console.log('changing');
    this.navCtrl.push(HistoryPage, {
      currencyCode: this.currency
    });
  }

  ionViewDidLoad() {
    console.log('Hello History Page');
  }

}
