import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//screens
import ViewScreen from "./Screens/ViewScreen";
import SignupScreen from "./Screens/Signup";
import AuthScreen from "./Screens/Auth";
import AddScreen from "./Screens/AddScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="auth"
              component={AuthScreen}
              options={{
                title: "signup",
                headerStyle: { backgroundColor: "#102820FF" },
                headerTintColor: "white",
              }}
            />

            <Stack.Screen
              name="signup"
              component={SignupScreen}
              options={{
                title: "signup",
                headerStyle: { backgroundColor: "#102820FF" },
                headerTintColor: "white",
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Home",
                headerStyle: { backgroundColor: "#101820FF" },
                headerTintColor: "white",
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="View"
              component={ViewScreen}
              options={{
                title: "View",
                headerStyle: { backgroundColor: "#102820FF" },
                headerTintColor: "white",
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="Add"
              component={AddScreen}
              options={{
                title: "Add Clothes",
                headerStyle: { backgroundColor: "#102820FF" },
                headerTintColor: "white",
                headerTitleAlign: 'center',
              }}
            />
          </Stack.Navigator>
    </NavigationContainer>

  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      {/* <Pressable onPress={() => navigation.navigate("Fetch")} style = {style.button}>
        <Text style = {style.text}>Go to Fetch Screen</Text>
      </Pressable> */}

      <Pressable onPress={() => navigation.navigate("Add")} style = {style.button}>
        <Text style = {style.text}>Add Product</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Edit")} style = {style.button}>
        <Text style = {style.text}>Edit Product</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Delete")} style = {style.button}>
        <Text style = {style.text}>Delete Product</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("View")}
        style={style.button}
      >
        <Text style={style.text}>View Product</Text>
      </Pressable>

      <Image 
        source={{ uri: 'https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.98.png' }}
        style={{ width: 200, height: 200 }}
      />
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
  button: {
    backgroundColor: "pink",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 3,
    width: 100,
  },
});