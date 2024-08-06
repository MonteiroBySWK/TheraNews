import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { View, TouchableOpacity, Text, Modal } from "react-native";

export default function InteractionButtons() {
  const [ups, setUps] = useState(0)
  const [downs, setDowns] = useState(0)

  function handleUps() {
    setUps(prev => prev + 1)
  }
  function handleDowns() {
    setDowns(prev => prev + 1)
  }

  return (
    <View className="flex-row gap-x-4 my-2">
      <TouchableOpacity
        onPress={handleUps}
        className=" rounded-full items-center justify-center py-3 flex-row gap-x-2"
      >
        <FontAwesome name="arrow-up" size={26} />
        <Text>{ups}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleDowns}
        className=" rounded-full items-center justify-center py-3 flex-row gap-x-2"
      >
        <FontAwesome name="arrow-down" size={26} />
        <Text>{downs}</Text>
      </TouchableOpacity>

      <Link push href="modal" asChild>
        <TouchableOpacity
          className="rounded-full items-center justify-center py-3 flex-row gap-x-2"
        >
          <FontAwesome name="comments" size={26} />
          <Text>comments</Text>
        </TouchableOpacity>
      </Link>
    </View>

  )

}
