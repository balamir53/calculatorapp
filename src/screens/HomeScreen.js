import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Content from './Content';

const HomeScreen = ({ navigation }) => {
  const [displayValue, setDisplayValue] = useState('0');
  
  const handleNumberPress = (number) => {
    if (displayValue === '0') {
      setDisplayValue(number);
    } else {
      setDisplayValue(displayValue + number);
    }
  };
  
  const handleOperationPress = (operation) => {
    // Handle arithmetic operations
  };
  
  const handleClearPress = () => {
    setDisplayValue('0');
  };
  
  return (
    <View style={styles.container}>
      <Header title="Calculator" />
      <Content 
        displayValue={displayValue} 
        onNumberPress={handleNumberPress} 
        onOperationPress={handleOperationPress} 
        onClearPress={handleClearPress} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;