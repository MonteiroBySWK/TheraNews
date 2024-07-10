import { Link } from "expo-router"
import { TouchableOpacity, View, Text } from "react-native"

export default function PostSearch({ item }: any) {

  console.log(item)

  return (
    <Link push href={{
      pathname: '/articles/[post]',
      params: { 'post': item._url }
    }} asChild>
      <TouchableOpacity>
        <View className="border-b-black border-b pb-4 px-4">
          <Text className="font-semibold text-lg">{item['headline']['main']}</Text>
          <Text>{item['snippet']}</Text>
        </View>
      </TouchableOpacity>
    </Link >

  )
}
