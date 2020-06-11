import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ReceiptsScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <Text>This is ReceiptsScreen</Text>
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
