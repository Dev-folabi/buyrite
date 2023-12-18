// Importing necessary functions and modules from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Firebase configuration for the web app
const firebaseConfig = {
  apiKey: "AIzaSyCv2sBCBkYnb5b2Y9higFwb73m2e6aslTU",
  authDomain: "buyrite-db.firebaseapp.com",
  projectId: "buyrite-db",
  storageBucket: "buyrite-db.appspot.com",
  messagingSenderId: "24082521290",
  appId: "1:24082521290:web:a5e084ba04453bb9a02833"
};

// Initializing Firebase with the provided configuration
const firebaseApp = initializeApp(firebaseConfig);

// Creating a GoogleAuthProvider instance and setting custom parameters for Google sign-in
const provider = new GoogleAuthProvider();
provider.getCustomParameters({
    prompt: 'select_account'
});

// Exporting authentication and database instances for external use
export const auth = getAuth();
export const db = getFirestore();

// Function to initiate Google sign-in popup
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

// Function to create a user document in Firestore based on authentication information
export const createDocumentUserFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  
  const userSnapshot = await getDoc(userDocRef);

  // Checking if the user document already exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Creating the user document in Firestore with additional information
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo });
    } catch (error) {
      console.log('Error creating the user', error.message);
    }
  }

  return userDocRef;
};

// Function to create a user with email and password authentication
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  // Checking if email and password are provided
  if (!email || !password) return;

  // Creating user with email and password authentication
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Function to sign in user with email and password authentication
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  // Checking if email and password are provided
  if (!email || !password) return;

  // Creating user with email and password authentication
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async ()=> signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
