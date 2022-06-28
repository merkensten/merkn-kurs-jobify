import React from 'react';
import { Navigate } from 'react-router-dom';

// internal imports
import { useAppContext } from '../exports/contexts';

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();

  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
