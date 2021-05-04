import React, { useMemo } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import Main from "../pages/Main";

import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthContext";

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  const auth = useMemo(
    () => ({
      login: async () => {
        console.log("login");
      },
      logout: async () => {
        console.log("logout");
      },
    }),
    []
  );

  return (
    <AuthContext value={auth}>
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
    </AuthContext>
  );
}

export default AuthStackNavigator;
