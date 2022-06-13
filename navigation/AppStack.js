import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/homeScreen';
import TestCompoent from '../screens/testComponent';
import ProfileScreen from '../screens/profileScreen';
import CarpoolingDetailsScreen from '../screens/carpoolingDetailsScreen';
import MapScreen from '../screens/mapScreen.jsx'
import EditeProfile from '../screens/editeProfile';

const Stack = createNativeStackNavigator();
import Tabb from './secondRouterApp'

const AppStack = () => {

return(
    <Stack.Navigator
      screenOptions={{
          headerShown: false
      }}
      initialRouteName={'Home'}
    >
      <Stack.Screen name="Home" component={Tabb} />
      <Stack.Screen name="CarpoolingDetails" component={CarpoolingDetailsScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="EditeProfile" component={EditeProfile} />

    
  </Stack.Navigator> 
);

}

 
export default AppStack; 
