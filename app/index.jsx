import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Link, Redirect } from 'expo-router';

//import logo from '@/assets/images/logo.png';
import insurance from '@/assets/images/2.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }

    Alert.alert('Success', 'Account created successfully');
  };

  return (
    //<Redirect href={'/login'}/>
    <KeyboardAvoidingView
      style={{ flex: 1}}
      behavior={Platform.OS === 'ios' ? 'ios' : 'android'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
        <StatusBar backgroundColor="black" barStyle="light-content" />
          <View style={styles.container}>
            {/* Logo Section 
            <View style={styles.header}>
              <Image source={logo} style={styles.logo} resizeMode="contain" />
            </View>    */}

            {/* Insurance Illustration */}
            <Image
              source={insurance}
              style={styles.insuranceImage}
              resizeMode="contain"
            />

            {/* Input Fields */}
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#555"
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#555"
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />

              {/* Link to Login */}
              <Link href="/home" asChild>
                <Pressable style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Login</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 0,
  },
  logo: {
    width: 262,
    height: 158,
  },
  insuranceImage: {
    marginTop: 120,
    width: 430,
    height: 433,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 15,
    marginBottom: 10,
    fontSize: 14,
  },
  loginButton: {
    width: '90%',
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
