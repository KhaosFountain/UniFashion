import React from "react";
import {View, Button, Text,  StyleSheet, FlatList, TouchableHighlight,Alert } from 'react-native'
import BrandFilter from "./BrandFilter";
import ClothesFilter from "./ClothesFilter";
import ColorFilter from "./ColorFilter";


export default function Filters(){

    return(
    <View>
       <ClothesFilter/>
       <ColorFilter/>
       <BrandFilter/>
    </View>
    )
}