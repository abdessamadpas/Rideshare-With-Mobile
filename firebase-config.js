// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9MuQ8eRxecLiH9sAsUNn1ly-hom1yyEE",
  authDomain: "test-login-1f731.firebaseapp.com",
  projectId: "test-login-1f731",
  storageBucket: "test-login-1f731.appspot.com",
  messagingSenderId: "427110507586",
  appId: "1:427110507586:web:911e05a331b9af374d39db",
  measurementId: "G-9E2NQZ7RSQ"
};


// Initialize Firebase


 const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
