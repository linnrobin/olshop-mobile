import React, { useLayoutEffect, useState, useEffect } from "react";
import { ScrollView, Button, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProductCard from "../components/ProductCard";
import * as Animatable from "react-native-animatable";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions";

export default function ProductsScreen({ navigation }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [isSearchPressed, setIsSearchPressed] = useState(false);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            // console.log("pressed");
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
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            navigation={navigation}
            previous_screen="productScreen"
          />
        ))}
      </ScrollView>
    </>
  );
}
