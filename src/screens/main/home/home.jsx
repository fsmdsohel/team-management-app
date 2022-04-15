import {transform} from "@babel/core";
import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import VectorIcon from "react-native-vector-icons/Feather";

const Mome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.6} style={styles.profile}>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.Yq1qbePXtoh2fQBDOTtgJgHaFu?pid=ImgDet&rs=1",
            }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.search}>
          <VectorIcon name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.datePickerContainer}>
        <View style={styles.datePicker}>
          <TouchableOpacity style={styles.datePickerLeft}>
            <VectorIcon name="chevron-left" size={18} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.datePickerCenter}>
            <Text style={styles.dateSubLabel}>Monday, April 26</Text>
            <Text style={styles.dateLabel}>This Week</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.datePickerRight}>
            <VectorIcon name="chevron-right" size={18} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.taskContainer}>
        <View
          style={[
            styles.task,
            {
              backgroundColor: "#e4ecff",
              transform: [{rotate: "3deg"}],
            },
          ]}></View>
        <TouchableOpacity
          style={[
            styles.task,
            {
              backgroundColor: "#246afd",
              padding: 26,
            },
          ]}>
          <View style={styles.taskWrapper}>
            <Text style={styles.taskLabel}>App Design</Text>
            <Text style={styles.taskSubLabel}>Task manager ui kit</Text>
            <View style={styles.taskBtn}>
              <View style={styles.taskBtnRound}>
                <VectorIcon name="chevron-right" size={22} color="#5b5b5b" />
              </View>
              <Text style={styles.taskBtnLabel}>Details</Text>
            </View>
          </View>
          <View></View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Mome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  profile: {
    width: 44,
    height: 44,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#246afd",
    padding: 1,
  },
  search: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    alignItems: "center",
    justifyContent: "center",
  },
  datePickerContainer: {
    alignItems: "center",
  },
  datePicker: {
    flexDirection: "row",
    alignItems: "center",
  },
  datePickerLeft: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  datePickerRight: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  datePickerCenter: {
    alignItems: "center",
  },
  dateSubLabel: {
    fontFamily: "Lato-Bold",
    marginBottom: 4,
  },
  dateLabel: {
    fontFamily: "Lato-Bold",
    fontSize: 26,
    color: "#1e1e1e",
  },
  task: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 30,
  },
  taskContainer: {
    position: "relative",
    height: 160,
    width: "100%",
    marginVertical: 30,
  },
  taskWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  taskLabel: {
    fontFamily: "Lato-Bold",
    fontSize: 28,
    color: "#fff",
    marginBottom: 8,
  },
  taskSubLabel: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: "#cfdeff",
    marginBottom: 20,
  },
  taskBtn: {
    width: 110,
    height: 40,
    backgroundColor: "#7da6fe",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
  },
  taskBtnRound: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  taskBtnLabel: {
    color: "#fff",
    fontFamily: "Lato-Regular",
  },
});
