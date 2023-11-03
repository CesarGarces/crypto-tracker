import { type CryptoData } from '../../types/crypto';

const CoinCard = ({ crypto }: { crypto: CryptoData }) => {
  return (
    <div className='bg-slate-950 p-4 rounded-md back-gray-200'>
      <div className="bg-slate-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal rounded-md">
        <div className="mb-8">
          <div className="font-bold text-xl mb-2 flex justify-between">
            <div className="text-slate-100">
              {crypto.name}
            </div>
            <div className="text-slate-400">
              {crypto.symbol}
            </div>
          </div>
          <p className="text-slate-100 text-base">Exchange: {crypto.price_usd} USD</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-slate-300 leading-none">Rank: {crypto.rank}</p>
            <p className="text-slate-300">Market Cap: {crypto.market_cap_usd}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinCard