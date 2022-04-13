import React from "react";
import {View, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import Icon from "../icon";
import useThemedStyles from "theme/useThemedStyles";
import useTheme from "theme/useTheme";
import VectorIcon from "react-native-vector-icons/MaterialCommunityIcons";

const InputField = ({
  value,
  onChangeText,
  sanitizeRegEx = /[]/g,
  containerStyle,
  secureTextEntry,
  ...props
}) => {
  const theme = useTheme();

  const [val, setVal] = React.useState(value || "");
  React.useEffect(() => {
    if (value === undefined) return;
    setVal(value);
  }, [value]);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleChangeText = (newVal) => {
    const val = newVal.trim().replace(sanitizeRegEx, "");
    if (onChangeText) onChangeText(val);
    if (value === undefined) setVal(val);
  };

  const style = useThemedStyles(styles);

  return (
    <View style={[style.container, containerStyle]}>
      <TextInput
        placeholderTextColor="#9d9b9b"
        keyboardAppearance="light"
        returnKeyType="default"
        autoCapitalize="none"
        autoFocus={true}
        value={val}
        onChangeText={handleChangeText}
        style={style.input}
        secureTextEntry={secureTextEntry && !showPassword}
        {...props}
      />
      {!!secureTextEntry && (
        <TouchableOpacity
          style={style.showPasswordButton}
          onPress={() => setShowPassword((show) => !show)}>
          <Icon
            icon={
              <VectorIcon
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color="#000"
              />
            }
            size={22}
            color="rgb(160,160,160)"
          />
        </TouchableOpacity>
      )}
      {!secureTextEntry && val.length > 0 && (
        <TouchableOpacity
          style={style.clearButton}
          onPress={() => handleChangeText("")}>
          <Icon
            icon={<VectorIcon name="close" size={20} color="#000" />}
            size={14}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      height: 50,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0.5,
        height: 0.5,
      },
      shadowOpacity: 0.15,
      shadowRadius: 0.5,
      elevation: 1,
    },
    input: {
      paddingLeft: 16,
      paddingRight: 6,
      color: "black",
      flex: 1,
      height: 50,
    },
    clearButton: {
      backgroundColor: "#e1e1e1",
      width: 24,
      height: 24,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10,
      opacity: 0.7,
    },
    showPasswordButton: {
      padding: 15,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default InputField;
