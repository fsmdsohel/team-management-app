import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {GetStarted, Splash} from "./index";
import {ChatListsRouter, Main, SettingRouter} from "./main";
import Authentication from "./authentication";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen
          name="ChatLists"
          options={{animation: "slide_from_bottom"}}
          component={ChatListsRouter}
        />
        <Stack.Screen
          name="Settings"
          options={{animation: "slide_from_bottom"}}
          component={SettingRouter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
