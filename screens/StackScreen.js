import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import ProductsScreen from "./ProductsScreen";
import CartsScreen from "./CartsScreen";
import InvoicesScreen from "./InvoicesScreen";
import PaymentsScreen from "./PaymentsScreen";
import SystemScreen from "./SystemScreen";
import HowToOrderScreen from "./HowToOrderScreen";
import ShippingFeeScreen from "./ShippingFeeScreen";
import ReceiptScreen from "./ReceiptsScreen";
import ContactUsScreen from "./ContactUsScreen";
import ProductDetail from "./ProductDetail";

const ProductsStack = createStackNavigator();
const CartsStack = createStackNavigator();
const InvoicesStack = createStackNavigator();
const PaymentsStack = createStackNavigator();
const SystemStack = createStackNavigator();
const HowToOrderStack = createStackNavigator();
const ShippingFeeStack = createStackNavigator();
const ReceiptStack = createStackNavigator();
const ContactUsStack = createStackNavigator();
const ProductDetailStack = createStackNavigator();

export const ProductsStackScreen = ({ navigation }) => (
  <ProductsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="blue"
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}
  >
    <ProductsStack.Screen name="Products" component={ProductsScreen} />
  </ProductsStack.Navigator>
);

export const CartsStackScreen = ({ navigation }) => (
  <CartsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="blue"
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}
  >
    <CartsStack.Screen name="Carts" component={CartsScreen} />
  </CartsStack.Navigator>
);

export const InvoicesStackScreen = ({ navigation }) => (
  <InvoicesStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="blue"
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}
  >
    <InvoicesStack.Screen name="Invoices" component={InvoicesScreen} />
  </InvoicesStack.Navigator>
);

export const PaymentsStackScreen = ({ navigation }) => (
  <PaymentsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="blue"
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}
  >
    <PaymentsStack.Screen name="Payments" component={PaymentsScreen} />
  </PaymentsStack.Navigator>
);

export const SystemStackScreen = ({ navigation }) => (
  <SystemStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="blue"
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}
  >
    <SystemStack.Screen name="System" component={SystemScreen} />
  </SystemStack.Navigator>
);

export const HowToOrderStackScreen = ({ navigation }) => (
  <HowToOrderStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="blue"
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}
  >
    <HowToOrderStack.Screen name="HowToOrder" component={HowToOrderScreen} />
  </HowToOrderStack.Navigator>
);

export const ShippingFeeStackScreen = ({ navigation }) => (
  <ShippingFeeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="blue"
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}
  >
    <ShippingFeeStack.Screen name="ShippingFee" component={ShippingFeeScreen} />
  </ShippingFeeStack.Navigator>
);

export const ReceiptStackScreen = ({ navigation }) => (
  <ReceiptStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="blue"
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}
  >
    <ReceiptStack.Screen name="Receipt" component={ReceiptScreen} />
  </ReceiptStack.Navigator>
);

export const ContactUsStackScreen = ({ navigation }) => (
  <ContactUsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="blue"
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}
  >
    <ContactUsStack.Screen name="ContactUs" component={ContactUsScreen} />
  </ContactUsStack.Navigator>
);

export const ProductDetailStackScreen = (props) => (
  <ProductDetailStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="blue"
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}
  >
    {/* <ProductDetailStack.Screen name="ProductDetail" component={ProductDetail} /> */}
  </ProductDetailStack.Navigator>
);
