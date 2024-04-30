import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged, setPersistence, browserLocalPersistence } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        console.log("Persistence mode set to local.");
        const unsubscribe = onAuthStateChanged(
          auth,
          (currentUser) => {
            console.log("onAuthStateChanged callback triggered");
            console.log("currentUser:", currentUser);
            setUser(currentUser);
          },
          (error) => {
            console.error("Error in onAuthStateChanged:", error);
          }
        );
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);