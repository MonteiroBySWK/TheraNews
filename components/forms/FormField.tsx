import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

export default function FormField({ label, value, onChangeText, keyboardType }: any) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className="mb-4">
      <Text className="text-lg mb-0.5">{label}</Text>
      <View className="flex-row pl-4 items-center rounded-xl border focus:border-blue-700">
        <TextInput
          className="flex-1 text-base py-3 text-black"
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={label === "Password" && !showPassword}
        />

        {(label === "Password" || label === "Confirm Password") && (
          <TouchableOpacity className="p-4" onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome name={!showPassword ? "eye" : "eye-slash"} size={18} />
          </TouchableOpacity>
        )}
      </View>
    </View>)
}
