import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const ProtectedRoute = ({ element: Component }) => {
  const user = auth.currentUser; // Use auth directly to check the current user state

  return user ? <Component /> : <Navigate to="/auth" />;
};
export default ProtectedRoute;