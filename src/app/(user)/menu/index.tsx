import { FlatList, View } from "react-native";

import ProductListItem from "@/src/components/ProductListItem";
import products from "@/assets/data/products";
import { supabase } from "@/src/lib/supabase";
import { useEffect } from "react";

export default function MenuScreen() {
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");

      console.log(data)
    };
    fetchProducts()
  }, []);

  return (
    <View>
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
