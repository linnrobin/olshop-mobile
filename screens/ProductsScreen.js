import React from "react";
import { ScrollView, View, Text, StyleSheet, Card, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

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
      code: "1911",
      name: "nco jaket jeans",
      price: 100000,
      stock: 15,
    },
  ];
  return (
    <ScrollView>
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => index}
        renderItem={productList.map((el) => (
          <View style={styles.main}>
            <Image
              style={{
                width: 200,
                height: 200,
                resizeMode: "contain",
                borderRadius: 20,
              }}
              source={{
                uri: productList[2].image,
              }}
            />
            <Text>{productList[2].name}</Text>
          </View>
        ))}
      ></FlatList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
