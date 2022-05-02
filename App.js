import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginNav from './navigation/AuthNavigator';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ResetPassword from './screens/ResetPassword';
import AuthNavigator from './navigation/AuthNavigator';
import RegisterScreen from './screens/RegisterScreen';
import AfterLoginNavigator from './navigation/AfterLoginNavigator';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const RootStack = createNativeStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2c68ed' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
};

export default function App() {

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={globalScreenOptions}>
        <RootStack.Screen  options={{headerShown:true, title:'Signal App Clone'}} name='AuthNavigator' component={AuthNavigator} />
        <RootStack.Screen options={{headerShown:false}} name='AfterLoginNavigator' component={AfterLoginNavigator}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
