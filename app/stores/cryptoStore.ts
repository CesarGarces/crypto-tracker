import { createStore, combineReducers, Store, Reducer } from 'redux';
import { type CryptoData, type AppState, type Action } from '../types/crypto';

const initialState: AppState = {
  cryptos: [],
};

const rootReducer: Reducer<AppState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CRYPTO_DATA':
      return {
        ...state,
        cryptos: action.payload,
      };
    default:
      return state;
  }
};

const store: Store<AppState, Action> = createStore(rootReducer);

export default store;