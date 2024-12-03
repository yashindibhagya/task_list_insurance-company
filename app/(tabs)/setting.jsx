import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const SettingsScreen = () => {
  const [expanded, setExpanded] = useState({
    account: false,
    logout: false,
    reportBug: false,
    sendFeedback: false,
    accountinfo: false,
    accpassword: false
  });

  const [formData, setFormData] = useState({
    name: "John Simon",
    phoneNumber: "+94 123 456 7890",
    email: "example@gmail.com",
    password: "123",
  });

  const toggleExpand = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <TouchableOpacity style={styles.backButton}>
        <Link href="/summary">
          <AntDesign name="arrowleft" size={24} color="black" />
        </Link>
      </TouchableOpacity>
      <Text style={styles.title}>Settings</Text>

      {/* General Section */}
      <View>
        <Text style={styles.sectionHeader}>GENERAL</Text>

        {/* Account */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => toggleExpand("account")}
        >
          <View style={styles.optionRow}>
            <AntDesign name="user" size={20} color="#FFA726" />
            <Text style={styles.optionText}>Account</Text>
          </View>
          <AntDesign
            name={expanded.account ? "up" : "down"}
            size={16}
            color="black"
          />
        </TouchableOpacity>
        
        {expanded.account && (
          <View style={styles.expandedContent}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={formData.name}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, name: text }))
              }
            />

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={formData.phoneNumber}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, phoneNumber: text }))
              }
              keyboardType="phone-pad"
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, styles.disabledInput]}
              value={formData.email}
              editable={false}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={[styles.input , styles.disabledInput]}
              value={formData.password}
              editable={false}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, password: text }))
              }
              secureTextEntry
            />
          </View>
        )}

        {/* Logout */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => toggleExpand("logout")}
        >
          <View style={styles.optionRow}>
            <AntDesign name="logout" size={20} color="#FFA726" />
            <Text style={styles.optionText}>Logout</Text>
          </View>
          <AntDesign
            name={expanded.logout ? "up" : "down"}
            size={16}
            color="black"
          />
        </TouchableOpacity>

        {/* Feedback Section */}
        <Text style={styles.sectionHeader}>FEEDBACK</Text>

        {/* Report a Bug */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => toggleExpand("reportBug")}
        >
          <View style={styles.optionRow}>
            <AntDesign name="warning" size={20} color="#FFA726" />
            <Text style={styles.optionText}>Report a bug</Text>
          </View>
          <AntDesign
            name={expanded.reportBug ? "up" : "down"}
            size={16}
            color="black"
          />
        </TouchableOpacity>

        {/* Send Feedback */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => toggleExpand("sendFeedback")}
        >
          <View style={styles.optionRow}>
            <AntDesign name="form" size={20} color="#FFA726" />
            <Text style={styles.optionText}>Send Feedback</Text>
          </View>
          <AntDesign
            name={expanded.sendFeedback ? "up" : "down"}
            size={16}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    padding: 50,
  },
  backButton: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#717171",
    marginTop: 24,
    marginBottom: 8,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    marginLeft: 8,
    fontSize: 12,
  },
  expandedContent: {
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 16,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
    marginLeft: 16,
    marginRight: 16,
  },
  input: {
    //borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    //marginVertical: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  disabledInput: {
    //backgroundColor: "#f5f5f5",
    color: "#888",
  },
});

export default SettingsScreen;
