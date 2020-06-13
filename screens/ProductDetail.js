import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ProductDetail({ route, navigation }) {
  //   const { image, name, stock, code } = route.params;
  console.log("ini props", route.params);
  return (
    <View style={styles.main}>
      {/* <Text>{code}</Text>
      <Text>{name}</Text>
      <Text>{stock}</Text> */}
      <Button onPress={() => navigation.goBack()} title="Back"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
