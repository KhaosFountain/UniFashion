import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
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
    <ScrollView>
      <View style={style.container}>
        <View style={style.section}>
          <Pressable onPress={() => navigation.navigate("View")} style={style.button}>
            <Text style={style.text}>View Product</Text>
          </Pressable>
        </View>
        <View style={style.section}>
          <Pressable onPress={() => navigation.navigate("Add")} style={style.add}>
            <Text style={style.text}>Add Product</Text>
          </Pressable>
        </View>
        <View style={style.section} >
          <Pressable onPress={() => navigation.navigate("Edit")} style={style.button}>
            <Text style={style.text}>Edit Product</Text>
          </Pressable>
        </View>
        <View style={style.section}>
          <Pressable onPress={() => navigation.navigate("Delete")} style={style.button}>
            <Text style={style.text}>Delete Product</Text>
          </Pressable>
        </View>

      </View>
    </ScrollView>

  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "space-around",
    alignItems: "center",
    height: 1000,
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
    width: '50%',
  },
  add: {
    backgroundColor: "pink",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 3,
    width: '50%',
  },
  section: {
    height: '25%',
    width: '100%',
    backgroundColor: '#fef4e8',
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'black',
  }
});