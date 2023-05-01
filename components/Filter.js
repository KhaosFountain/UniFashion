import React from "react";
import { View, Button, Text, Modal, StyleSheet, Pressable } from 'react-native'
import { useState } from "react";
import FilterBody from "./FilterBody";

export default function Popup() {
    const [show, isShown] = useState(false)
    return (
        <View style={style.container}>
            <Modal transparent={true} visible={show} animationType="fade">
                <View style={style.outerModal}>
                    <View style={style.InnerModal}>
                        <FilterBody show={show} isShown={isShown} />
                    </View>
                </View>
            </Modal>
            <Pressable style={style.showBtn} onPress={() => { isShown(!show) }}>
                <Text style={style.text}>Filter</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    container: {

    },
    outerModal: {
        backgroundColor: "#000000aa",
        flex: 1,
        justifyContent: "center",
    },
    InnerModal: {
        backgroundColor: "black",
        marginRight: "auto",
        marginTop: 35,
        flex: .7,
        minWidth: 300,
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        color: 'red',
        textAlign: "center",
    },
    buttons:{
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    showBtn: {
        backgroundColor: '#101820FF',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
    },
    filterBtn:{
        backgroundColor: '#000000FF',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        padding: 5,
        marginBottom: 60,
        alignSelf: "center",
        width: 70,
    },
    closeBtn: {
        backgroundColor: '#D64161FF',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        padding: 5,
        marginBottom: 60,
        alignSelf: "center",
        width: 70,
    },
    closeTxt:{
        color: 'white',
        fontSize: 20,
        textAlign: "center",
    }
});
