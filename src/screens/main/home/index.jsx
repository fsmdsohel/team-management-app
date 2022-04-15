import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./home";

const Stack = createNativeStackNavigator();

const Notifications = () => {
  return (
    <View>
      <Text>hello from home</Text>
    </View>
  );
};

const HomeRouter = () => {
  return (
    <Stack.Navigator screenOptions={{animation: "fade", headerShown: false}}>
      <Stack.Screen name="nestedHome" component={Home} />
      <Stack.Screen name="nestedNotifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default HomeRouter;

const styles = StyleSheet.create({});
