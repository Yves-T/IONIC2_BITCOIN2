import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {TabsPage} from '../pages/tabs/tabs';
import {Currencies} from "../providers/currencies";
import {TickerService} from "../providers/ticker";
import {RatesPage} from "../pages/rates/rates";
import {SelectedTicker} from "../pipes/selected-ticker";
import {HistoryPage} from "../pages/history/history";
import {ChartModule} from 'angular2-highcharts';
import {DetailsPage} from "../pages/details/details";
import {CurrenciesPage} from "../pages/currencies/currencies";
import {HelpPopoverPage} from "../pages/help-popover/help-popover";

@NgModule({
  declarations: [
    MyApp,
    HistoryPage,
    CurrenciesPage,
    RatesPage,
    TabsPage,
    SelectedTicker,
    DetailsPage,
    HelpPopoverPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HistoryPage,
    CurrenciesPage,
    RatesPage,
    TabsPage,
    DetailsPage,
    HelpPopoverPage
  ],
  providers: [Currencies, TickerService]
})
export class AppModule {
}
