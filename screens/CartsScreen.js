import React from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import formatRupiah from "../helpers/formatRupiah";

export default function CartsScreen({ navigation }) {
  const cart = useSelector((state) => state.cart);
  let cartQuantity = 0;
  let cartPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    cartQuantity += cart[i].quantity;
    cartPrice += cart[i].price * cart[i].quantity;
  }
  cartPrice = formatRupiah(cartPrice, "Rp");
  const handleGenerateInvoice = () => {
    console.log("checking to db...");
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.quantity}>
          <Text style={styles.caption}>Total Quantity</Text>
          <Text style={styles.text}>{cartQuantity}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.caption}>Total Price</Text>
          <Text style={styles.text}>{cartPrice}</Text>
        </View>
      </View>
      <Button onPress={handleGenerateInvoice} title="Generate Invoice Now" />
      <ScrollView>
        {cart.map((item, index) => (
          <ProductCard
            key={index}
            product={item}
            navigation={navigation}
            previous_screen="cartScreen"
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  quantity: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    color: "white",
  },

  price: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    color: "white",
  },
  caption: {
    color: "white",
    fontSize: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
