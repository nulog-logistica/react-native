import { Image, StyleSheet } from "react-native";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import React, { useState } from "react";

import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { PizzaSize } from "@/src/types";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import products from "@/assets/data/products";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <Text> Product not found!</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `${product.name}`,
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
