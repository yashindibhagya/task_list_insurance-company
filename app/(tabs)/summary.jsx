import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import image_logo from '@/assets/images/logo.png';
import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from "@expo/vector-icons";

const UserSummary = () => {
  // Task Data (Mocked for demonstration)
  const completedTasks = [
    { id: 1, name: 'Task 1', details: 'Details', pricePerKm: 25 },
    { id: 2, name: 'Task 2', details: 'Details', pricePerKm: 25 },
    { id: 3, name: 'Task 3', details: 'Details', pricePerKm: 25 },
  ];

  const totalTasks = completedTasks.length;
  const totalDistance = 60; // Example value
  const pricePerKm = 25; // Fixed price per kilometer
  const totalAmount = totalDistance * pricePerKm;

  return (
    <ScrollView style={styles.container}>
    <StatusBar backgroundColor='white' barStyle='dark-content' />
      {/* Header */}
      <View style={styles.header}>
      <Link href="/tasks">
      <View style={styles.checkbox}/>
        <Ionicons name="arrow-back" size={24} color="black" />
      
        </Link>
      </View>
      <View>
        <Text style={styles.headerText}>Month - October</Text> 
        {/*<Image 
              source={image_logo}
              style={styles.insuranceImage}
              resizeMode="contain"
            /> */}
        </View>

      {/* Tasks */}
      <FlatList
        data={completedTasks}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            {/** Checkbox */}
            <View style={styles.iconContainer}>
              <FontAwesome name="check-circle" size={24} color="black" marginBottom={50}/>
            </View>
            <View>
            <Text style={styles.taskName}>{item.name}</Text>
            <Text style={styles.taskDetails}>{item.details}</Text>
            <Text style={styles.taskPrice}>Rs. {item.pricePerKm} / km</Text>
          </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />

      {/* Summary */}
      <View style={styles.summary}>
        <View style={styles.row}>
          <Text style={styles.label}>Price per Km</Text>
          <Text style={styles.value}>Rs. {pricePerKm}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total Tasks Completed</Text>
          <Text style={styles.value}>{totalTasks}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total distance travelled</Text>
          <Text style={styles.value}>{totalDistance}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total</Text>
          <Text style={[styles.value, styles.total]}>Rs. {totalAmount}</Text>
        </View>
      </View>

      {/* Previous Month Summary */}
      <View style={styles.previousMonth}>
        <Text style={styles.previousTitle}>Last Month - September</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Total Tasks Completed</Text>
          <Text style={styles.value}>6</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total distance travelled</Text>
          <Text style={styles.value}>50</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total</Text>
          <Text style={[styles.value, styles.total]}>Rs. 1,250</Text>
        </View>
      </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    padding: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
   // marginVertical: 10,
    //marginBottom: 0,
  },
  headerText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  insuranceImage: {
    width: 150,
    height: 153,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    bottom: 70 

  },

  taskCard: {
    marginTop:10,
    backgroundColor: '#E0F7FF',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    width: 190,
    alignItems: 'center',
    flexDirection: "row",
  },
  taskName: {
    marginBottom: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDetails: {
    fontSize: 14,
    color: '#555',
  },
  taskPrice: {
    fontSize: 14,
    color: '#000',
    marginTop: 8,
  },
  summary: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    marginVertical: 16,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  total: {
    color: 'red',
  },
  previousMonth: {
    backgroundColor: '#E0F7FF',
    borderRadius: 10,
    padding: 16,
    elevation: 1,
  },
  previousTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  iconContainer: {
    width: 36,
    height: 98,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 19,
    backgroundColor: '#00aaff',
    borderRadius: 25,
    position: 'relative',
    
  },

});

export default UserSummary;
