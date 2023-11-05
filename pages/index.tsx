import { lazy, Suspense } from 'react';
import Loading from '@/app/components/Loading/Loading';

const CryptoList = lazy(() => import('../app/components/CryptoList/CryptoList'));
const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CryptoList
        id={0}
        name={''}
        price_usd={0}
        symbol={''}
        rank={0}
        market_cap_usd={0}
        currency={''}
      />
    </Suspense>
  );
};

export default Home;