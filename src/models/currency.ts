import {Ticker} from "../models/ticker";
export interface Currency {
  code: string;
  text: string;
  selected: boolean;
  ticker?: Ticker
}
