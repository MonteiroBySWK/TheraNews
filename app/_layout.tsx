import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="search/[query]"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="articles/[post]"
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#000000" />
    </>
  );
}
