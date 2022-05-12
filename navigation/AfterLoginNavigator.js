import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabNavigator from "./TabNavigator";

const Rootstack = createNativeStackNavigator();

const AfterLoginNavigator = () => {
  return (
    <Rootstack.Navigator>
      <Rootstack.Screen
        name="TabNavigator"
        options={{ headerShown: false }}
        component={TabNavigator}
      />
    </Rootstack.Navigator>
  );
};

export default AfterLoginNavigator;