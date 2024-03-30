import Colors from "@/src/constants/Colors";
import { Tables } from "@/src/types";
import { Link, useSegments } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";

type ProductListItemProps = {
  product: Tables<"products">;
};

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const ProductListItem = ({ product }: ProductListItemProps) => {
  const segments = useSegments();
  const href = `/${(segments && segments[0]) || "default"}/menu/${product.id}`;

  return (
    <Link href={href as `/${string}/menu/${number}`} asChild>
      <Pressable style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: product.image ?? defaultPizzaImage,
          }}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },
  image: {
    width: `100%`,
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  price: {
    color: Colors.light.tint,
  },
});
