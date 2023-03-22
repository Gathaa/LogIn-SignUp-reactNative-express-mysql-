import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import Axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SignUp = ({ navigation }) => {
    const [name, Setusername] = useState("")
    const [email, Setemail] = useState("");
    const [phonenumber, SetphoneNumber] = useState("");
    const [password, Setpassword] = useState("");

    const adduser = async () => {
        try {
            const response = await Axios.post('expoIpAddress', {
                name: name,
                email: email,
                phonenumber: phonenumber,
                password: password,
            });
            console.log("Variables Passed Successfully !!!", response.data);
        } catch (error) {
            console.error(error);
        }
    }
    /*const log = () => {
        alert("Account Registered Successfully !!!!")
    }*/
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{ bottom: 180, textDecorationLine: 'underline', fontSize: 30, fontWeight: 'bold' }}>SignUp Page</Text>
            <TextInput style={styles.input}
                placeholder='username'
                maxLength={20}
                autoCapitalize='sentences'
                keyboardType='default'
                onChangeText={Setusername}
            //value={name}

            />
            <TextInput style={styles.input}
                placeholder='email'
                maxLength={20}
                autoCapitalize='sentences'
                keyboardType='email-address'
                onChangeText={Setemail}
            //value={email}
            />
            <TextInput style={styles.input}
                placeholder='phone Number'
                maxLength={20}
                autoCapitalize='sentences'
                keyboardType='phone-pad'
                //value={phonenumber}
                onChangeText={SetphoneNumber}
            />
            <TextInput style={styles.input}
                placeholder='Password'
                maxLength={20}
                autoCapitalize='sentences'
                keyboardType='default'
                secureTextEntry={true}
                //value={password}
                onChangeText={Setpassword} />
            <TouchableOpacity onPress={adduser} style={styles.button}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.buttonnav}  onPress={() =>
        navigation.navigate("LogIn")
      }>
                <Text>Go To Log In </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
        buttonnav: {
            marginTop: 130,
            marginLeft:80,
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
export default SignUp