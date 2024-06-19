import { Image, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "../../../components/Themed";

import React from "react";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import products from "@/assets/data/products";

const product = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <Text> Product not found!</Text>;

  return (
    <View>
      <Stack.Screen options={{ title: `${product.name}` }} />

      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={{ width: "100%", aspectRatio: 1 }}
      />

      <Text style={{ fontSize: 20, marginTop: 50 }}>
        Product Details Page {id}
      </Text>
    </View>
  );
};

export default product;

const styles = StyleSheet.create({});
