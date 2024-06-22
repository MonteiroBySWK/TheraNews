import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="justify-center items-center h-full gap-y-4">
          <Text className="font-bold text-3xl">Bem-Vindo!</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Link href="/sing-in" className="px-4 py-2 bg-transparent border border-gray-400 rounded-md" >Entrar</Link>
          </TouchableOpacity>
          <Link href="/home" className="text-xs font-light text-blue-400 underline">Offline</Link>
        </View>
        <StatusBar style="light" backgroundColor="#000" />
      </ScrollView>
    </SafeAreaView>
  );
}
