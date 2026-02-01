// import { 
//   collection, 
//   doc, 
//   setDoc, 
//   getDoc, 
//   getDocs, 
//   deleteDoc, 
//   query, 
//   where, 
//   orderBy, 
//   limit,
//   Timestamp 
// } from 'firebase/firestore';
// import { db } from '@/lib/firebase';

// export interface BiodataDraft {
//   id?: string;
//   userId: string;
//   name: string;
//   templateId: string;
//   colorTheme?: string;
//   data: any;
//   visibleSections: any;
//   createdAt: string;
//   updatedAt: string;
// }

// /**
//  * Save draft to Firestore
//  */
// export async function saveDraftToFirestore(
//   userId: string, 
//   draftData: Omit<BiodataDraft, 'id' | 'userId' | 'createdAt' | 'updatedAt'>
// ): Promise<string> {
//   try {
//     const biodataRef = doc(collection(db, 'biodatas'));
//     const now = new Date().toISOString();
    
//     const draft: BiodataDraft = {
//       userId,
//       ...draftData,
//       createdAt: now,
//       updatedAt: now,
//     };

//     await setDoc(biodataRef, draft);
    
//     // Update user's draft count
//     const userRef = doc(db, 'users', userId);
//     const userDoc = await getDoc(userRef);
//     const currentCount = userDoc.exists() ? (userDoc.data().draftsCount || 0) : 0;
    
//     await setDoc(userRef, {
//       draftsCount: currentCount + 1
//     }, { merge: true });

//     return biodataRef.id;
//   } catch (error) {
//     console.error('Error saving draft to Firestore:', error);
//     throw error;
//   }
// }

// /**
//  * Update existing draft in Firestore
//  */
// export async function updateDraftInFirestore(
//   draftId: string,
//   draftData: Partial<Omit<BiodataDraft, 'id' | 'userId' | 'createdAt'>>
// ): Promise<void> {
//   try {
//     const draftRef = doc(db, 'biodatas', draftId);
    
//     await setDoc(draftRef, {
//       ...draftData,
//       updatedAt: new Date().toISOString(),
//     }, { merge: true });
//   } catch (error) {
//     console.error('Error updating draft in Firestore:', error);
//     throw error;
//   }
// }

// /**
//  * Get user's drafts from Firestore
//  */
// export async function getUserDrafts(userId: string): Promise<BiodataDraft[]> {
//   try {
//     const draftsRef = collection(db, 'biodatas');
//     const q = query(
//       draftsRef,
//       where('userId', '==', userId),
//       orderBy('updatedAt', 'desc'),
//       limit(2)
//     );

//     const querySnapshot = await getDocs(q);
//     const drafts: BiodataDraft[] = [];

//     querySnapshot.forEach((doc) => {
//       drafts.push({
//         id: doc.id,
//         ...doc.data()
//       } as BiodataDraft);
//     });

//     return drafts;
//   } catch (error) {
//     console.error('Error getting user drafts:', error);
//     throw error;
//   }
// }

// /**
//  * Get single draft from Firestore
//  */
// export async function getDraftById(draftId: string): Promise<BiodataDraft | null> {
//   try {
//     const draftRef = doc(db, 'biodatas', draftId);
//     const draftDoc = await getDoc(draftRef);

//     if (!draftDoc.exists()) {
//       return null;
//     }

//     return {
//       id: draftDoc.id,
//       ...draftDoc.data()
//     } as BiodataDraft;
//   } catch (error) {
//     console.error('Error getting draft:', error);
//     throw error;
//   }
// }

// /**
//  * Delete draft from Firestore
//  */
// export async function deleteDraftFromFirestore(
//   userId: string,
//   draftId: string
// ): Promise<void> {
//   try {
//     await deleteDoc(doc(db, 'biodatas', draftId));
    
//     // Update user's draft count
//     const userRef = doc(db, 'users', userId);
//     const userDoc = await getDoc(userRef);
//     const currentCount = userDoc.exists() ? (userDoc.data().draftsCount || 0) : 0;
    
//     await setDoc(userRef, {
//       draftsCount: Math.max(0, currentCount - 1)
//     }, { merge: true });
//   } catch (error) {
//     console.error('Error deleting draft from Firestore:', error);
//     throw error;
//   }
// }

// /**
//  * Check if user can create more drafts (max 2)
//  */
// export async function canCreateDraft(userId: string): Promise<boolean> {
//   try {
//     const drafts = await getUserDrafts(userId);
//     return drafts.length < 2;
//   } catch (error) {
//     console.error('Error checking draft limit:', error);
//     return false;
//   }
// }
