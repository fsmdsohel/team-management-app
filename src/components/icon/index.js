import React from "react";
import {Animated, StyleSheet} from "react-native";

const useStyles = StyleSheet.create((theme) => ({
  text: {
    fontFamily: "MOVA-Icons",
  },
}));

const Icon = ({icon = "solid", size = 30, color = "black"}) => {
  const styles = useStyles();

  return (
    <Animated.Text
      style={[
        styles.text,
        {
          fontSize: size,
          color,
        },
      ]}
      allowFontScaling={false}>
      {icon}
    </Animated.Text>
  );
};

export default Icon;
