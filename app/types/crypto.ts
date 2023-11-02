export interface AppState {
  cryptos: CryptoData[];
}

export interface CryptoData {
  id: number;
  name: string;
  price_usd: number;
  symbol: string;
  rank: number;
  market_cap_usd: number;
}

export interface Action {
  type: string;
  payload?: any;
}