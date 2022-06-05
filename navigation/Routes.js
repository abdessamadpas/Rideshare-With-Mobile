import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import auth from '@react-native-firebase/auth';
import { auth } from "../firebase-config";
import { getAuth } from "firebase/auth";
import {AuthContext} from './AuthProvider';

// Auth and  App stack
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
  const auth = getAuth()
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  
  // const onAuthStateChanged = (user) => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };
  
  // useEffect(() => { 
  //   const subscriber = onAuthStateChanged(auth,onAuthStateChanged);
    
  //   console.log("wewewewewe",subscriber);
  //   return subscriber;
    
  // }, []);

  // if (initializing) return null;
  useEffect(() => {
    //console.log(user);
    console.log(auth);
  }, [user])
  

  return (
    <NavigationContainer  >
      {auth.currentUser ? <AppStack /> : <AppStack />}
    </NavigationContainer>
  );
};


export default Routes;