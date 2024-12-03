import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const TaskCard = ({ taskName, details, rate, value }) => {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <Text style={styles.checkmark}>✔</Text>
      </View>
      <View>
        <Text style={styles.taskName}>{taskName}</Text>
        <Text style={styles.details}>{details}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.rate}>Rs. {rate} / km</Text>
        <View style={styles.counter}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{value}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {[...Array(3)].map((_, index) => (
        <TaskCard
          key={index}
          taskName="Task Name"
          details="Details"
          rate="25"
          value="5"
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
  },
  card: {
    backgroundColor: "#E0F7FF",
    borderRadius: 12,
    width: 150,
    height: 150,
    padding: 10,
    marginHorizontal: 9,
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: "#00AFFF",
    height: 140,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  checkmark: {
    color: "#fff",
    fontWeight: "bold",
  },
  taskName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  details: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rate: {
    fontSize: 12,
    color: "#333",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00AFFF",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginHorizontal: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  counterText: {
    fontSize: 14,
    marginHorizontal: 4,
  },
});
