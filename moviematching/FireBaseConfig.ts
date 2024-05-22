// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHdagDFfadHB6lUJwi2Nfh7VN5bQCp1-8",
  authDomain: "moviematching-9caf9.firebaseapp.com",
  projectId: "moviematching-9caf9",
  storageBucket: "moviematching-9caf9.appspot.com",
  messagingSenderId: "687106286926",
  appId: "1:687106286926:web:80fcc3c6f3f5bb2a5c6a1f",
  measurementId: "G-T9MF7WCEP0"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
