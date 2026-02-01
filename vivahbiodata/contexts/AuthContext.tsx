// "use client";

// import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import { 
//   User, 
//   signInWithPopup, 
//   signOut as firebaseSignOut,
//   onAuthStateChanged 
// } from 'firebase/auth';
// import { doc, setDoc, getDoc } from 'firebase/firestore';
// import { auth, googleProvider, db } from '@/lib/firebase';

// interface AuthContextType {
//   user: User | null;
//   loading: boolean;
//   signInWithGoogle: () => Promise<void>;
//   signOut: () => Promise<void>;
//   isAuthenticated: boolean;
// }

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   loading: true,
//   signInWithGoogle: async () => {},
//   signOut: async () => {},
//   isAuthenticated: false,
// });

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       setUser(user);
      
//       // Create user document if it doesn't exist
//       if (user) {
//         const userRef = doc(db, 'users', user.uid);
//         const userDoc = await getDoc(userRef);
        
//         if (!userDoc.exists()) {
//           await setDoc(userRef, {
//             email: user.email,
//             displayName: user.displayName,
//             photoURL: user.photoURL,
//             createdAt: new Date().toISOString(),
//             lastLogin: new Date().toISOString(),
//             draftsCount: 0,
//           });
//         } else {
//           // Update last login
//           await setDoc(userRef, {
//             lastLogin: new Date().toISOString(),
//           }, { merge: true });
//         }
//       }
      
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const signInWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//     } catch (error) {
//       console.error('Error signing in with Google:', error);
//       throw error;
//     }
//   };

//   const signOut = async () => {
//     try {
//       await firebaseSignOut(auth);
//     } catch (error) {
//       console.error('Error signing out:', error);
//       throw error;
//     }
//   };

//   return (
//     <AuthContext.Provider 
//       value={{ 
//         user, 
//         loading, 
//         signInWithGoogle, 
//         signOut,
//         isAuthenticated: !!user 
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within AuthProvider');
//   }
//   return context;
// };
