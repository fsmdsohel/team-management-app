import {useRoute} from "@react-navigation/native";
import React, {useEffect} from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import useNavigationContext from "../hook/useNavigationContext";

const Stack = createStackNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>hello from home</Text>
      <Button
        onPress={() => navigation.navigate("nestedNotifications")}
        title="Notification"
      />
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
    <Stack.Navigator>
      <Stack.Screen name="nestedHome" component={Home} />
      <Stack.Screen name="nestedNotifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default HomeRouter;

const styles = StyleSheet.create({});
