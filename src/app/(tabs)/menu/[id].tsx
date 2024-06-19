import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "../../../components/Themed";

import { Fontisto } from "@expo/vector-icons";
import React from "react";

const product = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: `Details: ${id}` }} />
      <Text style={{ fontSize: 20, marginTop: 50}}>Product Details Page {id}</Text>
    </View>
  );
};

export default product;
