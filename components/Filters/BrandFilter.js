import React from "react";
import {View, Button, Text,  StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from "react";

export default function BrandFilter(){
  const [showButton, setShowButton] = useState(false);

  const handlePress = () => {
    setShowButton(!showButton);
  };

  const moreButtons = () =>{
    return(
      <View style={styles.subcolor}>
      <TouchableOpacity onPress={() => {}}>
        <View style = {styles.brandbutton}>
        <Text style={styles.brandbuttonText}>Nike</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style = {styles.brandbutton}>
        <Text style={styles.brandbuttonText}>Adidas</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style = {styles.brandbutton}>
        <Text style={styles.brandbuttonText}>Puma</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style = {styles.brandbutton}>
        <Text style={styles.brandbuttonText}>Asics</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style = {styles.brandbutton}>
        <Text style={styles.brandbuttonText}>Lacoste</Text>
        </View>
      </TouchableOpacity>
      </View>
    )

  }

  return (
    <View style={styles.container}>
      <View style={styles.color}>
      <TouchableOpacity onPress={handlePress}>
        <View style = {styles.button}>
        <Text style={styles.buttonText}>Brand</Text>
        </View>
      </TouchableOpacity>
      </View>
      {showButton && moreButtons()}
    </View>
  );
}

 const styles = StyleSheet.create({
    container:{
      display:"flex",
     // backgroundColor:"red",
    },
    color:{
        marginRight:"auto",
    },   
    subcolor:{
      display:"flex",
      marginRight:180,
    },
    button: {
        marginBottom: 0,
        width: 100,
        alignItems: 'center',
        backgroundColor: '#2196F3',
      },
      buttonText: {
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontSize:20
      },

      brandbutton: {
        marginBottom: 0,
        width: 90,
        alignItems: 'left',
        backgroundColor: 'black',
      },
      brandbuttonText: {
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontSize:16
      },

 })
