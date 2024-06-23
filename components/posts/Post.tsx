import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Post({ title }: any) {
  return (
    <TouchableOpacity>
      <View className="w-[90%] flex-row justify-between items-center border-b border-gray-400 pb-1">

        <View className="items-start justify-start">
          <Text className="font-light text-xs">Autor</Text>
          <Text className="font-medium text-xl">{title}</Text>
          <Text className="text-md">Preliminar</Text>
        </View>

        <Image
          source={require("../../assets/images/react-logo.png")}
          className="rounded-xl"
          resizeMode="contain"
          resizeMethod="resize"
        />
      </View>
    </TouchableOpacity>

  )
}
