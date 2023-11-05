import { CryptoData } from '@/app/types/crypto';
import cryptoReducer, { fetchCryptos } from '@/app/reducers/cryptoReducers';

describe('cryptoReducer', () => {
  const initialState = {
    cryptos: [],
    filteredCryptos: [],
  };

  it('should set the cryptos and filteredCryptos to the payload', () => {
    const payload: CryptoData[] = [{
      id: 1,
      name: 'Bitcoin',
      price_usd: 0,
      symbol: 'BTC',
      rank: 0,
      market_cap_usd: 0,
      currency: '',
    }];
    const newState = cryptoReducer(initialState, fetchCryptos(payload));

    // Verify that the updated state matches the payload
    expect(newState.cryptos).toEqual(payload);
    expect(newState.filteredCryptos).toEqual(payload);
  });
});