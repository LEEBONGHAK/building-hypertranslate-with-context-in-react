import React from 'react';
import { useFunc, useSetLang } from './context';

export default () => {
  const setLang = useSetLang();
  const { hyperTanslate } = useFunc();
  return (
    <>
      <h1>{hyperTanslate("Hello!")}</h1>
      <button onClick={() => setLang("es")}>Translate Spanish</button>
    </>
  );
};
