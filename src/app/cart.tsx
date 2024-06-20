import { FlatList, Platform, Text, View } from "react-native";

import CartListItem from "../components/CartListItem";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../providers/CartProvider";

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{padding: 10, gap: 10}}
      />

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
