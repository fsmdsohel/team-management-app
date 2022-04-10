import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {AuthenticationContextProvider} from "./context";

const Authentication = () => {
  const finishLogin = () => {};
  const finishSignUp = () => {};

  return (
    <AuthenticationContextProvider value={{finishLogin, finishSignUp}}>
      <Text>Authentication</Text>
    </AuthenticationContextProvider>
  );
};

export default Authentication;

const styles = StyleSheet.create({});
