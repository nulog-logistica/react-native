import { FlatList, Platform, Text, View } from "react-native";

import Button from "../components/Button";
import CartListItem from "../components/CartListItem";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../providers/CartProvider";

const CartScreen = () => {
  const { items, total } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
        Total: $ {total.toFixed(2)}
      </Text>
      <Button text="Checkout" />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
