// Register.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const Register = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {

      console.log(data);
      Alert.alert('Success', 'Registration Successful');
      navigation.navigate('Login'); // Navigate to Login screen after successful registration
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
        defaultValue=""
      />
      {errors.username && <Text style={styles.error}>Username is required.</Text>}

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

      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'black'
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
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});

export default Register;
