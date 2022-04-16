import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {useEffect, useRef, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon, {Icons} from "components/Icons";
import * as Animatable from "react-native-animatable";
import {Home} from "./index";
import {useNavigation} from "@react-navigation/native";
import useNavigationContext from "./hook/useNavigationContext";
import VectorIcon from "react-native-vector-icons/MaterialCommunityIcons";
import OctionsIcon from "react-native-vector-icons/Octicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import {Modal} from "components";

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

const TabCommonBtn = ({item, setModalVisible}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        switch (item.icon) {
          case "pluscircle":
            setModalVisible(true);
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

const ModalLabel = ({icon, onPress, label}) => (
  <>
    <TouchableOpacity
      style={styles.modalItem}
      activeOpacity={0.6}
      onPress={onPress}>
      <View style={styles.modalBtn}>{icon}</View>
      <Text style={styles.modalLabel}>{label}</Text>
    </TouchableOpacity>
    <View style={styles.divider} />
  </>
);

export default function AnimTab1() {
  const {tabBarVisibility} = useNavigationContext();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: [
            styles.tabBar,
            {display: tabBarVisibility ? "flex" : "none"},
          ],
          tabBarHideOnKeyboard: true,
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
                setModalVisible={setModalVisible}
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
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <ModalLabel
          label="Create Task"
          onPress={() => console.log("first")}
          icon={<VectorIcon name="plus" size={18} color="#fff" />}
        />
        <ModalLabel
          label="Create Project"
          onPress={() => console.log("second")}
          icon={<OctionsIcon name="project" size={10} color="#fff" />}
        />
        <ModalLabel
          label="Create Team"
          onPress={() => console.log("third")}
          icon={<FontAwesomeIcon name="users" size={10} color="#fff" />}
        />
      </Modal>
    </>
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
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  modalBtn: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#246afd",
  },
  modalLabel: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: "#444",
  },
  divider: {
    borderWidth: 0.6,
    borderColor: "#ddd",
  },
});
