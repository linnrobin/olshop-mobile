import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PaymentsScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <Text>This is PaymentsScreen</Text>
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
