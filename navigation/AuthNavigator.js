import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResetPassword from '../screens/ResetPassword';

const RootStack = createNativeStackNavigator();

const AuthNavigator = ({ requestUserPermission }) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name='Login'
        component={LoginScreen}
      />
      <RootStack.Screen name='RegisterScreen' component={RegisterScreen} />
      <RootStack.Screen name='ResetPassword' component={ResetPassword} />
    </RootStack.Navigator>
  );
};

export default AuthNavigator;
