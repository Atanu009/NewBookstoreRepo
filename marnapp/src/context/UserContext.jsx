// src/context/UserContext.js
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('userEmail');
    if (saved) setUserEmail(saved);
  }, []);

  const loginUser = (email) => {
    localStorage.setItem('userEmail', email);
    setUserEmail(email);
  };

  const logoutUser = () => {
    localStorage.removeItem('userEmail');
    setUserEmail(null);
  };

  return (
    <UserContext.Provider value={{ userEmail, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
