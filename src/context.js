import React, { useState, useContext, createContext } from 'react';

// context : 어플리케이션의 데이터 저장소
const LangContext = createContext();

const Lang = ({ defaultLang, children, translations }) => {
  const [lang, setLang] = useState(defaultLang);
  const hyperTanslate = (text) => {

    if (lang === defaultLang) {
      return text;
    }
    return translations[lang][text];
  }
  return (
    <LangContext.Provider value={{ setLang, func: { setLang, hyperTanslate } }}>
      {children}
    </LangContext.Provider>
  );
};

export const useFunc = () => {
  const { func } = useContext(LangContext);
  return func;
};

export default Lang;