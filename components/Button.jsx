// src/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF', // Default button color
    padding: 12, // Default padding
    borderRadius: 8, // Rounded corners
    alignItems: 'center', // Center text horizontally
    marginVertical: 8, // Vertical spacing
  },
  buttonText: {
    color: '#FFFFFF', // Default text color
    fontSize: 16, // Default font size
    fontWeight: 'bold', // Bold text
  },
});

export default Button;
