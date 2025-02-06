// /src/routes/PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { authToken } = useContext(AuthContext);
  return authToken ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;