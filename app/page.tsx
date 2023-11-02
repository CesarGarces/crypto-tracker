'use client'
import { Suspense, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNameApp } from './hooks/useNameApp';
import useFetchCrypto from './hooks/useFetchCrypto';
import CryptoFilter from './components/Crypto/CryptoFilter';

export default function Home() {
  const [quantity, setQuantity] = useState(10);
  const { data, isLoading, error } = useFetchCrypto(quantity);

  useNameApp({
    title: `[${quantity}] Cryptocurrencies`,
    description: 'List of cryptocurrencies'
  });

  if (Object.keys(error).length > 0) {
    return <h2>An error has ocurred</h2>
  }

  return (
    <main className="min-h-screen p-20">
      <aside className="flex flex-wrap justify-end gap-3">
        <label className="p-3">Show Items</label>
        <button className={`rounded-md bg-slate-900 p-3 hover:bg-slate-700 ${quantity === 10 ? 'bg-slate-700' : ''}`} onClick={() => setQuantity(10)}>10</button>
        <button className={`rounded-md bg-slate-900 p-3 hover:bg-slate-700 ${quantity === 50 ? 'bg-slate-700' : ''}`} onClick={() => setQuantity(50)}>50</button>
        <button className={`rounded-md bg-slate-900 p-3 hover:bg-slate-700 ${quantity === 100 ? 'bg-slate-700' : ''}`} onClick={() => setQuantity(100)}>100</button>
      </aside>
      <Suspense fallback={isLoading && <p>Loading data...</p>}>
        <CryptoFilter data={data} />
      </Suspense>
    </main>
  )
}
