import React, { createContext, useContext, useState, useEffect } from 'react';

export type CountryCode = 'cm' | 'ng' | 'ke' | 'gh' | 'ci' | 'ao' | 'za' | 'global';

interface Country {
  code: CountryCode;
  name: string;
  flag: string;
  currency: string;
  languages: string[];
}

export const countries: Country[] = [
  { code: 'global', name: 'Global', flag: '🌍', currency: 'USD', languages: ['en'] },
  { code: 'cm', name: 'Cameroon', flag: '🇨🇲', currency: 'XAF', languages: ['fr', 'en'] },
  { code: 'ng', name: 'Nigeria', flag: '🇳🇬', currency: 'NGN', languages: ['en'] },
  { code: 'ke', name: 'Kenya', flag: '🇰🇪', currency: 'KES', languages: ['en'] },
  { code: 'gh', name: 'Ghana', flag: '🇬🇭', currency: 'GHS', languages: ['en'] },
  { code: 'ci', name: 'Côte d\'Ivoire', flag: '🇨🇮', currency: 'XOF', languages: ['fr'] },
  { code: 'ao', name: 'Angola', flag: '🇦🇴', currency: 'AOA', languages: ['pt'] },
  { code: 'za', name: 'South Africa', flag: '🇿🇦', currency: 'ZAR', languages: ['en'] },
];

interface CountryContextType {
  country: Country;
  setCountryByCode: (code: CountryCode) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [country, setCountry] = useState<Country>(countries[0]);

  useEffect(() => {
    const savedCountry = localStorage.getItem('fluide_country');
    if (savedCountry) {
      const found = countries.find(c => c.code === savedCountry);
      if (found) setCountry(found);
    }
  }, []);

  const setCountryByCode = (code: CountryCode) => {
    const found = countries.find(c => c.code === code);
    if (found) {
      setCountry(found);
      localStorage.setItem('fluide_country', code);
    }
  };

  return (
    <CountryContext.Provider value={{ country, setCountryByCode }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};
