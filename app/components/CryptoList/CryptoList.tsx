import { useEffect, useState, useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type CryptoData, type RootState } from '@/app/types/crypto';
import { fetchCryptos } from '@/app/reducers/cryptoReducers';
import { useNameApp } from '@/app/hooks/useNameApp';
import { getAllCryptos } from '@/app/services/cryptos';
import CoinCard from '../Card/CoinCard';
import Link from 'next/link';

const CryptoList: React.FC<CryptoData> = () => {

  const dispatch = useDispatch();

  const [currencyFilter, setCurrencyFilter] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(10);

  const longViewId = useId();
  const filterCryptoId = useId();

  useEffect(() => {
    const fetchAllCryptos = async () => {
      const allCryptosData = await getAllCryptos(quantity);
      dispatch(fetchCryptos(allCryptosData));
    };
    fetchAllCryptos();

  }, [dispatch, quantity]);

  const allCryptos = useSelector((state: RootState) => state.crypto.cryptos);

  const filteredCryptos = allCryptos.filter((crypto) => {
    return crypto.name.toLowerCase().includes(currencyFilter.toLowerCase());
  });

  useNameApp({
    title: `(${filteredCryptos.length}) - Cryptocurrencies`,
    description: 'Cryptocurrency Information'
  })

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyFilter(e.target.value);
  }

  const handleLongViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  }

  return (
    <main className="w-full min-h-screen p-20">
      <section>
        <aside className="flex justify-end">
          <label htmlFor={longViewId} className="block">
            <span className="block text-lg font-medium text-slate-50">Show Items</span>
            <select id={longViewId} onChange={handleLongViewChange} className='text-black p-1 w-full rounded-md'>
              <option defaultValue={quantity} hidden>{quantity}</option>
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </label>
        </aside>
        <label htmlFor={filterCryptoId} className="block">
          <span className="block text-lg font-medium text-slate-50">Search for a cryptocurrency</span>
          <input
            id={filterCryptoId}
            className="w-full rounded-md p-3 text-lg text-black"
            type="text"
            placeholder="Type currency name"
            value={currencyFilter}
            onChange={handleFilterChange}
          />
        </label>
      </section>
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allCryptos ?
          filteredCryptos.map((item: CryptoData) => (
            <li key={item.id}>
              <Link href={`/currency/${item.id}`}>
                <CoinCard crypto={item} />
              </Link>
            </li>
          )) : <div>No data available</div>
        }
        {filteredCryptos.length === 0 && <div>No data available</div>}
      </section>
    </main>
  );
};

export default CryptoList;