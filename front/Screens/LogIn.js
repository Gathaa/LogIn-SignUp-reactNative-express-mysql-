import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import Axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const LogIn = ({ navigation }) => {
  const [username, Setname] = useState("");
  const [userpassword, Setpassword] = useState("");
  const [loginstate, Setloginstate] = useState("")
  const LogIn = async () => {
      const response = await Axios.post('expoIpAddress', {
        usernname: username,
        userpassword: userpassword,
      }).then((response) => {
        if(response.data.message){
          Setloginstate(response.data.message)
        }
        else{
          Setloginstate(response.data[0]);
        }
      
      })
    }
  
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ bottom: 180, textDecorationLine: 'underline', fontSize: 30, fontWeight: 'bold' }} >Log In Page </Text>
      <TextInput
        style={styles.input}
        placeholder='email'
        maxLength={20}
        autoCapitalize='sentences'
        keyboardType='default'
        onChangeText={Setname}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder='password'
        maxLength={20}
        autoCapitalize='sentences'
        keyboardType='default'
        onChangeText={Setpassword}
        secureTextEntry={true}
        value={userpassword}
      />
      <TouchableOpacity onPress={LogIn} style={styles.button}>
        <Text>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonnav} onPress={() =>
        navigation.navigate("SignUp")
      }>
        <Text>Go to Sign Up</Text>
      </TouchableOpacity>
      <Text>{loginstate}</Text>
    </View>
  )
    }
  


const styles = StyleSheet.create({
  buttonnav: {
    marginTop: 130,
    marginLeft: 80,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "red",
    width: "40%",
    alignItems: 'center'
  },
  input: {
    borderBottomWidth: 1,
    borderRadius: 5,
    width: "50%",
    padding: 30,
  },
  button: {
    marginTop: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "red",
    width: "40%",
    alignItems: 'center'
  },
});
export default LogIn;