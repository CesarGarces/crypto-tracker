'use client'
import { useState } from 'react';
import { type CryptoData } from '../../types/crypto';
import CryptoList from './CryptoList';

const CryptoFilter = ({ data }: { data: CryptoData[] }) => {
  const [search, setSearch] = useState('');

  const filteredData = data.filter((crypto: CryptoData) => {
    return crypto.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <label>Search for a cryptocurrency
        <input
          className="w-full rounded-md border-gray-200 p-4 text-lg text-black"
          type="text"
          placeholder="Type name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          data ?
            filteredData.map((crypto: CryptoData) => (
              <li key={crypto.id} >
                <CryptoList crypto={crypto} />
              </li>
            )) : <div>No data available</div>
        }
      </div>
    </>
  )
}

export default CryptoFilter