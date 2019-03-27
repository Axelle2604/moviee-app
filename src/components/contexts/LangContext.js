import { createContext } from 'react';

const lang = {
  langValue: 'fr',
  toggleLang: () => null,
};

export const LangContext = createContext(lang);
