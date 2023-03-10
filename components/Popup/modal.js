import React from "react";
import {View, Button, Text, Modal, StyleSheet } from 'react-native'
import { useState } from "react";

export default function Popup(){
    const[show,isShown] = useState(true)
    return(
        <View>
            <Modal transparent={true} visible={show}>
             <View style={style.outerModal}>
             <View style={style.InnerModal}>
             <Text style = {{fontSize: 80}}> This is a modal</Text>
             <Button title="Hide Modal" onPress={()=>{isShown(!show)}}/>
             </View>
            </View>
            </Modal>
            <Button color={"red"} title="Show Modal" onPress={()=>{isShown(!show)}}/>
        </View>
    )
}

const style = StyleSheet.create({

    outerModal:{
        backgroundColor: 
        "#000000aa",flex:1
    },
    InnerModal:{
        backgroundColor:"white",
        marginRight:"auto", 
        marginTop:35,
        flex:1
    },
  });
  