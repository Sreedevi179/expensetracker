// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCHmgJOaviPIeVxjyZpD_pbsrSrfW1EFs",
  authDomain: "expense-tracker-b3d1f.firebaseapp.com",
  projectId: "expense-tracker-b3d1f",
  storageBucket: "expense-tracker-b3d1f.appspot.com",
  messagingSenderId: "423990301050",
  appId: "1:423990301050:web:02441ba3fb9ce7623f46c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);