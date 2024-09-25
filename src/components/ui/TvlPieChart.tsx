// src/components/ui/TvlPieChart.tsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { TokenTVLData } from '@/hooks/useTVLData';

interface TvlPieChartProps {
  tvlData: TokenTVLData[];
  currency: string;
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const TvlPieChart: React.FC<TvlPieChartProps> = ({ tvlData, currency }) => {

  const data = tvlData.map((item) => ({
    name: item.name,
    value: currency === 'USD' ? item.tvlInUsd : item.tvlInEth,
  }));

  return (
    <PieChart width={800} height={400}>
      <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default TvlPieChart;
