import {StyleSheet, Text, View, KeyboardAvoidingView} from "react-native";
import React from "react";
import useThemedStyles from "theme/useThemedStyles";
import {useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {InputField} from "components";
import {Button} from "components";

const SignIn = () => {
  const navigation = useNavigation();

  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={style.headerLabel}>Have Account? Log In</Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView style={style.keyboardAvoider}>
        <Text style={style.bodyLabel}>Sign Up</Text>
        <Text style={[style.bodySubLabel, {marginBottom: 30}]}>
          Sign up to continue.
        </Text>
        <Text style={[style.bodySubLabel, {marginBottom: 10, fontSize: 12}]}>
          YOUR EMAIL
        </Text>
        <View style={{marginBottom: 20}}>
          <InputField
            placeholder="Type here"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
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
        <Button onPress={() => {}} title="Continue" />
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;

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
  });
