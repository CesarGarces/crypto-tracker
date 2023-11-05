import { lazy, Suspense } from 'react';
import Loading from '@/app/components/Loading/Loading';

const CryptoList = lazy(() => import('@/app/components/CryptoList/CryptoList'));
const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CryptoList />
    </Suspense>
  );
};

export default Home;