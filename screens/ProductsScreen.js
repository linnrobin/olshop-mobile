import React, { useLayoutEffect, useState } from "react";
import { ScrollView, Button, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProductCard from "../components/ProductCard";
import * as Animatable from "react-native-animatable";

export default function ProductsScreen({ navigation }) {
  const productList = [
    {
      image:
        "https://media.missguided.com/s/missguided/CL110615_set/1/pink-floral-leopard-print-cupped-maxi-dress",
      code: "98002",
      name: "nco rajut",
      price: 60000,
      stock: 11,
    },
    {
      image: "https://cf.shopee.co.id/file/89645841ebbd76c9849fcd5950a9de0a",
      code: "8230",
      name: "nco rajut",
      price: 120000,
      stock: 34,
    },
    {
      image: "https://media.monsoon.co.uk/medias/sys_master/9449009119262.jpg",
      code: "1911",
      name: "nco jaket jeans",
      price: 100000,
      stock: 15,
    },
    {
      image: "https://media.monsoon.co.uk/medias/sys_master/9449009119262.jpg",
      code: "1912",
      name: "nco jaket jeans nco jaket jeans",
      price: 100000,
      stock: 15,
    },
  ];
  const [count, setCount] = useState(0);
  const [isSearchPressed, setIsSearchPressed] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            console.log("pressed");
            setIsSearchPressed(!isSearchPressed);
          }}
          title="Search"
        />
      ),
    });
  }, [navigation, setCount]);

  const [value, onChangeText] = useState("");

  return (
    <>
      {isSearchPressed ? (
        <Animatable.View animation="bounceIn">
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder="Input Search Code / Name here..."
          />

          <Button onPress={() => setIsSearchPressed(false)} title="Search" />
        </Animatable.View>
      ) : null}
      <ScrollView>
        {/* <Text>Count: {count}</Text> */}
        {productList.map((product) => (
          <ProductCard
            key={product.code}
            product={product}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </>
  );
}
