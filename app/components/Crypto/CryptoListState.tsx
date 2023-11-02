import React from 'react';
import { connect } from 'react-redux';
import { type CryptoData, type AppState } from '../../types/crypto';

interface CryptoListProps {
  cryptoData: CryptoData[];
}

const CryptoList: React.FC<CryptoListProps> = ({ cryptoData }) => {
  return (
    <div>
      <h2>Cryptocurrencies</h2>
      <ul>
        {cryptoData.map((crypto) => (
          <li key={crypto.id}>
            {crypto.name} - {crypto.price_usd} USD
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  cryptoData: state.cryptos,
});

export default connect(mapStateToProps)(CryptoList);