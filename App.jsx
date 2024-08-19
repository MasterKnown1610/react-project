import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import Register from './screens/Register';
import Login from './screens/Login'; // Assume you have a Login component
import { StyleSheet, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import Otp from './screens/Otp';
import Home from './screens/Home';

// Enable screens to improve memory usage and performance
enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>

    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={Otp}/> */}
        <Stack.Screen name="Home" component={Home} /> 
      </Stack.Navigator>
    </NavigationContainer>
    </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
