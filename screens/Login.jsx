// Login.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, SafeAreaView, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { colors } from '../assets/color/colors';

const Login = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
 
      console.log(data);
      Alert.alert('Success', 'Login Successful');
      // Navigate to the home screen or another screen after successful login
      // navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Invalid credentials!');
    }
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
        <Text  style={{fontSize:20, fontWeight:'bold', color:colors.black}}>Account</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={styles.input}
          placeholder="Email"
          onBlur={onBlur}
          onChangeText={onChange}
            value={value}
            />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && <Text style={styles.error}>Email is required.</Text>}


      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          />
        )}
        name="password"
        defaultValue=""
        />
      {errors.password && <Text style={styles.error}>Password is required.</Text>}
      <View style={styles.socialmediaContainer} >
        <Image source={require('../assets/Google.png')}/>
        <Image source={require('../assets/Facebook.png')}/>
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
    borderRadius:20,
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
    color:'white'
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});

export default Login;
