import { Link } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";

export default function FlagPost({ text }: { text: string }) {
  return (
    <View className="mr-1.5">
      <Link push href={{
        pathname: "/search/[query]",
        params: { 'query': text }
      }} asChild >
        <TouchableOpacity>
          <Text className="text-black text-md bg-gray-300 rounded-xl px-2 py-1">{text}</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}
