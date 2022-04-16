import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import useThemedStyles from "theme/useThemedStyles";
import {useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {InputField} from "components";
import {Button} from "components";
import backIcon from "assets/back.png";

const SignIn = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate("profileSetup");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity onPress={handleBack}>
          <View style={style.backBtn}>
            <Image style={style.backIcon} source={backIcon} />
          </View>
        </TouchableOpacity>
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
        <Button onPress={handleContinue} title="Continue" />
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
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    backBtn: {
      width: 30,
      height: 30,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.PRIMARY,
    },
    backIcon: {
      width: 12,
      height: 12,
      tintColor: "#fff",
      transform: [{rotate: "180deg"}],
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
