import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import "react-native-gesture-handler";

import Signin from "./src/pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStackNavigator from "./src/navigators/AuthStackNavigator";

const RootStack = createStackNavigator();

export default function App() {
  console.log("run");
  return (
    <>
      <AuthStackNavigator />
    </>
  );
}
