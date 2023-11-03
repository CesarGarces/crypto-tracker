import { useRouter } from 'next/router'
import { type CryptoData } from '@/app/types/crypto';
import useHttpRequest from '@/app/hooks/useHttpRequest';
import CoinCard from '@/app/components/Card/CoinCard';
import Link from 'next/link';
import Hero from '@/app/components/Hero/Hero';

const CoinDetails = () => {
  const router = useRouter()
  const { data, error, isLoading } = useHttpRequest(`https://api.coinlore.net/api/ticker/?id=${router.query.id}`);

  if (Object.keys(error).length > 0) {
    return (
      <main className="min-h-screen p-20">
        <p>An error occurred</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-start gap-4">
          <Link className={`rounded-md bg-slate-900 p-3 hover:bg-slate-700`} href="/"> Go Back</Link>
        </div>
        <div>
          <p className="text-4xl font-bold  mb-4">Cryptocurrency details
          </p>
          {isLoading && <p>Loading...</p>}
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