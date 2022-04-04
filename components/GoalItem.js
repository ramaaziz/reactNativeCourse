import { useState } from "react";
import { StyleSheet, Text, Pressable, View, Modal, Button } from "react-native";

function GoalItem(props) {
  const [modalDelete, modalVisible] = useState(false);
  function deleteModal() {
    modalVisible(true);
  }

  function closeDeleteModal() {
    modalVisible(false);
  }
  return (
    <View style={styles.goalList}>
      <Pressable android_ripple={{ color: "white" }} onPress={deleteModal}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
      <Modal visible={modalDelete} animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.text}>Are You Sure Delete List</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Delete"
                onPress={props.onDeleteItem.bind(this, props.id)}
              />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={closeDeleteModal} color="red" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalList: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "grey",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    padding: 70,
    backgroundColor: "grey",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    marginBottom: 13,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
  },
});
