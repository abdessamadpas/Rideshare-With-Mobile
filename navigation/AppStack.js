import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/homeScreen';
import TestCompoent from '../screens/testComponent';
import ProfileScreen from '../screens/profileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => (
  <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          tabBarLabel: 'Home',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="test"
        component={TestCompoent}
        options={({route}) => ({
          tabBarVisible: true,
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        // tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="person-outline" color={color} size={size} />
        ),
      }}
    />
    </Tab.Navigator>
);

 
export default AppStack;
