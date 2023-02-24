import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {openBrowserAsync} from 'expo-web-browser';

export default class Boxes extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.box}>
        {/* onPress = {() => openBrowserAsync("https://www.pinterest.com/pin/412220172150554890/")} */}
          <View style = {style.inner} >
            <Image style = {style.image} source={require("../outfits/outfit1.png")}/>
          </View>
          <View>
            <TouchableOpacity onPress = {() => openBrowserAsync("https://www.pinterest.com/pin/412220172150554890/")}>
                <View style = {style.button}>
                    <Text style = {style.text}>View Outfit</Text>
                </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.box}>
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
        </View>

      </View>
    );
  }
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
