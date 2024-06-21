import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="sing-in"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="sing-up"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}
