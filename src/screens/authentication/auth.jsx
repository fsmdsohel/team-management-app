import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, {useState} from "react";
import LottieView from "lottie-react-native";
import {useNavigation} from "@react-navigation/native";
import {Button} from "components";

import useThemedStyles from "theme/useThemedStyles";
import useTheme from "theme/useTheme";

import lottie from "assets/authentication/27649-lets-chat.json";
import lottie2 from "assets/authentication/lf30_editor_zstfpg3e.json";

const Auth = () => {
  const [swipeScreen, setSwipeScreen] = useState(false);

  setTimeout(() => setSwipeScreen(!swipeScreen), 10000);

  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate("loginEmail");
  };

  const handleSignInWithGoogle = () => {
    Alert.alert("Alert", "Sign in with Google feature coming soon!");
  };

  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <View style={style.container}>
      {swipeScreen ? (
        <>
          <View
            style={{
              height: windowHeight / 2.6,
              width: "100%",
              marginBottom: 20,
            }}>
            <LottieView source={lottie2} autoPlay loop />
          </View>
          <Text style={style.label}>
            Work With {"\n"}Team {"\n"}AnyTime
          </Text>
          <View style={style.dotWrapper}>
            <View style={[style.dot, {backgroundColor: "#ddd"}]} />
            <View
              style={[style.dot, {backgroundColor: theme.colors.PRIMARY}]}
            />
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              height: windowHeight / 2.6,
              width: "100%",
              marginBottom: 20,
            }}>
            <LottieView source={lottie} autoPlay loop />
          </View>
          <Text style={style.label}>
            Task, {"\n"}Calender {"\n"}Chat
          </Text>
          <View style={style.dotWrapper}>
            <View
              style={[style.dot, {backgroundColor: theme.colors.PRIMARY}]}
            />
            <View style={[style.dot, {backgroundColor: "#ddd"}]} />
          </View>
        </>
      )}
      <View style={{marginHorizontal: 16}}>
        <Button onPress={handleSignInWithGoogle} title="Sign in with Google" />
      </View>
      <TouchableOpacity onPress={handleSignIn} style={style.sign}>
        <Text style={style.signText}>
          Already have an account?{" "}
          <Text style={{color: theme.colors.PRIMARY}}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Auth;

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: theme.colors.BACKGROUND,
      padding: 20,
    },
    label: {
      fontFamily: "Lato-Bold",
      fontSize: 38,
      color: "#1e1e1e",
      paddingBottom: 20,
    },
    dotWrapper: {
      flexDirection: "row",
      paddingBottom: 30,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginRight: 10,
      marginLeft: 2,
    },
    sign: {
      alignItems: "center",
    },
    signText: {
      fontFamily: "Lato-Regular",
      fontSize: 16,
      marginVertical: 10,
      color: "#252525",
    },
  });
