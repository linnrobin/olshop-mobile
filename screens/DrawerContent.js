import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
              style={{ marginTop: 20, marginBottom: 25 }}
              source={{
                uri:
                  "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
              }}
              size={50}
            />
            <View style={{ marginLeft: 15, flexDirection: "column" }}>
              <Title style={styles.title}>TOKO A</Title>
              <Caption style={styles.caption}>Supplier Baju</Caption>
            </View>
          </View>

          <View style={(styles.row, {})}>
            <View style={(styles.section, { flexDirection: "column" })}>
              <Paragraph style={(styles.Paragraph, styles.caption)}>
                Welcome,
              </Paragraph>
              <Title style={styles.title}>ROBIN</Title>
            </View>
          </View>
        </View>
        <View
          style={
            (styles.section,
            {
              marginLeft: 0,
              borderTopWidth: 1,
              borderTopColor: "#f4f4f4",
              borderBottomWidth: 1,
              borderBottomColor: "#f4f4f4",
            })
          }
        />
        <DrawerContentScrollView {...props}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="content-copy" color={color} size={size} />
              )}
              label="Products"
              onPress={() => {
                props.navigation.navigate("Products");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="cart-outline" color={color} size={size} />
              )}
              label="Carts"
              onPress={() => {
                props.navigation.navigate("Carts");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="currency-usd" color={color} size={size} />
              )}
              label="Invoices"
              onPress={() => {
                props.navigation.navigate("Invoices");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="cash" color={color} size={size} />
              )}
              label="Payments"
              onPress={() => {
                props.navigation.navigate("Payments");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="table-search" color={color} size={size} />
              )}
              label="System Information"
              onPress={() => {
                props.navigation.navigate("System");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="help-circle-outline" color={color} size={size} />
              )}
              label="How To Order"
              onPress={() => {
                props.navigation.navigate("HowToOrder");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="truck-fast" color={color} size={size} />
              )}
              label="Shipping Fee"
              onPress={() => {
                props.navigation.navigate("ShippingFee");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="script-outline" color={color} size={size} />
              )}
              label="Receipt"
              onPress={() => {
                props.navigation.navigate("Receipt");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="phone-outline" color={color} size={size} />
              )}
              label="Contact Us"
              onPress={() => {
                props.navigation.navigate("ContactUs");
              }}
            />
          </Drawer.Section>
        </DrawerContentScrollView>
      </View>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Section title="Preferences">
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}
          >
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  Paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 0,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
