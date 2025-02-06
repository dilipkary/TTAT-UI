// /src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (authToken) {
      localStorage.setItem('token', authToken);
    }
  }, [authToken]);

  const login = (token) => setAuthToken(token);
  const logout = () => setAuthToken(null);

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};