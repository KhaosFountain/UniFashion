import React from "react";
import {View, Button, Text,  StyleSheet, FlatList } from 'react-native'

export default function Filter(){
    return(
        <View>
        <FlatList
        data={[
          {key: 'Colour'},
          {key: 'Clothing'},
          {key: 'Brand'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
        </View>
    )
}

const styles = StyleSheet.create({

})
