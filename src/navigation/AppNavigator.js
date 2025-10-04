import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';

// Import your main screen components here
// import HomeScreen from '../screens/HomeScreen';
// import CalculatorScreen from '../screens/CalculatorScreen';

const Stack = createStackNavigator();

// Placeholder screen component
const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main Screen</Text>
      <Text style={styles.subtitle}>Add your app content here</Text>
    </View>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
          name="Main" 
          component={MainScreen}
          options={{ title: 'Calculator App' }}
        />
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default AppNavigator;
