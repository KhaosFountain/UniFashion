
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    ScrollView,
    Platform,
    TouchableOpacity,
    Modal,
    FlatList,
} from 'react-native';


export default function FilterBody({ show, isShown }) {
    const [colorModalVisible, setColorModalVisible] = useState(false);
    const [typeModalVisible, setTypeModalVisible] = useState(false);
    const [color, setColor] = useState("");
    const [type, setType] = useState("");

    const pickerStyles = Platform.OS === 'ios' ? style.pickerIOS : style.pickerAndroid;

    const colors = [
        { label: 'Black', value: 'Black' },
        { label: 'White', value: 'White' },
        { label: 'Red', value: 'Red' },
        { label: 'Green', value: 'Green' },
        { label: 'Blue', value: 'Blue' },
    ];

    const clothingTypes = [
        { label: 'T-Shirt', value: 'T-Shirt' },
        { label: 'Shirt', value: 'Shirt' },
        { label: 'Shoe', value: 'Shoe' },
        { label: 'Pants', value: 'Pants' },
    ];

    const renderItemColor = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                setColor(item.value);
                setColorModalVisible(false);
            }}
        >
            <Text style={style.pickerItem}>{item.label}</Text>
        </TouchableOpacity>
    );

    const renderItemType = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                setType(item.value);
                setTypeModalVisible(false);
            }}
        >
            <Text style={style.pickerItem}>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <>

            <View style={style.container}>
                <Text style={style.title}>Filter Menu</Text>
                <View style={style.filter}>
                    <Text style={style.text}>Color:</Text>
                    <TouchableOpacity
                        onPress={() => {
                            setColorModalVisible(true);
                        }}
                        style={pickerStyles}
                    >
                        <Text style={style.text}>{color || 'Select color   '}  {"\u25BE"}</Text>
                    </TouchableOpacity>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={colorModalVisible}
                        onRequestClose={() => {
                            setColorModalVisible(false);
                        }}
                    >
                        <View style={style.centeredView}>
                            <View style={style.modalView}>
                                <FlatList
                                    data={colors}
                                    renderItem={renderItemColor}
                                    keyExtractor={(item) => item.value}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>

                <View style={style.filter}>
                    <Text style={style.text}>Cloth Type:</Text>
                    <TouchableOpacity
                        onPress={() => {
                            setTypeModalVisible(true);
                        }}
                        style={pickerStyles}
                    >
                        <Text style={style.text}>{type || 'Select type    '} {"\u25BE"}</Text>
                    </TouchableOpacity>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={typeModalVisible}
                        onRequestClose={() => {
                            setTypeModalVisible(false);
                        }}
                    >
                        <View style={style.centeredView}>
                            <View style={style.modalView}>
                                <FlatList
                                    data={clothingTypes}
                                    renderItem={renderItemType}
                                    keyExtractor={(item) => item.value}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>

                <View style={style.buttons}>
                    <Pressable style={style.filterBtn} onPress={() => { isShown(!show) }}>
                        <Text style={style.text}>Filter</Text>
                    </Pressable>
                    <Pressable style={style.closeBtn} onPress={() => { isShown(!show) }}>
                        <Text style={style.closeTxt}>Close</Text>
                    </Pressable>
                </View>
            </View>


        </>
    );

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#D64161FF',
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: "center",
        paddingLeft: 5,
        paddingBottom: 5,
        color: '#FC766AFF',
    },
    filter: {
        flex: .25,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
        width: '70%',
    },
    pickerIOS: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '80%',
        height: 40,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    pickerAndroid: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '80%',
        height: 40,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'grey',
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        marginTop: 56,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    pickerItem: {
        fontSize: 30,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 50,
    },
    filterBtn: {
        backgroundColor: '#000000FF',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        padding: 5,
        alignSelf: "center",
        width: 70,
    },
    closeBtn: {
        backgroundColor: '#D64161FF',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        padding: 5,
        alignSelf: "center",
        width: 70,
    },
    closeTxt: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
    }
});