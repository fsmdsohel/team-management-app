import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Modal} from "components";

const Stack = createNativeStackNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>hello from notification</Text>
      <Button
        onPress={() => navigation.navigate("nestedNotifications")}
        title="Notification"
      />
      <Modal />
    </View>
  );
};
const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>hello from home</Text>
      <Button onPress={() => navigation.navigate("nestedHome")} title="Home" />
    </View>
  );
};

const HomeRouter = () => {
  return (
    <Stack.Navigator screenOptions={{animation: "fade", headerShown: false}}>
      <Stack.Screen name="nestedHome" component={Home} />
      <Stack.Screen name="nestedNotifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default HomeRouter;

const styles = StyleSheet.create({});
