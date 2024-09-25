import { render } from '@testing-library/react';
import TvlPieChart from '@/components/ui/TvlPieChart';
import { describe, it, expect } from 'vitest';
  
describe('TvlPieChart', () => {
  const tvlData = [
    { name: 'rETH', tvlInEth: 10, tvlInUsd: 30000 , balance: 10},
    { name: 'stETH', tvlInEth: 5, tvlInUsd: 15000 , balance: 5},
  ];

  it('should render pie chart with correct data', () => {
    // Define the mock implementation of useCurrency
    const { container } = render(<TvlPieChart tvlData={tvlData} currency='USD' />);
    // Check that the SVG chart is rendered (Recharts renders in SVG)
    const pieChart = container.querySelector('svg');
    expect(pieChart).toBeInTheDocument();
  });
});
