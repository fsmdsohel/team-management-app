import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {GetStarted, Splash} from "./index";
import {ChatListsRouter, Main, SettingRouter} from "./main";
import Authentication from "./authentication";
import useNavigationContext from "./main/hook/useNavigationContext";

const Stack = createNativeStackNavigator();

function Router() {
  const routeNameRef = React.createRef();
  const navigationRef = React.createRef();

  const {setTabBarVisibility} = useNavigationContext();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          // Do something here with it
          if (currentRouteName === "nestedNotifications") {
            setTabBarVisibility(false);
          } else {
            setTabBarVisibility(true);
          }
        }

        // Save the current route name for later comparision
        routeNameRef.current = currentRouteName;
      }}>
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
