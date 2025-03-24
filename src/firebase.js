import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, onSnapshot, setDoc, arrayUnion, arrayRemove, updateDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPwEkq14ujW78bocG-X5UKMrZNC6oUmMo",
  authDomain: "dedinstenebs.firebaseapp.com",
  projectId: "dedinstenebs",
  storageBucket: "dedinstenebs.firebasestorage.app",
  messagingSenderId: "330325865129",
  appId: "1:330325865129:web:c3ca41f27c4f138a3a6fb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, doc, onSnapshot, setDoc, arrayRemove, arrayUnion, updateDoc };

