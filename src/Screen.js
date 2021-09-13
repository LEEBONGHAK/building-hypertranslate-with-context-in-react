import React from 'react';
import { useFunc, useSetLang } from './context';

export default () => {
  const { setLang, hyperTanslate } = useFunc();
  return (
    <>
      <h1>{hyperTanslate("Hello!")}</h1>
      <button onClick={() => setLang("es")}>{hyperTanslate("Translate")} Spanish</button>
      <button onClick={() => setLang("en")}>{hyperTanslate("Translate")} English</button>
    </>
  );
};
