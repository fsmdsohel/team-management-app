import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React from "react";
import useThemedStyles from "theme/useThemedStyles";
import {useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {InputField} from "components";
import {Button} from "components";
import backIcon from "assets/back.png";
import VectorIcon from "react-native-vector-icons/FontAwesome";

const ProfileSetup = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={handleBack}>
        <View style={style.backBtn}>
          <Image style={style.backIcon} source={backIcon} />
        </View>
      </TouchableOpacity>
      <KeyboardAvoidingView style={style.keyboardAvoider}>
        <View style={style.profile}>
          <View style={style.profileWrapper}>
            <VectorIcon name="user" size={30} color="#1e1e1e" />
          </View>
          <Text style={style.profileLabel}>Upload Image</Text>
        </View>
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

export default ProfileSetup;

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
    profile: {
      alignItems: "center",
      justifyContent: "center",
    },
    profileWrapper: {
      height: 80,
      width: 80,
      borderRadius: 100,
      backgroundColor: "#f5f5f5",
      alignItems: "center",
      justifyContent: "center",
    },
    profileLabel: {
      marginTop: 10,
      marginBottom: 30,
      color: theme.colors.PRIMARY,
      fontFamily: theme.typography.fontFamily.REGULAR,
    },
  });
