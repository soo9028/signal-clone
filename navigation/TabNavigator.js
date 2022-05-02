import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AddChatScreen from '../screens/AddChatScreen';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'heart-half-outline'
            : 'heart-half-outline';
        } else if (route.name === 'Add Chat') {
          iconName = focused ? 'add-outline' : 'add-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen options={{tabBarLabel:'Chats'}} name='Home' component={HomeScreen} />
      <Tab.Screen name='Add Chat' component={AddChatScreen}  />
    </Tab.Navigator>
  );
};

export default TabNavigator;