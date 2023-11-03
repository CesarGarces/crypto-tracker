import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CryptoData } from '../types/crypto';

const initialState = {
  cryptos: [],
  filteredCryptos: [],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    fetchCryptos: (state, action) => {
      state.cryptos = action.payload;
      state.filteredCryptos = action.payload;
    },
    filterCryptos: (state, action: PayloadAction<string>) => {
      const currency = action.payload;
      state.filteredCryptos = state.cryptos.filter((crypto: CryptoData) =>
        crypto.currency ? crypto.currency.toLowerCase().includes(currency.toLowerCase()) : false
      );
    },
  },
});

export const { fetchCryptos, filterCryptos } = cryptoSlice.actions;
export default cryptoSlice.reducer;