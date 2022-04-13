import React from "react";
import {StyleSheet, View, StatusBar} from "react-native";
import {AuthenticationContextProvider} from "./context";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import useThemedStyles from "theme/useThemedStyles";
import Auth from "./auth";
import Login from "./login";

const LoginStack = createStackNavigator();

const Authentication = () => {
  const navigation = useNavigation();

  const finishLogin = () => {};
  const finishSignUp = () => {};

  const style = useThemedStyles(styles);

  return (
    <AuthenticationContextProvider value={{finishLogin, finishSignUp}}>
      <View style={style.screen}>
        <StatusBar barStyle="light-content" animated />
        <LoginStack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.ScaleFromCenterAndroid,
          }}>
          <LoginStack.Screen name="auth" component={Auth} />
          <LoginStack.Screen name="loginEmail" component={Login.Email} />
          <LoginStack.Screen name="loginPassword" component={Login.Password} />
        </LoginStack.Navigator>
      </View>
    </AuthenticationContextProvider>
  );
};

export default Authentication;

const styles = (theme) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.colors.PRIMARY,
    },
  });
