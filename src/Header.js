import React, { useContext } from 'react';
import { UseUser } from './context';

const Header = () => {
  const { name, loggedIn } = UseUser();
  return (
    <header>
      <a href="#">Home</a>Hello, {name}! you are {loggedIn ? "logged in" : "anonymous"}
    </header>
  );
};

export default Header;