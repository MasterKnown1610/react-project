import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Alert, SafeAreaView, Image, TouchableOpacity, Linking } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { useForm, Controller } from 'react-hook-form';
import { colors } from '../assets/color/colors';
import google from '../assets/Google.png'


const Login = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);

  const onSubmit = async () => {
    try {
      const formattedNumber = phoneInput.current?.getNumberAfterPossiblyEliminatingZero();
      const countryCode = phoneInput.current?.getCallingCode(); // Retrieve the country code

      if (formattedNumber && countryCode) {
       
        navigation.navigate('OTP', { phoneNumber: formattedNumber.number, countryCode });
      
      } else {
        Alert.alert('Error', 'Invalid phone number or country code!');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Invalid credentials!');
    }
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Image 
          source={require('../assets/ShoppingCart.png')} 
          style={styles.image}
        />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: colors.white, fontSize: 28 }}>Master's Known</Text>
          <Text style={{ color: colors.white, fontSize: 20 }}>AI Online Market</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../assets/loginCart.png')} />
      </View>
      <View style={styles.subBlockStyles}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.black, marginBottom: 10 }}>Account</Text>
        <View style={{ alignItems: 'center' }}>
          <Controller
            control={control}
            rules={{ required: 'Phone number is required.' }}
            render={({ field: { onChange } }) => (
              <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="IN"
                layout="first"
                onChangeFormattedText={(text) => {
                  setPhoneNumber(text);
                  onChange(text);
                }}
                withDarkTheme
                withShadow
                autoFocus
              />
            )}
            name="phone"
            defaultValue=""
          />
          {errors.phone && <Text style={styles.error}>{errors.phone.message}</Text>}
          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <View style={styles.line} />
            <Text style={{ fontWeight: 'bold', paddingHorizontal: 10 }}> OR </Text>
            <View style={styles.line} />
          </View>
          <View style={styles.socialmediaContainer}>
            <Image source={google} alt='google' />
            <Image source={require('../assets/Facebook.png')} />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text>By Login & Sign-Up, you agree to our </Text>
          <Text style={styles.text}>
            <TouchableOpacity onPress={() => handleLinkPress('https://www.google.com')}>
              <Text style={styles.link}>Terms & Conditions </Text>
            </TouchableOpacity>
            {' '}and{' '}
            <TouchableOpacity onPress={() => handleLinkPress('https://www.facebook.com')}>
              <Text style={styles.link}>Privacy policy</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  line: {
    height: 2,
    width: '40%',
    backgroundColor: colors.line,
  },
  socialmediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
  },
  image: {
    width: 50,
    height: 50,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    margin: 30,
  },
  subBlockStyles: {
    backgroundColor: colors.white,
    padding: 20,
    justifyContent: 'space-between',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 0.8,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    color: colors.black,
    width: '80%',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default Login;
