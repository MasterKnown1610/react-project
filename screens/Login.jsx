// Login.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, SafeAreaView, Image,TouchableOpacity,Linking } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { colors } from '../assets/color/colors';

const Login = ({ navigation }) => {

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
 
      console.log(data);
      Alert.alert('Success', 'Login Successful');
      // Navigate to the home screen or another screen after successful login
      navigation.navigate('OTP');
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
      <View style={{alignItems:'center'}}>
        <Text style={{color:colors.white, fontSize:28}} >Master's Known</Text>
        <Text  style={{color:colors.white, fontSize:20}} >AI Online Market</Text>
      </View>
      </View>
      <View style={{alignItems:'center'}}>
        <Image
        source={require('../assets/loginCart.png')}/>
      </View>
      <View style={styles.subBlockStyles}>  
        <Text  style={{fontSize:20, fontWeight:'bold', color:colors.black, marginBottom:10}}>Account</Text>
        <View style={{alignItems:'center'}}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^\d{10}$/,
              message: "Phone number must be 10 digits",
    },
  }}
  render={({ field: { onChange, onBlur, value } }) => (
    <TextInput
      style={styles.input}
      placeholder="Phone Number"
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      keyboardType="phone-pad"
      color={colors.black}
    />
  )}
  name="phone"
  defaultValue=""
/>
{errors.phone && <Text style={styles.error}>{errors.phone.message || 'Phone number is required.'}</Text>}

      <View style={{justifyContent:'center', flexDirection:'row', alignItems:'center', marginTop:20}}>
        <View style={styles.line}/>
        <Text style={{fontWeight:'bold', paddingHorizontal:10}}> OR </Text>
        <View style={styles.line}/>
      </View>
      <View style={styles.socialmediaContainer} >
        <Image source={require('../assets/Google.png')}/>
        <Image source={require('../assets/Facebook.png')}/>
      </View>
      </View>
      <View  style={{alignItems:'center'}}>
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
    backgroundColor:colors.primary

    
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  line: {
    height: 2,
    width:'40%',
    backgroundColor: colors.line,
  },
  socialmediaContainer:{
    flexDirection:'row',
    justifyContent:'center',
    gap:40,
  },
  image:{
    width: 50,
    height:50,
  },
  headingContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:20,
    margin: 30,
  },
  subBlockStyles:{
    backgroundColor:colors.white,
    padding:20,
    justifyContent:'space-between',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    flex:0.8,

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
    color:'white',
    width:'80%'
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
