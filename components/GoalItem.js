import { StyleSheet, Text, Pressable, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalList}>
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
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
});
