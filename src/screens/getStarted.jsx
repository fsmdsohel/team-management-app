import React from "react";
import {StyleSheet, Text, View, Dimensions} from "react-native";
import LottieView from "lottie-react-native";

import lottie from "../assets/get-started/lf30_editor_km3uye3u.json";
import useThemedStyles from "theme/useThemedStyles";
import {TouchableOpacity} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";

const GetStarted = () => {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

  const style = useThemedStyles(styles);

  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <View
          style={{
            height: windowHeight / 2.6,
            width: windowWidth,
            marginBottom: 20,
          }}>
          <LottieView source={lottie} autoPlay loop />
        </View>
        <View style={style.body}>
          <Text style={style.subLabel}>Task Management</Text>
          <View style={style.bodyWrapper}>
            <View style={{flex: 1.5}}>
              <Text style={style.label}>
                Let's Create a Space For Your Workflows.
              </Text>
              <TouchableOpacity>
                <View style={style.button}>
                  <Text style={style.buttonText}>Get Start</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={style.boxWrapper}>
              <View style={{position: "relative", right: -100}}>
                <TouchableOpacity>
                  <View style={style.box} />
                  <View style={style.arrowRight}>
                    <Icon name="arrow-right" size={30} color="#171a20" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = (theme) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
    wrapper: {},
    body: {
      padding: 20,
    },
    subLabel: {
      color: theme.colors.PRIMARY,
      fontFamily: "Lato-Bold",
      fontSize: 16,
      marginBottom: 20,
    },
    label: {
      fontFamily: "Lato-Bold",
      fontSize: 38,
      color: "#1e1e1e",
    },
    bodyWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    boxWrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      width: 150,
      height: 150,
      margin: 20,
      borderRadius: 40,
      backgroundColor: "#e4ecff",
      transform: [{rotate: "40deg"}],
    },
    button: {
      backgroundColor: theme.colors.PRIMARY,
      alignItems: "center",
      width: 130,
      borderRadius: 10,
      paddingVertical: 12,
      marginVertical: 40,
    },
    arrowRight: {
      position: "absolute",
      top: "50%",
      left: 40,
      transform: [{translateY: -14}],
    },
    buttonText: {
      fontFamily: "Lato-Bold",
      color: "#fff",
      fontSize: 16,
    },
  });
