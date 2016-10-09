import {Component} from '@angular/core';


import {RatesPage} from "../rates/rates";
import {HistoryPage} from "../history/history";
import {CurrenciesPage} from "../currencies/currencies";
import {TickerService} from "../../providers/ticker";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RatesPage;
  tab2Root: any = HistoryPage;
  tab3Root: any = CurrenciesPage;

  constructor() {

  }
}
