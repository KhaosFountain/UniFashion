import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import ModalDropdown from 'react-native-modal-dropdown';



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




    return (
        <ScrollView style = {style.scroll}>
            <View style={style.add}>
                <Text style={style.title}>Add Details</Text>
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
                    <Picker
                        selectedValue={color}
                        onValueChange={(itemValue) => setColor(itemValue)}
                        style={style.picker}
                    >
                        <Picker.Item label="Black" value="black" />
                        <Picker.Item label="White" value="white" />
                        <Picker.Item label="Red" value="red" />
                        <Picker.Item label="Green" value="green" />
                        <Picker.Item label="Blue" value="blue" />
                    </Picker>

                    <Text style={style.label}>URL:</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Enter URL"
                        value={url}
                        onChangeText={setUrl}
                    />

                    <Text style={style.label}>Cloth Type:</Text>
                    <Picker
                        selectedValue={type}
                        onValueChange={(itemValue) => setType(itemValue)}
                        style={style.picker}
                    >
                        <Picker.Item label="T-Shirt" value="t-shirt" />
                        <Picker.Item label="Shirt" value="shirt" />
                        <Picker.Item label="Shoe" value="shoe" />
                        <Picker.Item label="Pants" value="pants" />
                        <Picker.Item label="Shorts" value="shorts" />
                    </Picker>

                    <Pressable style={style.addButton} onPress={AddProduct}>
                        <Text style={style.buttonText}>Add Product</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>

    );
}

const style = StyleSheet.create({
    scroll:{
        backgroundColor: 'black',
    },
    add: {
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#fef4e8",
        height: 900,
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
    dropdown: {
        width: '80%',
        height: 20,
        borderWidth: 2,
        backgroundColor: 'grey',
    },
    dropdownMenu: {
        fontSize: 20,
        borderWidth: 3,
        borderColor: 'pink',
        height: 100,
        width: '80%',
    }
});
