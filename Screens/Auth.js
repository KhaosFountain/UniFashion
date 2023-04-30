import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';



export default function AuthScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={style.auth}>
            <View style={style.logo}>
                <Image source={require("../Logo/UniFashionLOGO.png")} />
            </View>
            <Text style={style.authText}>Please log in to continue</Text>
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
            <Pressable style={style.logIn}>
                <Text style={style.text}>Log In</Text>
            </Pressable>

            <View style={style.register}>
                <Text style={style.authText}>Signup Here</Text>
                <Pressable
                    style={style.logIn}
                    onPress={() => navigation.navigate("signup")}
                >
                    <Text>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
}


const style = StyleSheet.create({
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
    logo: {
        flex: 0.4,
        justifyContent: "flex-start",
        fontSize: 50,
        color: "#50c878",
        marginTop: 60,
    },
    auth: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fef4e8",
    },
    register: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    authText: {
        color: "#008080",
        fontSize: 25,
        marginTop: 50,
    },
    textInput: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "black",
        padding: 3,
        width: 400,
        color: "white",
    },
});