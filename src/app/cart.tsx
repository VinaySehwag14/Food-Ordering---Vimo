import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { CartItem, Product } from "../types";
import { useCart } from "../providers/CartProvider";
import CartListItem from "@/components/CartListItem";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
};

const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
