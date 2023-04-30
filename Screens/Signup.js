import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function SignupScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = () => {
        if (username && password && password === confirmPassword) {
            // TODO: handle signup logic
            navigation.navigate("Home"); // navigate to the home screen after signup
        }
    };

    return (
        <View style={style.auth}>
            <Text style={style.authText}>Signup Here</Text>
            <TextInput
                style={style.textInput}
                placeholder="Username"
                value={username}
                onChangeText={setUsername} 
            />
            <TextInput
                style={style.textInput}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <TextInput
                style={style.textInput}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
            />
            <Pressable style={style.logIn} onPress={handleSignup}>
                <Text style={style.text}>Sign Up</Text>
            </Pressable>
        </View>
    );
}


const style = StyleSheet.create({
    auth: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fef4e8",
    },
    textInput: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "black",
        padding: 3,
        width: 400,
        color: "white",
    },
    logIn: {
        backgroundColor: "pink",
        padding: 10,
        marginTop: 10,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 3,
        width: 100,
    },

})
