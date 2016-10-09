import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Currency} from "../models/currency";

@Injectable()
export class Currencies {

  constructor() {
  }

  getCurrencies(): [Currency] {
    return [
      {code: 'AUD', text: 'Australian Dollar', selected: true},
      {code: 'BRL', text: 'Brazilian Real', selected: false},
      {code: 'CAD', text: 'Canadian Dollar', selected: true},
      // { code: 'CHF', text: 'Swiss Franc', selected: false }, Disabled CHF because the API no longer returns it
      {code: 'CNY', text: 'Chinese Yuan', selected: true},
      {code: 'EUR', text: 'Euro', selected: true},
      {code: 'GBP', text: 'British Pound Sterling', selected: true},
      {code: 'IDR', text: 'Indonesian Rupiah', selected: false},
      {code: 'ILS', text: 'Israeli New Sheqel', selected: false},
      {code: 'MXN', text: 'Mexican Peso', selected: true},
      {code: 'NOK', text: 'Norwegian Krone', selected: false},
      {code: 'NZD', text: 'New Zealand Dollar', selected: false},
      {code: 'PLN', text: 'Polish Zloty', selected: false},
      {code: 'RON', text: 'Romanian Leu', selected: false},
      {code: 'RUB', text: 'Russian Ruble', selected: true},
      {code: 'SEK', text: 'Swedish Krona', selected: false},
      {code: 'SGD', text: 'Singapore Dollar', selected: false},
      {code: 'USD', text: 'United States Dollar', selected: true},
      {code: 'ZAR', text: 'South African Rand', selected: false}
    ];
  }

}
