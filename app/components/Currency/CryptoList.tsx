'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCryptos } from '../../reducers/cryptoReducers';
import { type RootState, type CryptoData } from '../../types/crypto';
import Link from 'next/link';
import { useRouter } from 'next/router'

interface CryptoListProps {
  cryptos: CryptoData[];
}

const CryptoList: React.FC<CryptoListProps> = ({ cryptos }) => {

  const router = useRouter()

  const dispatch = useDispatch();
  const filteredCryptos = useSelector((state: RootState) => state.crypto.filteredCryptos);
  const [currencyFilter, setCurrencyFilter] = useState('');

  const handleCurrencyFilter = (value: string) => {
    setCurrencyFilter(value);
    dispatch(filterCryptos(value));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por moneda"
        value={currencyFilter}
        onChange={(e) => handleCurrencyFilter(e.target.value)}
      />
      <ul>
        {filteredCryptos &&
        filteredCryptos.map((crypto) => (
          <li key={crypto.id} onClick={() => router.push(`/currency/${crypto.id}`)}>
            {crypto.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoList;