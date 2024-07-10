import { formatDate } from "date-fns";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function PostHome({ item }: any) {

  return (
    <Link push href={{
      pathname: '/articles/[post]',
      params: { 'post': item.url }
    }} asChild>
      <TouchableOpacity>
        <View className="flex-row justify-between items-center border-b border-gray-400 pb-1 mx-4 mb-2">
          <View className="items-start justify-start flex-grow">
            <Text className="font-medium text-xl ">{item.title}</Text>
            <Text className="text-md py-1">{item.abstract}</Text>
            <Text className="font-light text-xs">{formatDate(item.created_date, 'dd/MM/yyyy - HH:mm')}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  )
}
