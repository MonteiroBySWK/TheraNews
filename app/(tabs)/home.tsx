import Post from "@/components/posts/Post";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="items-center justify-center">
          <View>
            <Text className="text-bold text-3xl">Home</Text>
          </View>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
