import React, {createContext, useState} from 'react';
//import auth from '@react-native-firebase/auth';
import { auth,provider } from "../firebase-config";
//import { getAuth } from "firebase/auth";

import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword,signOut ,signInWithRedirect , signInWithPopup, GoogleAuthProvider } from "firebase/auth";//import {app} from '../firebase-config'

//import firestore from '@react-native-firebase/firestore';
//const auth = getAuth();
console.log(auth);
export const AuthContext = createContext();

export const AuthProvider = ({children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            console.log('login test');
            
            const currentUser = await signInWithEmailAndPassword(auth ,email, password);
            setUser(currentUser)
            console.log("login done");
          } catch (e) {
            console.log(e);
            console.log(e); console.log("LOGIN error ");
          }
        },
        googleLogin: ()=>{
          console.log('login with google start');
          signInWithRedirect(auth, provider);
          console.log('login with google done');

        }
        ,
        register: async (email, password) => {
          try {
            console.log("REGISTER start");
           const currentUser= await createUserWithEmailAndPassword(auth, email, password)
            setUser(currentUser)
            console.log("REGISTER done");
          }
              //ensure we catch any errors at this stage to advise us if something does go wrong
             
           catch (e) {
            console.log(e);
            console.log("REGISTER error");

          }
        },
        logout: async () => {
          try {

            console.log("start logout");
            await signOut(auth).then(() => {
              console.log(" logout DONE");  
              setUser(null)
                })
            
          } catch (e) {
            console.log(e);
            console.log(e); console.log("LOGOUT error");
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};