import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {useEffect, useRef} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Icon, {Icons} from "components/Icons";
import * as Animatable from "react-native-animatable";
import {Home} from "./index";
import {useNavigation} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const animate1 = {
  0: {translateY: 7},
  1: {translateY: -18},
};
const animate2 = {
  0: {translateY: -18},
  1: {translateY: 7},
};

const TabButton = ({item, onPress, accessibilityState}) => {
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
    } else {
      viewRef.current.animate(animate2);
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={500}
        style={{justifyContent: "center", alignItems: "center"}}>
        <View style={styles.btn} />
      </Animatable.View>
      <Icon
        type={item.type}
        name={item.icon}
        color={focused ? "#246afd" : "#000"}
      />
    </TouchableOpacity>
  );
};

const CommonComponent = () => {
  return null;
};

const TabCommonBtn = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        switch (item.icon) {
          case "pluscircle":
            console.log("plus btn");
            break;
          case "message":
            navigation.navigate("ChatLists");
            break;
          case "ios-menu":
            navigation.navigate("Settings");
            break;
          default:
            break;
        }
      }}
      activeOpacity={1}
      style={styles.container}>
      <Icon type={item.type} name={item.icon} color="#000" />
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Pluscircle"
        component={CommonComponent}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabCommonBtn
              {...props}
              item={{
                type: Icons.AntDesign,
                icon: "pluscircle",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabButton
              {...props}
              item={{
                type: Icons.Entypo,
                icon: "home",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={CommonComponent}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabCommonBtn
              {...props}
              item={{
                type: Icons.Entypo,
                icon: "message",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={CommonComponent}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabCommonBtn
              {...props}
              item={{
                type: Icons.Ionicons,
                icon: "ios-menu",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    height: 80,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: "absolute",
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 12,
    transform: [{rotate: "45deg"}],
    backgroundColor: "#246afd",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -114,
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#246afd",
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: "center",
    color: "#246afd",
  },
});
