import React, { useState } from "react";
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
  Image,
} from "react-native";

export default function FilterScreen({ navigation }) {
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [colorModalVisible, setColorModalVisible] = useState(false);
  const [typeModalVisible, setTypeModalVisible] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const callAPI = async () => {
    try {
      const res = await fetch("http://54.167.138.208:8000/products/find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420", // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
        },
        body: JSON.stringify({
          productTitle: type,
          color: color,
        }), // Need to use POST to send body
      });
      const data = await res.json();
      setFiltered(data);
      setColor("");
      setType("");
    } catch (err) {
      console.log(err);
      navigation.navigate("signup");
    }
  };

  const pickerStyles =
    Platform.OS === "ios" ? style.pickerIOS : style.pickerAndroid;

  const colors = [
    { label: "Black", value: "black" },
    { label: "White", value: "white" },
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const clothingTypes = [
    { label: "T-Shirt", value: "t-shirt" },
    { label: "Shirt", value: "shirt" },
    { label: "Shoe", value: "shoe" },
    { label: "Pants", value: "pants" },
    { label: "Shorts", value: "shorts" },
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
    <ScrollView style={style.scroll}>
      <View style={style.add}>
        <Text style={style.title}>Add Details</Text>
        <View style={style.box}>
          <Text style={style.label}>Cloth Color:</Text>
          <TouchableOpacity
            onPress={() => {
              setColorModalVisible(true);
            }}
            style={pickerStyles}
          >
            <Text>{color || "Select color"}</Text>
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

          <Text style={style.label}>Cloth Type:</Text>
          <TouchableOpacity
            onPress={() => {
              setTypeModalVisible(true);
            }}
            style={pickerStyles}
          >
            <Text>{type || "Select type"}</Text>
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

          <Pressable style={style.addButton} onPress={async () => callAPI()}>
            <Text style={style.buttonText}>Add Product</Text>
          </Pressable>
          {filtered.map((filter) => (
            <View style={style.cardContainer} key={filter._id}>
              <Image source={{ uri: filter.url }} style={style.image} />
              <View style={style.cardTextContainer}>
                <Text style={style.cardTitle}>
                  Title: {filter.productTitle}
                </Text>
                <Text style={style.cardSubtitle}>color: {filter.color}</Text>
                <Text style={style.cardName}>name: {filter.productName}</Text>
                <Text style={style.cardPrice}>Price: ${filter.price}</Text>
              </View>
              <Pressable
                style={style.buyButton}
                onPress={() => {
                  scheduleNotificationHandler(filter.productName);
                  sendPushNotificationHandler();
                  deleteApi(filter.productName);
                }}
              >
                <Text style={style.buyButtonText}>Buy</Text>
              </Pressable>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  scroll: {
    backgroundColor: "black",
  },
  add: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fef4e8",
    height: 900,
  },
  title: {
    alignItems: "center",
    fontSize: 30,
  },
  image: {
    width: 200,
     height: 200 ,
    resizeMode: "contain",
  },
  box: {
    borderWidth: 2,
    borderColor: "black",
    width: 400,
    height: 600,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    height: 40,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#101820FF",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  pickerIOS: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  pickerAndroid: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "green",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "grey",
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    marginTop: 56,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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