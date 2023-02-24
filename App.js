// import * as React from 'react';
import React from 'react';
import { StyleSheet, Button, Text, View, TextInput } from "react-native";

import { useState } from "react";
import Header from './components/header'
import Boxes from './components/Boxes'


export  default class App extends React.Component{
  render(){
    return(
      <View style = {style.container}>
        <Header/>
        <Boxes/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container:{
      flex: 1,
  },
});



//run the command: expo install expo-web-browser