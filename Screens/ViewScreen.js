import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import { openBrowserAsync } from "expo-web-browser";
import { scheduleNotificationHandler,sendPushNotificationHandler } from "../components/notifs";

export default function ViewScreen({navigation}) {
  const [products, setProducts] = useState([]);
  const [isDeleted, setDeleted] = useState(false)
  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://61c9-2001-bb6-c409-4700-506d-632f-b128-6282.ngrok-free.app/products`,
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
        `https://61c9-2001-bb6-c409-4700-506d-632f-b128-6282.ngrok-free.app/products/delete/${name}`,
        {
          method: "DELETE",
          headers:  {
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
    <View style={style.container}>
      {products.map((product) => (
        <View>
          <Image
            source={{ uri: product.url }}
            style={{ width: 200, height: 200 }}
            key={product._id}
          />
          <Text>
            {product.productTitle}: {product.color} : {product.productName}:{" "}
            {product.price}
          </Text>
          <Pressable
            style={style.logIn}
            onPress={() => {scheduleNotificationHandler(product.productName); sendPushNotificationHandler();deleteApi(product.productName);}}
          >
            <Text>Delete</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "50%",
    height: "50%",
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    fontSize: 25,
    textAlign: "center",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 3,
  },
  text: {
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
});
