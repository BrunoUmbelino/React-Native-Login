import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import Main from "../pages/Main";

import { NavigationContainer } from "@react-navigation/native";

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AuthStack.Screen name={"Login"} component={Login} />
        <AuthStack.Screen name={"Main"} component={Main} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default AuthStackNavigator;
