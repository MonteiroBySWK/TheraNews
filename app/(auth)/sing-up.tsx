import FormField from "@/components/forms/FormField";
import { Link } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SingUpScreen() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })


  return (
    <SafeAreaView>
      <ScrollView>
        <Text className="text-center font-extrabold text-2xl my-8">Register</Text>
        <View className="w-full px-4 min-h-full">
          <View className="">
            <FormField
              label="Username"
              value={form.username}
              onChangeText={(e: any) => setForm({ ...form, username: e })}
            />
            <FormField
              label="Email"
              value={form.email}
              onChangeText={(e: any) => setForm({ ...form, email: e })}
              keyboardType="email-address"
            />
            <FormField
              label="Password"
              value={form.password}
              onChangeText={(e: any) => setForm({ ...form, password: e })}
            />
            <FormField
              label="Confirm Password"
              value={form.password}
              onChangeText={(e: any) => setForm({ ...form, password2: e })}
            />

          </View>
          <TouchableOpacity
            className="rounded-xl justify-center items-center bg-teal-400 py-3 mt-4"
            activeOpacity={0.8}
          >
            <Text className="font-medium text-lg">Entrar</Text>
          </TouchableOpacity>

          <View className="justify-center items-center pt-4 flex-row gap-2">
            <Text className="text-lg font-light">Já possui conta?</Text>
            <Link href="/sing-in" className="text-teal-400 underline font-medium text-lg">Entrar!</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
