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
        <View style={{height: windowHeight / 2.6, width: windowWidth}}>
          <LottieView source={lottie} autoPlay loop />
        </View>
        <View style={style.body}>
          <Text style={style.subLabel}>Task Management</Text>
          <View style={{flexDirection: "row"}}>
            <Text style={style.label}>
              Let's Create a Space For Your Workflows.
            </Text>
            <TouchableOpacity>
              <View>
                <Text>
                  <Icon name="arrow-right" size={30} color="#000" />
                </Text>
              </View>
            </TouchableOpacity>
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
      padding: 15,
    },
    subLabel: {
      color: theme.colors.PRIMARY,
      fontFamily: "Lato-Bold",
      fontSize: 16,
    },
    label: {
      fontFamily: "Lato-Bold",
      fontSize: 36,
      color: "#1e1e1e",
    },
  });
