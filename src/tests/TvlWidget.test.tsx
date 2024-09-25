import { render, screen, fireEvent } from '@testing-library/react';
import TvlWidget from '@/components/ui/TvlWidget';
import { describe, it, expect ,vi} from 'vitest';

describe('TvlWidget', () => {
  const mockOnClick = vi.fn();

  it('should display correct TVL and balance', () => {
    render(
      <TvlWidget
        tokenName="rETH"
        tvlInEth={10}
        tvlInUsd={30000}
        balance={5}
        currency='ETH'
      />
    );
    expect(screen.getAllByText(/rETH/).length).toBe(2);
    expect(screen.getAllByText(/TVL: ETH 10.00/).length).toBe(1);
    expect(screen.getAllByText(/Balance: 5.0000 rETH/).length).toBe(1);
  });
});
