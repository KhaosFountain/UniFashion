import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';

export default function AuthScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setLogin] = useState(false);

    const callAPI = async () => {
        try {
            const res = await fetch(
                `http://54.167.138.208:8000/users/login`,
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
                setLogin(true);
            }
            setUsername("");
            setPassword("");
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        if (isLogin) {
            navigation.navigate("Home");
            setLogin(false);
        }
    }, [isLogin]);

    return (
        <View style={style.auth}>
            <View style={style.logo}>
                <Image source={require("../Logo/UniFashionLOGO.png")} />
            </View>
            <Text style={style.authText}>Please log in to continue</Text>
            <TextInput
                style={style.textInput}
                placeholder="Username"
                defaultValue={username}
                onChangeText={user => setUsername(user)}
            />
            <TextInput
                style={style.textInput}
                placeholder="Password"
                defaultValue={password}
                onChangeText={pass => setPassword(pass)}
                secureTextEntry={true}
            />
            <Pressable style={style.logIn} onPress={() => callAPI()}>
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
                <Pressable
                    onPress={() => navigation.navigate("Home")}
                    style={style.logIn}
                ></Pressable>
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
        color: "black",
    },
});