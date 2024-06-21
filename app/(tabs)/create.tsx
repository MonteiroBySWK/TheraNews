import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateScreen() {
  return (
    <SafeAreaView>
      <View className="items-center justify-center h-full">
        <Text>Criar Algo</Text>
      </View>
    </SafeAreaView>
  )
}
