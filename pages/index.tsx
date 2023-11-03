'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCryptos } from '@/app/reducers/cryptoReducers';
import { CryptoFilter } from '@/app/components/Currency/CryptoFilter';
import useFetchCrypto from '@/app/hooks/useFetchCrypto';
import { useNameApp } from '@/app/hooks/useNameApp';

const Home = () => {
  const [quantity, setQuantity] = useState(10);
  const dispatch = useDispatch();

  useNameApp({
    title: `(${quantity}) Cryptocurrencies`,
    description: 'Cryptocurrency Information'
  })

  const { data, isLoading, error } = useFetchCrypto(quantity)
  dispatch(fetchCryptos(data));

  if (Object.keys(error).length > 0) {
    return (
      <main className="min-h-screen p-20">
        <p>An error occurred</p>
      </main>
    )
  }

  return (
    <main className="w-full min-h-screen p-20">
      <aside className="flex flex-wrap justify-end gap-3">
        <label className="p-3">Show Items</label>
        <button className={`rounded-md bg-slate-900 p-3 hover:bg-slate-700 ${quantity === 10 ? 'bg-slate-700' : ''}`} onClick={() => setQuantity(10)}>10</button>
        <button className={`rounded-md bg-slate-900 p-3 hover:bg-slate-700 ${quantity === 50 ? 'bg-slate-700' : ''}`} onClick={() => setQuantity(50)}>50</button>
        <button className={`rounded-md bg-slate-900 p-3 hover:bg-slate-700 ${quantity === 100 ? 'bg-slate-700' : ''}`} onClick={() => setQuantity(100)}>100</button>
      </aside>
      <CryptoFilter data={data} />
      {isLoading && <p>Loading...</p>}
    </main>
  );
};

export default Home;