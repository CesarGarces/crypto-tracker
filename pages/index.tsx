import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptos } from '../app/reducers/cryptoReducers';
import CryptoList from '../app/components/Currency/CryptoList';
import CryptoDetails from '../app/components/Currency/CryptoDetails';
import { RootState } from '../app/types/crypto';
const Home = () => {
  const dispatch = useDispatch();
  const cryptos = useSelector((state: RootState) => state.crypto.cryptos);

  useEffect(() => {
    fetch('https://api.coinlore.net/api/tickers/?limit=10')
      .then((response) => response.json())
      .then((data) => dispatch(fetchCryptos(data.data)));
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: '#353434', width: '100vw', height: '100vh' }}>
      <h1>Cryptocurrency Information</h1>
      <CryptoList cryptos={cryptos} />
      <CryptoDetails />
    </div>
  );
};

export default Home;