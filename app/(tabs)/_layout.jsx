import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs 
      screenOptions={{
        //tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarActiveTintColor: Colors.PRIMARY,
        headerShown: false,
        tabBarInactiveTintColor: Colors.SECONDARY, headerShown: false,
        tabBarStyle:{backgroundColor: 'black'}
      }}>
      <Tabs.Screen
        name ="home"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <Entypo name="menu" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tasks',
          tabBarIcon: ({color}) => (
            <Octicons name="checklist" size={24} color= {color} />
          ),
        }}
      />
      <Tabs.Screen
        name="summary"
        options={{
          title: 'Summary',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="summarize" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-cog" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}