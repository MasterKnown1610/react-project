import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import OTPInputView from 'react-native-otp-inputs';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors } from '../assets/color/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();

  const route = useRoute();
  const { phoneNumber, countryCode } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text><Icon name="home" size={30} color="#900" /></Text>
        </TouchableOpacity>
        <Text style={styles.title}>OTP Screen</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'black' }}>We sent OTP to this</Text>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>+{countryCode} {phoneNumber}</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <OTPInputView
            handleChange={(code) => setOtp(code)}
            numberOfInputs={4}
            style={styles.otpInput}
            inputStyles={styles.otpField}
          />
        </View>
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
    gap: 10,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: colors.black,
  },
  backButton: {
    padding: 10,
    backgroundColor: 'white',
  },
  backButtonText: {
    color: 'blue',
    fontSize: 16,
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
