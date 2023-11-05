import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cryptos: [],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    fetchCryptos: (state, action) => {
      state.cryptos = action.payload;
    },
  },
});

export const { fetchCryptos } = cryptoSlice.actions;
export default cryptoSlice.reducer;