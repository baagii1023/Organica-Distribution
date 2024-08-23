// LanguageContext.js
import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = (active) => {
    setLanguage(active);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
