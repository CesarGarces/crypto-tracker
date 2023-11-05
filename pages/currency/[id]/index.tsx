import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, type CryptoData } from '@/app/types/crypto';
import CoinCard from '@/app/components/Card/CoinCard';
import Link from 'next/link';
import { getCryptoDetails } from '@/app/services/cryptos';
import { fetchCryptos } from '@/app/reducers/cryptoReducers';
import { useNameApp } from '@/app/hooks/useNameApp';

const CoinDetails = () => {
  const router = useRouter()
  const dispatch = useDispatch();

  useEffect(() => {
    const getCryptoDetailsData = async () => {
      const ryptosData = await getCryptoDetails(Number(router.query.id));
      dispatch(fetchCryptos(ryptosData));
    };
    getCryptoDetailsData();

  }, [dispatch, router.query.id]);

  const cryptoDetails = useSelector((state: RootState) => state.crypto.cryptos);

  useNameApp({
    title: `(${cryptoDetails.length}) - Cryptocurrencies`,
    description: 'Cryptocurrency Information'
  })

  return (
    <main className="min-h-screen">
      <section className='p-20'>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-start gap-4">
            <Link className={`rounded-md bg-slate-900 p-3 hover:bg-slate-700`} href="/"> Go Back</Link>
          </div>
          <div>
            <p className="text-4xl font-bold  mb-4">Cryptocurrency details</p>
            {cryptoDetails && cryptoDetails.length === 1 ?
              cryptoDetails.map((crypto: CryptoData) => (
                <div key={crypto.id}>
                  <CoinCard crypto={crypto} />
                </div>
              )) : <div>No data available</div>}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CoinDetails;