// src/pages/index.tsx
import React from 'react';
import { useTVLData } from '@/hooks/useTVLData';
import TvlWidget from '@/components/ui/TvlWidget';
import TvlPieChart from '@/components/ui/TvlPieChart';
import ToggleButton from '@/components/ui/ToggleButton';
import { useCurrency } from './context/CurrencyContext';

const HomePage: React.FC = () => {
  const { tvlData, isLoading, error } = useTVLData();
  const { currency } = useCurrency();
  console.log({tvlData});
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading TVL data</div>;

  return (
    <div className="container mx-auto p-4">
      <ToggleButton />
      <div className="widgets grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {tvlData.map((token) => (
          <TvlWidget
            key={token.name}
            tokenName={token.name}
            tvlInEth={token.tvlInEth}
            tvlInUsd={token.tvlInUsd}
            balance={token.balance}
            currency={currency}
          />
        ))}
      </div>
      {/* center content */}
      <div className="chart mt-8 justify-center width-max flex">
        <TvlPieChart tvlData={tvlData} currency={currency} />
      </div>
    </div>
  );
};

export default HomePage;
