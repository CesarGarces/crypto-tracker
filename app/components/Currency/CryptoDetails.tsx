import { useSelector } from 'react-redux';
import { RootState } from '../../types/crypto';

const CryptoDetails: React.FC = () => {
  const selectedCrypto = useSelector((state: RootState) => state.crypto.selectedCrypto);

  return (
    <div>
      {selectedCrypto ? (
        <div>
          <h2>Details for {selectedCrypto.name}</h2>
          <p>Symbol: {selectedCrypto.symbol}</p>
          <p>Price (USD): {selectedCrypto.price_usd}</p>
          {/* Mostrar más detalles según la estructura de tus datos */}
        </div>
      ) : (
        <p>Select a cryptocurrency to view details.</p>
      )}
    </div>
  );
};

export default CryptoDetails;