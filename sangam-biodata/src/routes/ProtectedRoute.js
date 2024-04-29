import React from 'react';
import { Navigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';

const ProtectedRoute = ({ element: Component }) => {
  const user = firebase.auth().currentUser;

  return user ? <Component /> : <Navigate to="/auth" />;
};
export default ProtectedRoute;