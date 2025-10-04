import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Header from './src/components/Header';
import AppNavigator from './src/navigation/AppNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => <Header /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Add StatusBar for Expo
// <StatusBar style="auto" />

export default App;