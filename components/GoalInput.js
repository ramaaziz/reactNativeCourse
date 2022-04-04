import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={props.onClose} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 24,
    alignItems: "center",
    padding: 16,
    backgroundColor: "grey",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
    marginTop: 14,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
