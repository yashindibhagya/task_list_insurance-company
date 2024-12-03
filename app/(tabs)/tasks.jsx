import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

export default function TaskDetailsScreen() {
  const [tasks, setTasks] = useState([
    { id: "1", name: "Task 1", details: "Details about Task 1", price: "Rs. 25 / km", completed: false, distance: "" },
    { id: "2", name: "Task 2", details: "Details about Task 2", price: "Rs. 25 / km", completed: false, distance: "" },
    { id: "3", name: "Task 3", details: "Details about Task 3", price: "Rs. 25 / km", completed: false, distance: "" },
    { id: "4", name: "Task 4", details: "Details about Task 4", price: "Rs. 25 / km", completed: false, distance: "" },
  ]);

  const [activeTab, setActiveTab] = useState("Tasks");

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDistanceChange = (text, id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, distance: text } : task
      )
    );
  };

  const renderTaskCard = ({ item }) => (
    <View style={styles.taskCard}>
      {/* Checkbox */}
      <View style={styles.iconContainer}>
      <Pressable
        style={styles.checkbox}
        onPress={() => toggleTaskCompletion(item.id)}
      >
        {item.completed ? (
          <FontAwesome name="check-circle" size={24} color="black" />
        ) : (
          <FontAwesome name="circle" size={24} color="white"/>
        )}
      </Pressable>
      </View>


      {/* Task Details */}
      <View style={styles.taskDetails}>
        <Text style={styles.taskName}>{item.name}</Text>
        <Text style={styles.taskDescription}>{item.details}</Text>
        <Text style={styles.taskPrice}>{item.price}</Text>
      </View>

      {/* Distance Input */}
      <View style={styles.distanceContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="0"
          keyboardType="numeric"
          value={item.distance}
          onChangeText={(text) => handleDistanceChange(text, item.id)}
        />
        <Text style={styles.distanceUnit}>km</Text>
      </View>
    </View>
  );

  const filteredTasks = tasks.filter((task) =>
    activeTab === "Tasks" ? !task.completed : task.completed
  );

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor='white' barStyle='dark-content' />
      {/* Header */}
      <View style={styles.header}>
      <Link href="/home">
        <TouchableOpacity style={styles.Arrow}>
        <Link href="/home">
        <Ionicons name="arrow-back" size={24} color="black" />
        </Link>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Task Details</Text>
      </Link>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "Tasks" && styles.activeTab]}
          onPress={() => setActiveTab("Tasks")}
        >
          <Text style={styles.tabText}>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "Completed" && styles.activeTab]}
          onPress={() => setActiveTab("Completed")}
        >
          <Text style={styles.tabText}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTaskCard}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 0,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: "#f0f0f0",
  },
  activeTab: {
    backgroundColor: "#FFA500",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  taskCard: {
    flexDirection: "row",
    backgroundColor: "#e0f7ff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  
  
  checkbox: {
    alignItems: "center",
    marginBottom: 35,
  },


  
  taskDetails: {
    flex: 1,
  },
  taskName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskDescription: {
    color: "gray",
    fontSize: 14,
  },
  taskPrice: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
  distanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9f7ff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputBox: {
    width: 50,
    height: 30,
    backgroundColor: "#82D8F8",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 14,
    marginRight: 5,
  },
  distanceUnit: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },


  iconContainer: {
    width: 44,
    height: 81,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#00aaff',
    borderRadius: 25,
    position: 'relative',
  },


  
  Arrow:{
    flexDirection: "row", // Align items in a row
    alignItems: "center"
  }
  
});
