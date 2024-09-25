// src/components/ui/ToggleButton.tsx
import React from 'react';
import { useCurrency } from '@/context/CurrencyContext';

const ToggleButton: React.FC = () => {
  const { currency, toggleCurrency } = useCurrency();

  return (
    <button onClick={toggleCurrency} className="toggle-button p-2 bg-blue-500 text-white rounded">
      Show in {currency === 'USD' ? 'ETH' : 'USD'}
    </button>
  );
};

export default ToggleButton;
