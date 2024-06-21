import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          paddingBottom: 4,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ }) => <Ionicons name="home-outline" size={28} />
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Criar",
          headerShown: false,
          tabBarIcon: ({ }) => <Ionicons name="add-circle-outline" size={28} />
        }} />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorar",
          headerShown: false,
          tabBarIcon: ({ }) => <Ionicons name="list-outline" size={28} />
        }} />
    </Tabs>
  )
}
