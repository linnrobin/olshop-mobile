import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  Card,
  Button,
  ButtonGroup,
  Modal,
  Layout,
} from "@ui-kitten/components";
import formatRupiah from "../helpers/formatRupiah";

export default function ProductCard(props) {
  const { navigation } = props;
  const { image, name, stock, code } = props.product;
  //   console.log(props);

  const price = formatRupiah(props.product.price, "Rp");

  return (
    <Card style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log("ini dari product card: ", props.product);
          navigation.navigate("ProductDetail", { image, name, stock, code });
        }}
      >
        <View style={styles.row}>
          <Image
            style={{
              width: 200,
              height: 200,
              resizeMode: "contain",
            }}
            source={{
              uri: image,
            }}
          />
          <View style={styles.content}>
            <View>
              <Text>{code}</Text>
              <Text>{name}</Text>
              <Text>{stock}</Text>
            </View>
            <View>
              <Text>{price}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 20,
    height: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  row: {
    marginHorizontal: -24,
    marginVertical: -16,
    flexDirection: "row",
  },
  content: {
    paddingLeft: 10,
    justifyContent: "space-around",
  },
  detail: {
    // paddingLeft: 10,
  },
});
