import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Card } from "@ui-kitten/components";
import formatRupiah from "../helpers/formatRupiah";
import { useDispatch } from "react-redux";
import { setProductDetail, setPreviousScreen } from "../store/actions";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function ProductCard(props) {
  const dispatch = useDispatch();
  const { navigation } = props;
  const { image, name, stock, code } = props.product;
  const { product } = props;
  const { previous_screen } = props;

  let name_shrink = name;
  if (name_shrink.length >= 16) {
    name_shrink = name.slice(0, 12) + "...";
  }

  const price = formatRupiah(props.product.price, "Rp");

  const handleDetail = () => {
    dispatch(setProductDetail(product));
    dispatch(setPreviousScreen(previous_screen));
    navigation.navigate("ProductDetail");
  };

  return (
    <Card style={styles.container}>
      <TouchableOpacity onPress={handleDetail}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
          <View style={styles.content}>
            <View>
              <Text>{code}</Text>

              <Text>{name_shrink}</Text>
            </View>
            <View>
              {previous_screen === "productScreen" ? (
                <Text style={styles.badgeStock}>{stock}</Text>
              ) : (
                <View style={styles.rowQuantity}>
                  <Text style={styles.badgeQuantity}>{product.quantity}</Text>
                  <Text style={styles.badgeStock}>{stock}</Text>
                </View>
              )}
              <Text style={styles.badgePrice}>{price}</Text>
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
    width: screenWidth * 0.9,
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
  rowQuantity: {
    flexDirection: "row",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  content: {
    paddingLeft: 10,
    justifyContent: "space-around",
    width: screenWidth * 0.38,
  },
  badgeStock: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  badgeQuantity: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    marginRight: 5,
  },
  badgePrice: {
    backgroundColor: "green",
    color: "white",
    padding: 10,
    borderRadius: 10,
  },
});
