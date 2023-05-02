import React, { useEffect, useState } from "react";
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
import { scheduleNotificationHandler, sendPushNotificationHandler } from "../components/notifs";

export default function FilterScreen({ navigation }) {
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [colorModalVisible, setColorModalVisible] = useState(false);
  const [typeModalVisible, setTypeModalVisible] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [isDeleted, setDeleted] = useState(false)

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
    } catch (err) {
      console.log(err);
      navigation.navigate("signup");
    }
  };

  const deleteApi = async (name) => {
    try {
      await fetch(
        `http://54.167.138.208:8000/products/delete/${name}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420", // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
        }
      );
      setDeleted(true)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isDeleted) {
      navigation.navigate("Filter");
      setDeleted(false);
      callAPI();
    }
  }, [isDeleted]);

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
      <View style={style.container}>
        <View style={style.card}>
  
          <View style={style.inputGroup}>
            <Text style={style.label}>Cloth Color:</Text>
            <TouchableOpacity
              onPress={() => {
                setColorModalVisible(true);
              }}
              style={pickerStyles}
            >
              <Text style={style.text}>
                {color || "Select color    "} {"\u25BE"}
              </Text>
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
          <View style={style.inputGroup}>
            <Text style={style.label}>Cloth Type:</Text>
            <TouchableOpacity
              onPress={() => {
                setTypeModalVisible(true);
              }}
              style={pickerStyles}
            >
              <Text style={style.text}>
                {type || "Select type     "} {"\u25BE"}
              </Text>
            </TouchableOpacity>
            <Modal
              animationType="fade"
              transparent={true}
              visible={typeModalVisible}
              onRequestClose={() => {
                setColorModalVisible(false);
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


          {/* Add Product Button */}
          <Pressable style={style.addButton} onPress={async () => callAPI()}>
            <Text style={style.buttonText}>Filter</Text>
          </Pressable>
          {filtered.map((filter) => (
            <View style={style.cardContainer} key={filter._id}>
              <Image source={{ uri: filter.url }} style={style.image} />
              <View style={style.cardTextContainer}>
                <Text style={style.cardTitle}>
                  Title: {filter.productTitle}
                </Text>
                <Text style={style.cardSubtitle}>Color: {filter.color}</Text>
                <Text style={style.cardName}>Name: {filter.productName}</Text>
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
    backgroundColor: "#2E5266FF",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#2E5266FF",
  },
  title: {
    fontSize: 30,
    color: "#D3D0CBFF",
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 200,
     height: 200 ,
    resizeMode: "contain",
  },
  card: {
    backgroundColor: "#D3D0CBFF",
    width: "70%",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 100,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "#6E8898FF",
  },
  text: {
    fontSize: 18,
    color: "#2E5266FF",
    textAlign: "center",
    paddingLeft: 5,
    paddingBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#6E8898FF",
    backgroundColor: "#9FB1BCFF",
    width: "100%",
    height: 40,
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#2E5266FF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  pickerIOS: {
    borderWidth: 1,
    borderColor: "#6E8898FF",
    backgroundColor: "#9FB1BCFF",
    width: "100%",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
  },
  pickerAndroid: {
    borderWidth: 1,
    borderColor: "#6E8898FF",
    backgroundColor: "#9FB1BCFF",
    width: "100%",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
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
  cardContainer:{
    overflow: 'hidden',
    width: '100%',
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
  },
  cardTextContainer:{
    flex: 1,
    alignItems: "flex-start",
  },
  buyButton:{
    backgroundColor: "pink",
    padding: 10,
    marginBottom: 30,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 3,
    width: '50%',
  }
});
