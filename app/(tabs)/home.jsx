import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView, 
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  // Sample data for tasks
  const completedTasks = ['Completed Task 1', 'Completed Task 2', 'Completed Task 3', 'Completed Task 4'];
  const ongoingTasks = ['Ongoing Task 1', 'Ongoing Task 2', 'Ongoing Task 3', 'Ongoing Task 4'];

  return (
    <View style={{ flex: 1 }}>

      <ScrollView style={styles.container}>
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome back</Text>
        </View>
  
        {/* User Info */}
        <Text style={styles.username}>John Simon</Text>
  
        {/* Account Summary */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Account Summary</Text>
            <Pressable>
              <Link href="\summary">
              <Text style={styles.seeAll}>See All</Text>
              </Link>
            </Pressable>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Month - October</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Total Tasks Completed</Text>
            <Text style={styles.value}>6</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Total distance travelled</Text>
            <Text style={styles.value}>50</Text>
          </View>
          <View style={styles.divider} />
        </View>
  
        {/* Completed Tasks */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Completed Tasks</Text>
            <Pressable>
              <Link href="/tasks">
              <Text style={styles.seeAll}>See All</Text>
              </Link>
            </Pressable>
          </View>
          <FlatList
            data={completedTasks}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.completedTaskCard}>
                <Text style={styles.taskText}>{item}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
  
        {/* Ongoing Tasks */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
            <Pressable>
              <Link href="/tasks">
              <Text style={styles.seeAll}>See All</Text>
              </Link>
            </Pressable>
          </View>
          {ongoingTasks.map((task, index) => (
            <View key={index} style={styles.ongoingTaskCard}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    padding: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  welcomeText: {
    fontSize: 14,
    marginLeft: 8,
    color: '#00AEEF',
    fontWeight: '500'
  },
  username: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
  },
  section: {
    marginVertical: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  seeAll: {
    color: '#F7941D',
    fontSize: 12,
  },
  completedTaskCard: {
    backgroundColor: '#F7941D',
    padding: 15,
    borderRadius: 25,
    marginRight: 10,
   // justifyContent: 'center',
    alignItems: 'center',
    height: 136,
    width: 141
  },
  ongoingTaskCard: {
    backgroundColor: '#00AEEF',
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
    height: 81,
    width: 365
  },
  taskText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginTop: 20,
  },



  card: {
    backgroundColor: "#E0F7FF", // Light blue background
    padding: 16,
    borderRadius: 10,
    width: 365,
   // elevation: 3, // Adds a slight shadow for better appearance
    alignSelf:'center'
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#000000",
    fontWeight: "500",
  },
  value: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000000",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginVertical: 8,
  },
});

export default App;
