import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ModalComment() {
  const isPresented = router.canGoBack();

  return (
    <SafeAreaView>
      {isPresented &&
        <View className="items-center justify-center">
          <Text>Hello, Modal</Text>
        </View>
      }

    </SafeAreaView>
  )
}
