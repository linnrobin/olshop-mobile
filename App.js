import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./screens/DrawerContent";
import ProductsScreen from "./screens/ProductsScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Products" component={ProductsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
