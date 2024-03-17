import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { CartItem, Product } from "../types";
import { useCart } from "../providers/CartProvider";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
};

const CartScreen = () => {
  const { items } = useCart();
  console.log(items, "DFS❤️");
  return (
    <View>
      <Text>CartScreen</Text>
      <Text>CartContext length:{items.length}</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
