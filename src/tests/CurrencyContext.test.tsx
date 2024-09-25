import { render, screen, fireEvent } from '@testing-library/react';
import { CurrencyProvider, useCurrency } from '@/context/CurrencyContext';
import { describe, it, expect, beforeEach } from 'vitest';

const TestComponent = () => {
  const { currency, toggleCurrency } = useCurrency();
  return (
    <>
      <p>Current Currency: {currency}</p>
      <button onClick={toggleCurrency}>Toggle</button>
    </>
  );
};

describe('CurrencyContext', () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  it('should default to ETH', () => {
    render(
      <CurrencyProvider>
        <TestComponent />
      </CurrencyProvider>
    );
    expect(screen.getByText(/Current Currency: ETH/)).toBeInTheDocument();
  });

  it('should toggle between ETH and USD', () => {
    render(
      <CurrencyProvider>
        <TestComponent />
      </CurrencyProvider>
    );
    fireEvent.click(screen.getByText('Toggle'));
    expect(screen.getByText(/Current Currency: USD/)).toBeInTheDocument();
  });

  it('should persist currency in localStorage', () => {
    render(
      <CurrencyProvider>
        <TestComponent />
      </CurrencyProvider>
    );
    fireEvent.click(screen.getByText('Toggle')); // Change to USD
    expect(localStorage.getItem('currency')).toBe('USD');
  });
});
