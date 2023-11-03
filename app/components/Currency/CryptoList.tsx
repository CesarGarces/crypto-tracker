import { type CryptoData } from '../../types/crypto';
import Link from 'next/link';
import CoinCard from '../Card/CoinCard';

const CryptoList = ({ crypto }: { crypto: CryptoData }) => {
  return (
    <Link className='text-black' href={`/currency/${crypto.id}`}>
      <CoinCard crypto={crypto} />
    </Link>
  )
}

export default CryptoList