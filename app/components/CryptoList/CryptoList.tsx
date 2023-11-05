import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type CryptoData, type RootState } from '@/app/types/crypto';
import { fetchCryptos } from '@/app/reducers/cryptoReducers';
import { useNameApp } from '@/app/hooks/useNameApp';
import { getAllCryptos } from '@/app/services/cryptos';
import CoinCard from '../Card/CoinCard';
import Link from 'next/link';
import { SearchBar } from '../SearchBar/SearchBar';

function CryptoList() {

  const dispatch = useDispatch();

  const [currencyFilter, setCurrencyFilter] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(10);

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
        <SearchBar handleFilterChange={handleFilterChange} currencyFilter={currencyFilter} />
      </section>
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allCryptos ?
          filteredCryptos.map((item: CryptoData) => (
            <ul key={item.id}>
              <li>
                <Link href={`/currency/${item.id}`}>
                  <CoinCard crypto={item} />
                </Link>
              </li>
            </ul>
          )) : <div>No data available</div>
        }
        {filteredCryptos.length === 0 && <div>No data available</div>}
      </section>
      {quantity <= 90 && <div ref={longViewRef} className='w-full flex justify-center'>Loadding items...</div>}
    </main>
  );
};

export default CryptoList;