import React, {useEffect} from "react";
import LottieView from "lottie-react-native";
import {View, StyleSheet, Text, Dimensions} from "react-native";

import lottie from "../assets/login-spinner/lf30_editor_rvoddd2d.json";
import {SafeAreaView} from "react-native-safe-area-context";
import useThemedStyles from "../theme/useThemedStyles";

// import {useSelector} from "react-redux";

const Splash = ({navigation}) => {
  const windowHeight = Dimensions.get("window").height;

  // const session = useSelector((state) => state.session);

  useEffect(() => {
    myfunction();
  }, []);

  const myfunction = () => {
    setTimeout(() => {
      // if (session?.signInUserSession) {
      //   navigation.replace("ServiceList");
      // } else {
      //   navigation.replace("Login");
      // }
      navigation.replace("GetStarted");
    }, 300);
  };

  const style = useThemedStyles(styles);

  return (
    <SafeAreaView style={style.container}>
      <View style={[style.lottieWrapper, {height: windowHeight / 5}]}>
        <LottieView source={lottie} autoPlay loop />
      </View>
      <View>
        <Text style={style.label}>IconifySoft</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.BACKGROUND,
    },
    lottieWrapper: {
      width: "100%",
    },
    label: {
      fontSize: 28,
      fontFamily: "JosefinSans-Bold",
      color: theme.colors.PRIMARY,
    },
  });

export default Splash;
