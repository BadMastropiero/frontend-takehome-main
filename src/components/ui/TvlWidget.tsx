import React from 'react';
import { useCurrency } from '@/context/CurrencyContext';

interface TvlWidgetProps {
  tokenName: string;
  tvlInEth: number;
  tvlInUsd: number;
  balance: number;
  currency: string;
}

const TvlWidget: React.FC<TvlWidgetProps> = ({ tokenName, tvlInEth, tvlInUsd, balance, currency }) => {

  const displayValue = currency === 'USD' ? tvlInUsd : tvlInEth;
  const currencySymbol = currency === 'USD' ? '$' : 'ETH';

  return (
    <div
      className={`tvl-widget p-4 border rounded cursor-pointer`}
    >
      <h2 className="text-xl font-semibold">{tokenName}</h2>
      <p>{`Balance: ${balance?.toFixed(4)} ${tokenName}`}</p>
      <p>{`TVL: ${currencySymbol} ${displayValue?.toFixed(2)}`}</p>
    </div>
  );
};

export default TvlWidget;
