import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
} from "react-native";
import { Card, Modal, Input } from "@ui-kitten/components";

import { useDispatch, useSelector } from "react-redux";
import { setCart, editCart } from "../store/actions";

import formatRupiah from "../helpers/formatRupiah";
import Toast from "react-native-simple-toast";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function ProductDetail({ navigation }) {
  const product_detail = useSelector((state) => state.product_detail);
  const previous_screen = useSelector((state) => state.previous_screen);
  const cart = useSelector((state) => state.cart);

  const { code, image, name, stock } = product_detail;
  const price = formatRupiah(product_detail.price, "Rp");
  const totalPrice = formatRupiah(
    product_detail.quantity * product_detail.price,
    "Rp"
  );

  const [visible, setVisible] = useState(false);
  const [visibleMessage, setVisibleMessage] = useState(false);
  const [value, setValue] = useState("");
  const [note, setNote] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (value <= stock && Number(value) >= 1) {
      const newCartItem = {
        code: product_detail.code,
        image: product_detail.image,
        name: product_detail.name,
        stock: product_detail.stock,
        price: product_detail.price,
        quantity: Number(value),
        note: note,
      };
      dispatch(setCart(newCartItem));
      Toast.show("Successfully Added to cart");
      setVisibleMessage(false);
      setVisible(false);
      setValue("");
      setNote("");
    } else {
      setVisibleMessage(true);
    }
  };

  const handleEdit = () => {
    if (value <= stock && Number(value) >= 1) {
      const editCartItem = {
        code: product_detail.code,
        image: product_detail.image,
        name: product_detail.name,
        stock: product_detail.stock,
        price: product_detail.price,
        quantity: Number(value),
        note: note,
      };
      dispatch(editCart({ cart, editCartItem }));
      Toast.show("Successfully Edited Cart");
      setVisibleMessage(false);
      setVisible(false);
      setValue(product_detail.quantity.toString());
      setNote(product_detail.note);
    } else {
      setVisibleMessage(true);
    }
  };

  return (
    <ScrollView>
      <Card style={styles.container}>
        <View style={styles.col}>
          <Button
            style={{ alignSelf: "flex-end" }}
            onPress={() => navigation.goBack()}
            title="Back"
          />
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
          <Text style={styles.name}>{name}</Text>

          <View style={styles.row}>
            <Text style={styles.badgeCode}>Code</Text>
            <Text style={styles.code}>{code}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.badgeStock}>Stock</Text>
            <Text style={styles.stock}>{stock}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.badgePrice}>Price</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
          {previous_screen === "productScreen" ? null : (
            <>
              <View style={styles.row}>
                <Text style={styles.badgeQuantity}>Quantity</Text>
                <Text style={styles.quantity}>{product_detail.quantity}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.badgeQuantity}>Total</Text>
                <Text style={styles.quantity}>{totalPrice}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.badgeNote}>Note</Text>
                <Text style={styles.note}>{product_detail.note}</Text>
              </View>
            </>
          )}
          {previous_screen === "productScreen" ? (
            <Button
              style={styles.cart}
              onPress={() => {
                setVisible(true);
                setValue("");
                setNote("");
              }}
              title="Add To Cart"
            ></Button>
          ) : (
            <Button
              style={styles.cart}
              onPress={() => {
                setVisible(true);
                setValue(product_detail.quantity.toString());
                setNote(product_detail.note);
              }}
              title="Edit"
            ></Button>
          )}
        </View>
      </Card>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => {
          setVisible(false);
          setVisibleMessage(false);
          setValue(0);
        }}
      >
        <Card disabled={true}>
          {visibleMessage ? (
            <Text style={{ color: "red" }}>
              Quantity Must Be More Or Equal To 1, and Less Than Stock!!!
            </Text>
          ) : null}
          <Input
            placeholder="Input Quantity"
            value={value}
            keyboardType={"numeric"}
            onChangeText={(nextValue) => {
              if (nextValue >= 1) {
                setVisibleMessage(false);
                setValue(nextValue);
              } else {
                setValue(0);
                setVisibleMessage(true);
              }
            }}
          />
          <Input
            placeholder="Add Note..."
            size="large"
            value={note}
            onChangeText={(nextNote) => {
              setNote(nextNote);
            }}
          />
          {previous_screen === "productScreen" ? (
            <Button onPress={handleAdd} title="Add" />
          ) : (
            <Button onPress={handleEdit} title="Edit" />
          )}
        </Card>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 20,
    // height: screenHeight * 0.8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: "center",
  },
  row: {
    width: screenWidth - 40,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  outerCol: {
    // height: screenHeight * 0.8 - 48,
    justifyContent: "space-between",
  },
  col: {
    marginHorizontal: -24,
    marginVertical: -16,
    flexDirection: "column",
  },
  image: {
    width: screenWidth - 40,
    height: screenWidth - 40,
    resizeMode: "contain",
    marginBottom: 10,
  },
  badgeCode: {
    backgroundColor: "black",
    color: "white",
    padding: 10,
    borderRadius: 10,
  },
  code: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  name: {
    fontSize: 14,
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  badgeStock: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    borderRadius: 10,
  },
  stock: {
    fontWeight: "bold",
    fontSize: 18,
    color: "blue",
  },
  badgeQuantity: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 10,
  },
  quantity: {
    fontWeight: "bold",
    fontSize: 18,
    color: "red",
  },
  badgeNote: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  note: {
    fontSize: 14,
    color: "red",
    paddingLeft: 60,
    marginBottom: 20,
  },
  badgePrice: {
    backgroundColor: "green",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    color: "green",
    marginBottom: 20,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
