import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Content = ({ displayValue = "0", onNumberPress, onOperationPress, onClearPress, ...props }) => {
  const numbers = [
    ['C', '±', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '−'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  const handlePress = (value) => {
    if (value === 'C' && onClearPress) {
      onClearPress();
    } else if (['÷', '×', '−', '+', '='].includes(value) && onOperationPress) {
      onOperationPress(value);
    } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(value) && onNumberPress) {
      onNumberPress(value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        {numbers.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[
                  styles.button,
                  button === '0' ? styles.zeroButton : null,
                  ['÷', '×', '−', '+', '='].includes(button) ? styles.operatorButton : null
                ]}
                onPress={() => handlePress(button)}
              >
                <Text style={[
                  styles.buttonText,
                  ['÷', '×', '−', '+', '='].includes(button) ? styles.operatorText : null
                ]}>
                  {button}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#000',
  },
  displayText: {
    fontSize: 64,
    color: '#fff',
    fontWeight: '200',
  },
  buttonContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zeroButton: {
    width: 170,
  },
  operatorButton: {
    backgroundColor: '#ff9500',
  },
  buttonText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '400',
  },
  operatorText: {
    color: '#fff',
  },
});

export default Content;
