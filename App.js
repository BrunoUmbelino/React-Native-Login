import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Signin from "./src/pages/Signin";

export default function App() {
  console.log("run");
  return (
    <View>
      <StatusBar style="light" />
      <Signin />
    </View>
  );
}
