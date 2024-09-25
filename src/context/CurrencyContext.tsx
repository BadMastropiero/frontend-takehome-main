// src/context/CurrencyContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

type Currency = 'USD' | 'ETH';

interface CurrencyContextProps {
  currency: Currency;
  toggleCurrency: () => void;
}

const CurrencyContext = createContext<CurrencyContextProps | undefined>(undefined);

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('ETH');

  useEffect(() => {
    const savedCurrency = localStorage.getItem('currency');
    if (savedCurrency === 'USD' || savedCurrency === 'ETH') {
      setCurrency(savedCurrency);
    }
  }, []);
 
  const toggleCurrency = () => {
    setCurrency((prev) => {
      const newCurrency = prev === 'USD' ? 'ETH' : 'USD';
      localStorage.setItem('currency', newCurrency);
      return newCurrency
    });
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
