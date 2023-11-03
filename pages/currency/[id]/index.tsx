import { useRouter } from 'next/router'
import { CryptoData } from '../../../app/types/crypto';
import useHttpRequest from '@/app/hooks/useHttpRequest';
import CoinCard from '@/app/components/Card/CoinCard';
import Link from 'next/link';

const CoinDetails = () => {
  const router = useRouter()
  const { data, error } = useHttpRequest(`https://api.coinlore.net/api/ticker/?id=${router.query.id}`);

  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full max-w-2xl flex-col space-y-5  mb-4">
          <Link href="/"> Go Back</Link>
        </div>
        <div>
          <p className="text-4xl font-bold  mb-4">Cryptocurrency details
          </p>
          {data ?
            data.map((crypto: CryptoData) => (
              <div key={crypto.id}>
                <CoinCard crypto={crypto} />
              </div>
            )) : <div>No data available</div>}
        </div>
      </div>
    </main>
  );
};

export default CoinDetails;