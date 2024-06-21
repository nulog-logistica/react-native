import { Stack } from "expo-router";

export default function MenuStack() {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ title: "Orders", headerShown: false }} />
    </Stack>
  );
}
