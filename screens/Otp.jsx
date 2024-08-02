import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OTPInputView from 'react-native-otp-inputs';

const Otp = () => {
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Screen</Text>
      <View style={{flexDirection:'row'}}>
{/* 
      <OTPInputView
        style={styles.otpInput}
        pinCount={6} // Adjust the pin count as per your requirement
        autoFocusOnLoad
        codeInputFieldStyle={styles.otpField}
        codeInputHighlightStyle={styles.otpFieldHighlight}
        onCodeFilled={(code) => setOtp(code)}
        /> */}
        <OTPInputView
          handleChange={(code) => console.log(code)}
          numberOfInputs={4}
          style={styles.otpInput}
        />
        </View>
      <Text>Entered OTP: {otp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpInput: {
    flexDirection:'row',
    backgroundColor:'red',
    gap:3,
    width: 'fit-content',
    height: 50,
    borderWidth:1,
    borderColor:'white'
  },
  otpField: {
    width: 30,
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    color: '#000',
  },
  otpFieldHighlight: {
    borderColor: '#03DAC6',
    border:1,
  },
});

export default Otp;
