import React from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import Modal from "react-native-modal";
import VectorIcon from "react-native-vector-icons/Ionicons";

export default ModalScreen = ({children, modalVisible, setModalVisible}) => {
  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      style={styles.contentView}>
      <View style={styles.content}>
        <View style={styles.crossBtn}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <VectorIcon name="close" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 28,
    borderRadius: 22,
    margin: 22,
  },
  contentView: {
    justifyContent: "flex-end",
    margin: 0,
  },
  crossBtn: {
    position: "absolute",
    right: 10,
    top: 10,
    padding: 4,
  },
});
