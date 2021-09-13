import React from 'react';
import { useState } from 'react';

// context : 어플리케이션의 데이터 저장소
export const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState({
    name: "BongHak",
    loggedIn: false
  });
  const logUserIn = () => setUser({ ...user, loggedIn: true });
  const logUserOut = () => setUser({ ...user, loggedIn: false });
  return (
    <UserContext.Provider value={{ user, logUserIn, logUserOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;