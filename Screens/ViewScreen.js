import React, { useEffect, useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {openBrowserAsync} from 'expo-web-browser';

export default function ViewScreen() {
    const [products, setProducts] = useState([])
    const callAPI = async () => {
      try {
          const res = await fetch(
              `https://61c9-2001-bb6-c409-4700-506d-632f-b128-6282.ngrok-free.app/products`,
              {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json',
                      "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
                  },
                  //  body: JSON.stringify( { testData: 'Test data sent to server' } ) // Need to use POST to send body
              }
          )
          const data = await res.json()
          setProducts(data)
      } catch (err) {
          console.log(err)
      }
  }

  useEffect(()=>{
    callAPI()
    console.log(products.url)
  },[])

    return (
      <View style={style.container}>
        {/* <View style={style.box}> */}
        {/* onPress = {() => openBrowserAsync("https://www.pinterest.com/pin/412220172150554890/")} */}
          {/* <View style = {style.inner} >
            <Image style = {style.image} source={require("../outfits/outfit1.png")}/>
          </View> */}
          {/* <View> 
            <TouchableOpacity onPress = {() => openBrowserAsync("https://www.pinterest.com/pin/412220172150554890/")}>
                {/* <View style = {style.button}>
                    <Text style = {style.text}>View Outfit</Text>
                </View> */}
            {/* </TouchableOpacity> */}
          {/* </View> */} 
        {/* </View> */}

        {/* <View style={style.box}>
          <View style = {style.inner}>
            <Image style = {style.image} source={require("../outfits/outfit2.png")} />
          </View>
          <View>
            <TouchableOpacity onPress = {() => openBrowserAsync("https://www.pinterest.com/pin/444449056974747112/")}>
                <View style = {style.button}>
                    <Text style = {style.text}>View Outfit</Text>
                </View>
            </TouchableOpacity>
          </View>
        </View> */}

      {products.map((product)=>(
        <View>
       <Image 
       source={{ uri: product.url}}
       style={{ width: 200, height: 200 }}
       key={product._id}
     />
      <Text>{product.productTitle}: {product.color} : {product.productName}
      : {product.price}</Text>
        </View>

      ))}
      </View>
    );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box:{
    width: '50%',
    height: '50%',
    padding: 5, 
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
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
    color: 'white',
  },

});