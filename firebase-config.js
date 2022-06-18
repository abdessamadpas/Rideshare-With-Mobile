// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {
  apiKey: "AIzaSyB9MuQ8eRxecLiH9sAsUNn1ly-hom1yyEE",
  authDomain: "test-login-1f731.firebaseapp.com",
  databaseURL: "https://test-login-1f731-default-rtdb.firebaseio.com",
  projectId: "test-login-1f731",
  storageBucket: "test-login-1f731.appspot.com",
  messagingSenderId: "427110507586",
  appId: "1:427110507586:web:911e05a331b9af374d39db",
  measurementId: "G-9E2NQZ7RSQ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);;
export const dbFirestore = getFirestore(app);
//export { firebase }
