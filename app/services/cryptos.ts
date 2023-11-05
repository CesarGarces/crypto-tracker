import axios from "axios";
const LOAD_CRYPTO_DATA = process.env.API_URL;

export const getAllCryptos = async (quantity: number) => {
  const res = await axios.get(`${LOAD_CRYPTO_DATA}/tickers/?limit=${quantity}`);
  return res.data.data
}

export const getCryptoDetails = async (id: number) => {
  const res = await axios.get(`${LOAD_CRYPTO_DATA}/ticker/?id=${id}`);
  return res.data
}