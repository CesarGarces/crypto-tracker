'use server'
import { type CryptoData } from '../types/crypto';
export const FETCH_CRYPTOS = 'FETCH_CRYPTOS';
export const FILTER_CRYPTOS = 'FILTER_CRYPTOS';

export const fetchCryptos = (data: CryptoData) => ({
  type: FETCH_CRYPTOS,
  payload: data,
});

export const filterCryptos = (currency: string) => ({
  type: FILTER_CRYPTOS,
  payload: currency,
});