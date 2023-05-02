import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';

export default function SignupScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setSignup] = useState(false);

    const callAPI = async () => {
        try {
            const res = await fetch(
                `http://54.167.138.208:8000/users/register`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    }) // Need to use POST to send body
                }
            )
            if (res.status == 201) {
                setSignup(true);
            }
            setUsername("");
            setPassword("");
        } catch (err) {
            console.log(err);
            navigation.navigate("signup")
        }
    }

    useEffect(() => {
        if (isSignUp) {
            navigation.navigate("auth");
            setSignup(false);
        }
    }, [isSignUp]);

    return (
        <View style={style.authContainer}>
          <View style={style.cardContainer}>
            <View style={style.usernameContainer}>
              <TextInput
                style={style.usernameInput}
                placeholder="Enter your username"
                placeholderTextColor={'#3E282BFF'}
                defaultValue={username}
                onChangeText={(user) => setUsername(user)}
              />
            </View>
            <View style={style.passwordContainer}>
              <TextInput
                style={style.passwordInput}
                placeholder="Enter your password"
                placeholderTextColor={'#3E282BFF'}
                defaultValue={password}
                onChangeText={(pass) => setPassword(pass)}
                secureTextEntry={true}
              />
            </View>
            <Pressable style={style.signUpButton} onPress={async () => callAPI()}>
              <Text style={style.signUpButtonText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      );
}


const style = StyleSheet.create({
    authContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#2E5266FF', // Sapphire
    },
    cardContainer: {
      backgroundColor: '#D3D0CBFF', // American Silver
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 20,
    },
    usernameContainer: {
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    usernameInput: {
      borderWidth: 1,
      borderColor: '#6E8898FF', // Light Slate Gray
      padding: 10,
      width: "80%",
      fontSize: 18,
      color: '#9FB1BCFF', // Cadet Gray
    },
    passwordContainer: {
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    passwordInput: {
      borderWidth: 1,
      borderColor: '#6E8898FF', // Light Slate Gray
      padding: 10,
      width: "80%",
      fontSize: 18,
      color: '#9FB1BCFF', // Cadet Gray
    },
    signUpButton: {
        backgroundColor: '#6E8898FF', // Light Slate Gray
        padding: 10,
        marginTop: 10,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 3,
        width: 100,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    signUpButtonText: {
      color: "white",
      fontWeight: "bold",
    },
});
