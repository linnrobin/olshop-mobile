import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Card } from "@ui-kitten/components";
import { useSelector } from "react-redux";
import formatRupiah from "../helpers/formatRupiah";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function InvoicesScreen({ navigation }) {
  const invoice = useSelector((state) => state.invoice);

  let totalPrice = 0;
  if (invoice.price !== undefined) {
    totalPrice = formatRupiah(invoice.totalPrice, "Rp");
  }

  const handleShowCart = () => {
    console.log(invoice.cart);
  };

  return (
    <Card style={styles.container}>
      <TouchableOpacity onPress={handleShowCart}>
        <View style={styles.row}>
          <Text style={styles.badgeCode}>Invoice No</Text>
          <Text style={styles.code}>{invoice.code}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.badgeQuantity}>Total Quantity</Text>
          <Text style={styles.quantity}>{invoice.totalQuantity}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.badgePrice}>Total Price</Text>
          <Text style={styles.price}>{totalPrice}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.badgeStatus}>{invoice.status}</Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: 300,
    width: screenWidth * 0.9,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 200,
    height: 200,
  },
  badgeCode: {
    backgroundColor: "black",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  code: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    padding: 5,
  },
  badgeQuantity: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  quantity: {
    fontWeight: "bold",
    fontSize: 18,
    color: "red",
    padding: 5,
  },
  badgePrice: {
    backgroundColor: "green",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    color: "green",
    padding: 5,
  },
  badgeStatus: {
    backgroundColor: "yellow",
    color: "black",
    fontWeight: "bold",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
});
