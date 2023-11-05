import { useEffect, useState, useId, useRef } from 'react';
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

  const filterCryptoId = useId();

  const longViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMoreItems = async () => {
      const allCryptosData = await getAllCryptos(quantity + 10);
      dispatch(fetchCryptos(allCryptosData));
      setQuantity(quantity + 10);
    }
    const onIntersection = (entries: IntersectionObserverEntry[]) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting && quantity <= 90) {
        fetchMoreItems();
      }
    }
    const observer = new IntersectionObserver(onIntersection)
    if (observer && longViewRef.current) {
      observer.observe(longViewRef.current)
    }
    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
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

  return (
    <main className="w-full min-h-screen p-20">
      <section>
        <label htmlFor={filterCryptoId} className="block">
          <span className="block text-lg font-medium text-slate-50">Search for a cryptocurrency</span>
          <div className="shadow p-4 rounded-lg dark:bg-slate-900 ">
            <div className="flex items-center space-x-2">
              <svg
                className=" h-5 w-5 text-gray-500 dark:text-gray-300"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                id={filterCryptoId}
                className="w-full focus:outline-none dark:bg-gray-700 dark:text-white p-3"
                placeholder="Type currency name"
                type="text"
                value={currencyFilter}
                onChange={handleFilterChange}
              />
            </div>
          </div>
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
      {quantity <= 90 && <div ref={longViewRef} className='w-full flex justify-center'>Loadding items...</div>}
    </main>
  );
};

export default CryptoList;