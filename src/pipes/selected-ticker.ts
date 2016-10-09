import {Injectable, Pipe} from '@angular/core';
import {Currency} from "../models/currency";

@Pipe({
  name: 'selectedTicker',
  pure: false
})
@Injectable()
export class SelectedTicker {

  transform(currencies: [Currency]) {
    return currencies.filter((currency: Currency) => currency.selected);
  }
}
