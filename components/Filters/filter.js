import React from "react";
import {View, Button, Text,  StyleSheet, FlatList, TouchableHighlight,Alert } from 'react-native'
import { useState } from "react";

export default function Filter(){
  const [showButton, setShowButton] = useState(false);

  const handlePress = () => {
    setShowButton(!showButton);
  };

  const moreButtons = () =>{
    return(
      <View style={styles.subcolor}>
      <Button title="Red" onPress={() => {}} />
      <Button title="Green" onPress={() => {}} />
      <Button title="Yellow" onPress={() => {}} />
      <Button title="Blue" onPress={() => {}} />

      </View>
    )

  }

  return (
    <View style={styles.container}>
      <View style={styles.color}>
      <Button title="Color" onPress={handlePress} />
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
    }
 })
