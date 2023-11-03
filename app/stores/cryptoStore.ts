import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../reducers/cryptoReducers';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;