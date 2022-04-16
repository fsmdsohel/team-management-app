import {StyleSheet, Text, View, KeyboardAvoidingView} from "react-native";
import React from "react";
import useThemedStyles from "theme/useThemedStyles";
import {TouchableOpacity} from "react-native-gesture-handler";
import {InputField} from "components";
import {Button} from "components";
import {useNavigation} from "@react-navigation/native";

const Password = () => {
  const navigation = useNavigation();
  const handleContinue = () => {
    navigation.navigate("loginPassword");
  };

  const handleCreateAccount = () => {
    navigation.navigate("signIn");
  };

  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={style.headerLabel}>Create a Account</Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView style={style.keyboardAvoider}>
        <Text style={style.bodyLabel}>Log In</Text>
        <Text style={[style.bodySubLabel, {marginBottom: 30}]}>
          Useing <Text style={style.email}>example@mova.ie</Text> to log in
        </Text>
        <Text style={[style.bodySubLabel, {marginBottom: 10, fontSize: 12}]}>
          YOUR PASSWORD
        </Text>
        <View style={{marginBottom: 20}}>
          <InputField
            placeholder="Type here"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>
        <Button onPress={handleContinue} title="Continue" />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Password;

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
      paddingHorizontal: 36,
      paddingVertical: 26,
    },
    keyboardAvoider: {
      flex: 1,
      justifyContent: "center",
    },
    header: {
      alignItems: "flex-end",
    },
    headerLabel: {
      textDecorationLine: "underline",
      fontFamily: theme.typography.fontFamily.REGULAR,
      fontSize: theme.typography.size.S,
      color: theme.colors.TEXT,
    },
    bodyLabel: {
      fontFamily: theme.typography.fontFamily.BOLD,
      fontSize: theme.typography.size.L,
      color: theme.colors.TEXT,
      marginVertical: 10,
    },
    bodySubLabel: {
      fontFamily: theme.typography.fontFamily.REGULAR,
      fontSize: theme.typography.size.S,
      color: theme.colors.TEXT_SECONDARY,
    },
    email: {
      color: theme.colors.TEXT,
      fontFamily: theme.typography.fontFamily.BOLD,
    },
  });
