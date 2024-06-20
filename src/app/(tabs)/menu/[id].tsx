import { Image, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View, Pressable } from "react-native";

import React, { useState } from "react";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import products from "@/assets/data/products";

import Button from "@/src/components/Button";

const sizes = ["S", "M", "L", "XL"];

const product = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === Number(id));

  const addToCart = () => {
    console.warn("Adding to cart");
  };

  if (!product) return <Text> Product not found!</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `${product.name}` }} />

      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            key={size}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color: selectedSize === size ? "black" : "gray",
                },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button text="Add to cart" onPress={addToCart} />
    </View>
  );
}; 

export default product;

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
    marginTop: "auto",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
