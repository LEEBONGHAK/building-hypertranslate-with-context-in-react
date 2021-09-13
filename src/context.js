import React, { useState, useContext } from 'react';

// context : 어플리케이션의 데이터 저장소
const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState({
    name: "BongHak",
    loggedIn: false
  });
  const logUserIn = () => setUser({ ...user, loggedIn: true });
  const logUserOut = () => setUser({ ...user, loggedIn: false });
  return (
    <UserContext.Provider value={{ user, func: { logUserIn, logUserOut } }}>
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const UseFuncs = () => {
  const { func } = useContext(UserContext);
  return func;
}

export default UserContextProvider;