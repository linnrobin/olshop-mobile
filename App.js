import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
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
  ProductDetailStackScreen,
} from "./screens/StackScreen";
import { Provider } from "react-redux";
import store from "./store";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen
              name="Products"
              component={ProductsStackScreen}
              options={({ navigation, route }) => ({
                headerTitle: (props) => <LogoTitle {...props} />,
              })}
            />
            <Drawer.Screen name="Carts" component={CartsStackScreen} />
            <Drawer.Screen name="Invoices" component={InvoicesStackScreen} />
            <Drawer.Screen name="Payments" component={PaymentsStackScreen} />
            <Drawer.Screen name="System" component={SystemStackScreen} />
            <Drawer.Screen
              name="HowToOrder"
              component={HowToOrderStackScreen}
            />
            <Drawer.Screen
              name="ShippingFee"
              component={ShippingFeeStackScreen}
            />
            <Drawer.Screen name="Receipt" component={ReceiptStackScreen} />
            <Drawer.Screen name="ContactUs" component={ContactUsStackScreen} />
            <Drawer.Screen
              name="ProductDetail"
              component={ProductDetailStackScreen}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
