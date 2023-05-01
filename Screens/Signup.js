import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function SignupScreen({navigation}) {
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
            if(res.status == 201)
            {
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
        <View style={style.auth}>
            <Text style={style.authText}>Signup Here</Text>
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
            <Pressable style={style.logIn} onPress={async () => callAPI()}>
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
        color: "black",
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
