import React from "react";
import {View, Button, Text, Modal } from 'react-native'
import { useState } from "react";
import Buttons from "./Buttons"

export default function Popup(){
  
    const[show,isShown] = useState(true)
    return(
        <View>
            <Button title = "Hide Modal" onPress={()=>{isShown(!show)}}/>
            <Modal transparent={true} visible={show}>
             <View style={{backgroundColor: "#000000aa",flex:1}}>
             <View style={{backgroundColor:"white",marginRight:"auto", marginTop:35,flex:1}}>
             <Text style = {{fontSize: 80}}> This is a modal</Text>
             <Button title = "Hide Modal" onPress={()=>{isShown(!show)}}/>
             </View>
            </View>
            </Modal>

        </View>
    )
}