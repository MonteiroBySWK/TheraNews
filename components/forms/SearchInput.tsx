import { FontAwesome } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { useState } from "react";
import { View, TextInput, TouchableOpacity, Alert } from "react-native";

export default function SearchInput() {

  const [query, setQuery] = useState("")

  function sendQuery() {
    if (!query) {
      return Alert.alert("blank")
    }

    if (pathname.startsWith("/search")) {
      router.setParams({ query })
    } else {
      router.push(`/search/${query}`)
    }

  }

  const pathname = usePathname()

  return (
    <View className="flex-row  pl-4 pr-1 py-2 bg-gray-200 rounded-md">
      <TextInput
        onChangeText={(text) => { setQuery(text) }}
        onSubmitEditing={sendQuery}
        value={query}
        placeholder="Search..."
        keyboardType="web-search"
        className="flex-1 text-base text-black bg-gray-200 rounded-md"
      />

      <TouchableOpacity className="px-2" onPress={() => {
        sendQuery()
      }}>
        <FontAwesome name="search" size={26} />
      </TouchableOpacity>
    </View >


  )
}
