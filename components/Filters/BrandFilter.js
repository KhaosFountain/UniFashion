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
      <Button title="Nike" onPress={() => {}} />
      <Button title="Adidas" onPress={() => {}} />
      <Button title="Puma" onPress={() => {}} />
      <Button title="Asics" onPress={() => {}} />
      <Button title="Lacoste" onPress={() => {}} />
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
        marginBottom: 10,
        width: 90,
        alignItems: 'center',
        backgroundColor: '#2196F3',
      },
      buttonText: {
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontSize:20
      },
 })
