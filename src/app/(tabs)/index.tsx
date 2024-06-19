import ProductListItem from "@/src/components/ProductListItem";
import { View } from "react-native";
import products from "@/assets/data/products";

export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[5]} />
    </View>
  );
}
