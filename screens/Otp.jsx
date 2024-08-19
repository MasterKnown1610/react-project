import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import OTPInputView from 'react-native-otp-inputs';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors } from '../assets/color/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber, countryCode } = route.params;

  const handleOtpChange = (code) => {
    setOtp(code);
    if (code.length === 4) {
      // Debounce validation to avoid rapid re-renders
      setTimeout(() => validateOtp(code), 0);
    }
  };
  

  const validateOtp = (code) => {
    // Replace this with your actual OTP validation logic
    const expectedOtp = '1234'; // Example expected OTP
    if (code === expectedOtp) {
      navigation.navigate('Home'); // Navigate to the home page
    } else {
      Alert.alert('Invalid OTP', 'The OTP you entered is incorrect. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>OTP Screen</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>We sent OTP to this</Text>
        <Text style={styles.infoTextBold}>+{countryCode} {phoneNumber}</Text>
      </View>
      <View style={styles.otpContainer}>
        <OTPInputView
          handleChange={handleOtpChange}
          numberOfInputs={4}
          style={styles.otpInput}
          inputStyles={styles.otpField}
        />
        <Text>Entered OTP: {otp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    padding: 10,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  infoText: {
    color: 'black',
  },
  infoTextBold: {
    color: 'black',
    fontWeight: 'bold',
  },
  otpContainer: {
    alignItems: 'center',
  },
  otpInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  otpField: {
    width: 45,
    height: 45,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Otp;
