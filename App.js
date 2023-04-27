import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useState } from "react";
import Header from "./components/header";
import Boxes from "./components/Boxes";
import Popup from "./components/Popup/modal";

//screens
import ViewScreen from "./Screens/View";

const Stack = createNativeStackNavigator();

export default function App() {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAuthentication = () => {
    if (username === "user" && password === "password") {
      setAuth(true);
    }
  };

  return (
    <NavigationContainer>
      {auth ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Home",
              headerStyle: { backgroundColor: "#101820FF" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="View"
            component={ViewScreen}
            options={{
              title: "View",
              headerStyle: { backgroundColor: "#102820FF" },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      ) : (
        <View style={style.auth}>
          <View style={style.logo}>
            <Image source={require("./Logo/UniFashion2-resize.png")} />
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
        </View>
      )}
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      {/* <Pressable onPress={() => navigation.navigate("Fetch")} style = {style.button}>
        <Text style = {style.text}>Go to Fetch Screen</Text>
      </Pressable> */}

      {/* <Pressable onPress={() => navigation.navigate("Add")} style = {style.button}>
        <Text style = {style.text}>Add Product</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Edit")} style = {style.button}>
        <Text style = {style.text}>Edit Product</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Delete")} style = {style.button}>
        <Text style = {style.text}>Delete Product</Text>
      </Pressable> */}

      <Pressable
        onPress={() => navigation.navigate("View")}
        style={style.button}
      >
        <Text style={style.text}>View Product</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
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
  logo: {
    flex: 0.4,
    justifyContent: "flex-start",
    fontSize: 50,
    color: "#50c878",
  },
  auth: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffccdd",
  },
  authText: {
    color: "#008080",
    fontSize: 25,
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

//run the command: npm install expo-web-browser
