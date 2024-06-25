import { formatDate } from "date-fns";
import { Text, TouchableOpacity, View } from "react-native";

export default function PostHome({ title, date, keywords }: any) {
  return (
    <TouchableOpacity
    >
      <View className="flex-row justify-between items-center border-b border-gray-400 pb-1 mx-4 mb-2">

        <View className="items-start justify-start flex-grow">
          <Text className="font-medium text-xl ">{title}</Text>
          <Text className="text-md py-1">{keywords}</Text>
          <Text className="font-light text-xs">{formatDate(date, 'dd/MM/yyyy - HH:mm')}</Text>
        </View>

      </View>
    </TouchableOpacity>

  )
}
