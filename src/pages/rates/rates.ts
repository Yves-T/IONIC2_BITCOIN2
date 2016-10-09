import {Component} from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';
import {Currency} from "../../models/currency";
import {TickerService} from "../../providers/ticker";
import {SelectedTicker} from "../../pipes/selected-ticker";
import {DetailsPage} from "../details/details";
import {HelpPopoverPage} from "../help-popover/help-popover";


@Component({
  selector: 'page-rates',
  templateUrl: 'rates.html',
  pipes: [SelectedTicker]
})
export class RatesPage {
  currencies: [Currency];
  popover;

  constructor(private tickerService: TickerService,
              public navCtrl: NavController,
              public popoverCtrl: PopoverController) {

  }

  ionViewDidLoad() {
    this.loadTickers();
    this.tickerService.pushedData.subscribe(
      currency => {
        let foundCurrency = this.currencies.find(item => item.code === currency.code);
        foundCurrency.selected = currency.selected;
        this.currencies = this.currencies.slice(0);
      }
    );
  }

  loadTickers(refresher = null) {
    this.tickerService.getTickers()
      .subscribe(currencies => {
        this.currencies = currencies;
        if (refresher) {
          refresher.complete();
        }
      });
  }

  showDetails(currencyCode) {
    this.navCtrl.push(DetailsPage, {currencyCode})
  }

  openHelp(event) {
    this.popover = this.popoverCtrl.create(HelpPopoverPage);
    this.popover.present({
      ev: event
    });
  }
}
