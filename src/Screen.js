import React from 'react';
import Header from './Header';
import { UseFuncs } from './context';

const Screen = () => {
  const { logUserIn, logUserOut } = UseFuncs();
  return (
    <div>
      <Header />
      <h1>First screen</h1>
      <button onClick={logUserIn}>Log In</button>
      <button onClick={logUserOut}>Log Out</button>
    </div>
  );
};

export default Screen;