import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import TodoItem from "../../components/TodoItem";
import uuid from "react-native-uuid";
const source = "https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/original/07.jpg";

const HomePage = () => {
  const [items, setItems] = useState([
    { id: uuid.v4(), text: "Drink Milk" },
    { id: uuid.v4(), text: "Wash my cloth" },
    { id: uuid.v4(), text: "finish homework" },
    { id: uuid.v4(), text: "work harder" },
    { id: uuid.v4(), text: "complete my courses" },
  ]);
  const [enteredText, setEnteredText] = useState("");
  const removeItem = (id) => {
    const oldItems = items.filter((item) => item.id !== id);
    setItems(oldItems);
  };
  const addItem = (text) => {
    setItems((oldItems) => {
      return [{id: uuid.v4(),text}, ...oldItems];
    });
  };
  const [input, setInput] = useState("");
  return (
    <View style={styles.ParentContainer}>
      <ImageBackground source={source} resizeMode="cover" style={styles.backgroungImage}>
      <View style={styles.header}>
        <Text style={styles.headerText}>📆 Todo Items</Text>
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <TodoItem item={item} removeItem={removeItem} />
          )}
        />
      </View>
      <View style={styles.footerContainer}>
        <TextInput placeholder="Add Item" style={styles.textInput} value={enteredText} onChangeText={(text)=>setEnteredText(text)} />
        <TouchableOpacity style={styles.addButton} onPress={()=>addItem(enteredText)}>
          <Text style={styles.addItemButton}>ADD ITEM</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "red",
  },
  ParentContainer: {
    flex: "1",
  },
  backgroungImage:{
    flex:1,
  },
  header: {
    width: "100%",
    height: "12%",
  },
  headerText: {
    fontSize: 30,
    paddingLeft: 20,
    marginTop: "10%",
    fontWeight: "500",
  },
  bodyContainer: {
    width: "100%",
    height: "70%",
    paddingTop: 20,
  },
  footerContainer: {
    width: "100%",
    paddingLeft: 33,
  },
  textInput: {
    borderColor: "black",
    borderRadius: 10,
    backgroundColor:"#ffffff",
    borderWidth: 1,
    padding: 15,
    width: "90%",
    marginBottom:10,
  },
  addButton: {
    backgroundColor: "orange",
    width: "90%",
    padding: 15,
    borderRadius: 10,
  },
  addItemButton: {
    textAlign: "center",
    color: "white",
  },
});
export default HomePage;
