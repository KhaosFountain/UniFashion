import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';


export default class Header extends React.Component{
    render(){
        return(
            <View style = {style.logo}>
                {/* <Image source = {require('../Logo/UniFashion2-resize.png')}/> */}
                <Text style = {style.text}>UNIFASHION</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    logo:{
        width: '100%',
        height: '15%',
        backgroundColor: '#FEF4E8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    }
});