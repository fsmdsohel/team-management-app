import {StyleSheet, Text, View} from "react-native";
import React from "react";
import useThemedStyles from "theme/useThemedStyles";

const ProfileSetup = () => {
  const style = useThemedStyles(styles);
  return (
    <View>
      <Text>ProfileSetup</Text>
    </View>
  );
};

export default ProfileSetup;

const styles = (theme) => StyleSheet.create({});
