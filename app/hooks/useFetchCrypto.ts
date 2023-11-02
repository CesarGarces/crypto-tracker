import useHttpRequest from "./useHttpRequest";
//const LOAD_CRYPTO_DATA = process.env.API_URL;
const LOAD_CRYPTO_DATA = "https://api.coinlore.net/api/tickers";
const useFetchCrypto = (limit = 10) => {
  const { data, isLoading, error } = useHttpRequest(`${LOAD_CRYPTO_DATA}/?limit=${limit}`);
  return { data, isLoading, error }
}

export default useFetchCrypto;