import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
  ScrollView,
} from "react-native";
import { openBrowserAsync } from "expo-web-browser";
import { scheduleNotificationHandler, sendPushNotificationHandler } from "../components/notifs";

export default function ViewScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [isDeleted, setDeleted] = useState(false)
  const callAPI = async () => {
    try {
      const res = await fetch(
        `http://54.167.138.208:8000/products`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420", // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
          //  body: JSON.stringify( { testData: 'Test data sent to server' } ) // Need to use POST to send body
        }
      );
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteApi = async (name) => {
    try {
      await fetch(
        `http://54.167.138.208:8000/products/delete/${name}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420", // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
        }
      );
      setDeleted(true)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isDeleted) {
      navigation.navigate("View");
      setDeleted(false);
      callAPI();
    }
  }, [isDeleted]);

  useEffect(() => {
    callAPI();
    console.log(products.url);
  }, []);

  return (
    <ScrollView flex={1}>
      <View style={style.container}>
        {products.map((product) => (
          <View style={style.cardContainer} key={product._id}>
            <Image
              source={{ uri: product.url }}
              style={style.image}
            />
            <View style={style.cardTextContainer}>
              <Text style={style.cardTitle}>Title: {product.productTitle}</Text>
              <Text style={style.cardSubtitle}>Color: {product.color}</Text>
              <Text style={style.cardName}>Name: {product.productName}</Text>
              <Text style={style.cardPrice}>Price: ${product.price}</Text>
            </View>
            <Pressable
              style={style.buyButton}
              onPress={() => {
                scheduleNotificationHandler(product.productName);
                sendPushNotificationHandler();
                deleteApi(product.productName);
              }}
            >
              <Text style={style.buyButtonText}>Buy</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: '#fef4e8',
  },
  image: {
    width: 200,
     height: 200 ,
    resizeMode: "contain",
  },
  text: {
    fontSize: 25,
    textAlign: "center",
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
  cardContainer:{
    overflow: 'hidden',
    width: '47%',
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
  },
  cardTextContainer:{
    flex: 1,
    alignItems: "flex-start",
  },
  buyButton:{
    backgroundColor: "pink",
    padding: 10,
    marginBottom: 30,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 3,
    width: '50%',
  }
});
