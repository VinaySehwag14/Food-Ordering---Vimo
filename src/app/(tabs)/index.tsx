import products from "@/assets/data/products";
import ProductListItem from "@/components/ProductListItem";
import { FlatList, View } from "react-native";

export default function MenuScreen() {
  return (
    <View>
      {/* <ProductListItem product={products[5]} /> */}
      {/* <ProductListItem product={products[1]} /> */}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
