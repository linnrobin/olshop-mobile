import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./screens/DrawerContent";
import {
  ProductsStackScreen,
  CartsStackScreen,
  InvoicesStackScreen,
  PaymentsStackScreen,
  SystemStackScreen,
  HowToOrderStackScreen,
  ShippingFeeStackScreen,
  ReceiptStackScreen,
  ContactUsStackScreen,
} from "./screens/StackScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Products" component={ProductsStackScreen} />
        <Drawer.Screen name="Carts" component={CartsStackScreen} />
        <Drawer.Screen name="Invoices" component={InvoicesStackScreen} />
        <Drawer.Screen name="Payments" component={PaymentsStackScreen} />
        <Drawer.Screen name="System" component={SystemStackScreen} />
        <Drawer.Screen name="HowToOrder" component={HowToOrderStackScreen} />
        <Drawer.Screen name="ShippingFee" component={ShippingFeeStackScreen} />
        <Drawer.Screen name="Receipt" component={ReceiptStackScreen} />
        <Drawer.Screen name="ContactUs" component={ContactUsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>AAA</Text>
    // </View>
  );
};

export default App;
