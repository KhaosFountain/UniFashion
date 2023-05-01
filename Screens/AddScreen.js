import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { MultipleSelectList } from 'react-native-dropdown-select-list'


export default function AddScreen() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [url, setUrl] = useState("");
    const [type, setType] = useState("");
    const [selected, setSelected] = useState([]);
    const AddProduct = () => {
        //gotta figure out how to do ths
    };


    const data = [
        {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]
  
    return (
        <View style={style.add}>
            <Text style={style.title}>Add Screen</Text>
            <View style={style.box}>
                <Text style={style.label}>Cloth Name:</Text>
                <TextInput
                    style={style.input}
                    placeholder="Enter cloth name"
                    value={name}
                    onChangeText={setName}
                />

                <Text style={style.label}>Cloth Price:</Text>
                <TextInput
                    style={style.input}
                    placeholder="Enter cloth price"
                    value={price}
                    onChangeText={setPrice}
                />

                <Text style={style.label}>Cloth Color:</Text>
                {/* <Picker
                    selectedValue={color}
                    onValueChange={(itemValue) => setColor(itemValue)}
                    style={style.picker}
                >
                    <Picker.Item label="Black" value="black" />
                    <Picker.Item label="White" value="white" />
                    <Picker.Item label="Red" value="red" />
                    <Picker.Item label="Green" value="green" />
                    <Picker.Item label="Blue" value="blue" />
                </Picker> */}
                 <MultipleSelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        onSelect={() => alert(selected)} 
        label="Categories"
    />

                <Text style={style.label}>URL:</Text>
                <TextInput
                    style={style.input}
                    placeholder="Enter URL"
                    value={url}
                    onChangeText={setUrl}
                />

                <Text style={style.label}>Cloth Type:</Text>
                {/* <Picker
                    selectedValue={type}
                    onValueChange={(itemValue) => setType(itemValue)}
                    style={style.picker}
                >
                    <Picker.Item label="T-Shirt" value="t-shirt" />
                    <Picker.Item label="Shirt" value="shirt" />
                    <Picker.Item label="Shoe" value="shoe" />
                    <Picker.Item label="Pants" value="pants" />
                    <Picker.Item label="Shorts" value="shorts" />
                </Picker> */}

                <Pressable style={style.addButton} onPress={AddProduct}>
                    <Text style={style.buttonText}>Add Product</Text>
                </Pressable>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    add: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#fef4e8",
    },
    title: {
        alignItems: 'center',
        fontSize: 30,
    },
    box: {
        borderWidth: 2,
        borderColor: 'black',
        width: 400,
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '80%',
        height: 40,
        padding: 10,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#101820FF',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    picker: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '80%',
        height: 40,
        borderRadius: 5,
        marginBottom: 10,
      },
});
