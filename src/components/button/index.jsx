import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";
import useThemedStyles from "theme/useThemedStyles";

const Button = ({onPress = () => {}, title = "Button"}) => {
  const style = useThemedStyles(styles);
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={style.button}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = (theme) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme.colors.PRIMARY,
      paddingVertical: 18,
      borderRadius: 18,
      alignItems: "center",
      marginVertical: 10,
    },
    title: {
      fontFamily: "Lato-Regular",
      fontSize: 18,
      color: "#fff",
    },
  });
