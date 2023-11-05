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
  currency: string;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface RootState {
  crypto: {
    cryptos: CryptoData[];
    selectedCrypto: CryptoData | null;
  };
}