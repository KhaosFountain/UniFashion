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
      <View>
      <Button title="Another Button" onPress={() => {}} />
      </View>
    )

  }

  return (
    <View>
      <Button title="Color" onPress={handlePress} />
      {showButton && moreButtons()}
    </View>
  );
}

// const styles = StyleSheet.create({

// })
