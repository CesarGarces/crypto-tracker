import { AnyAction } from 'redux';
import { fetchCryptos } from '../app/reducers/cryptoReducers';

describe('fetchCryptos', () => {
  it('should set cryptos to the payload', () => {
    const state = { cryptos: [1, 2, 3] };
    const action: AnyAction = { type: 'FETCH_CRYPTOS', payload: [1, 2, 3] };
    fetchCryptos(action);
    expect(state.cryptos).toEqual([1, 2, 3]);
  });

  it('should not modify state if action type is not FETCH_CRYPTOS', () => {
    const state = { cryptos: [1, 2, 3] };
    const action: AnyAction = { type: 'OTHER_ACTION', payload: [4, 5, 6] };
    fetchCryptos(action);
    expect(state.cryptos).toEqual([1, 2, 3]);
  });
});