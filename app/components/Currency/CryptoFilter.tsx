'use client';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState, type CryptoData } from '../../types/crypto';
import { useRouter } from 'next/router'
import CryptoList from './CryptoList';

export function CryptoFilter({ data }: { data: CryptoData[] }) {

  const filteredCryptos = useSelector((state: RootState) => state.crypto.filteredCryptos);
  const [currencyFilter, setCurrencyFilter] = useState('');

  const handleCurrencyFilter = (value: string) => {
    setCurrencyFilter(value);
  }

  const filteredData = data.filter((crypto: CryptoData) => {
    return crypto.name.toLowerCase().includes(currencyFilter.toLowerCase())
  })

  return (
    <div>
      <label>Search for a cryptocurrency
        <input
          className="w-full rounded-md border-gray-200 p-3 text-lg text-black"
          type="text"
          placeholder="Type name currency"
          value={currencyFilter}
          onChange={(e) => handleCurrencyFilter(e.target.value)}
        />
      </label>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCryptos ?
          filteredData.map((crypto: CryptoData) => (
            <CryptoList crypto={crypto} key={crypto.id} />
          )) : <div>No data available</div>
        }
      </div>
    </div>
  );
};
