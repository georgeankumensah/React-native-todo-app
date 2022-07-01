import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const TodoItem = ({ item, removeItem }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{item.text}</Text>
      <TouchableOpacity onPress={()=>removeItem(item.id)} style={styles.removeButton}>
        <Text style={styles.closeText}>❌</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    paddingLeft: 33,
    paddingTop: 10,
    height: 50,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0,0,0,0.3)",
    flexDirection: "row",
  },
  text: {
    fontWeight:"300",
  },
  removeButton: {
    position:"absolute",
    right:30,
    top:5
  },
  closeText:{
    fontSize:20,
  }
});
export default TodoItem;
