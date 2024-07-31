// MainScreen.js
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Button from '../components/Button';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/ShoppingCart.png')} // Adjust the path to your image
        style={styles.image} 
      />
      <Text style={styles.title}>Master Known Market </Text>
      <Text style={styles.title}>AI Online Market </Text>
      <View style={styles.buttonContainer}>

      
      <Button title="Login →" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#161488',
    justifyContent: 'center',
    alignItems:'center',
    padding: 16,
   
    
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    marginBottom: 12,
  },
  image:{
    backgroundColor:'transparent',
  },
  buttonContainer:{
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-around'
  }
});

export default MainScreen;
