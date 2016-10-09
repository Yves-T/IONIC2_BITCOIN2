import {Injectable,EventEmitter} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Currencies} from "./currencies";
import {Currency} from "../models/currency";
import {Ticker} from '../models/ticker'

@Injectable()
export class TickerService {
  tickerUrl = 'https://api.bitcoinaverage.com/ticker/all';
  tickerHistoryUrl = 'https://api.bitcoinaverage.com/history/';
  pushedData = new EventEmitter<string>();

  constructor(public http: Http, private currencyService: Currencies) {

  }

  getTickers() {
    let currencies: [Currency] = this.currencyService.getCurrencies();
    return this.http.get(this.tickerUrl)
      .map(res => {
        var tickers: [Ticker] = res.json();
        return currencies.map((currency: Currency) => {
          currency.ticker = tickers[currency.code];
          return currency;
        });
      });
  }

  pushData(value: string) {
    this.pushedData.emit(value);
  }

  getHistory(currency: string) {
    return this.http.get(`${this.tickerHistoryUrl}${currency}/per_hour_monthly_sliding_window.csv`)
      .map(res => {
        let prices = res['_body'];
        prices = prices.split(/\n/);
        let series = {
          data: []
        };

        prices.forEach((price, index) => {
          price = price.split(',');
          let date = new Date(price[0].replace(' ', 'T')).getTime();
          let value = parseFloat(price[3]);
          if (date && value > 0) {
            series.data.push([date, value]);
          }
        });

        return series;
      });
  }

}
