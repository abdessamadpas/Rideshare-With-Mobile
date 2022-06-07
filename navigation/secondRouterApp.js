import { View, Text } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddPostScreen from '../screens/AddPostScreen';
import HomeScreen from '../screens/homeScreen';
import TestCompoent from '../screens/testComponent';
import ProfileScreen from '../screens/profileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const tab = () => (
        <Tab.Navigator
        screenOptions={{
          headerShown: false
        }} 
            tabBarOptions={{
              activeTintColor: '#2e64e5',
            }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={({route}) => ({
                tabBarLabel: 'Home',
                 tabBarVisible: false,
                tabBarIcon: ({color, size, focused}) => (
                  <MaterialCommunityIcons
                    name="home-outline"
                    color={color}
                    size={size}
                  />
                ),
              })}
            />
            <Tab.Screen
            name="AddPostScreen"
            component={AddPostScreen}
            options={({route}) => ({
              tabBarLabel: 'add offre',
               tabBarVisible: false,
              tabBarIcon: ({color, size, focused}) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={color}
                  size={size}
                />
              ),
            })}
          />
            
            <Tab.Screen
              name="chat"
              component={TestCompoent}
              options={({route}) => ({
                tabBarVisible: false,
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
               tabBarLabel: 'profile',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="person-outline" color={color} size={size} />
              ),
            }}
          />
          </Tab.Navigator>
      
  
    )

export default tab