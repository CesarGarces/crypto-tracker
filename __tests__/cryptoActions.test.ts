import { filterCryptos, fetchCryptos } from '../app/actions/cryptoActions';

describe('Filter Actions', () => {
  it('Should create an action to filter cryptos', () => {
    const expectedAction = {
      payload: 'bitcoin',
      type: 'FILTER_CRYPTOS',
    };
    expect(filterCryptos('bitcoin')).toEqual(expectedAction);
  });
  it('Should create an action to fetch cryptos', () => {
    const expectedAction = {
      payload: {
        id: 1,
        name: 'Bitcoin',
        price_usd: 0,
        symbol: 'BTC',
        rank: 0,
        market_cap_usd: 0,
        currency: ''
      },
      type: 'FETCH_CRYPTOS',
    };
    expect(fetchCryptos({
      id: 1, name: 'Bitcoin',
      price_usd: 0,
      symbol: 'BTC',
      rank: 0,
      market_cap_usd: 0,
      currency: ''
    })).toEqual(expectedAction);
  })
});