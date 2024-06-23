import FormField from "@/components/forms/FormField";
import { Link, Redirect } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SingInScreen() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  function handleForm(formEmail: string, formPassword: string) {
  }

  function submit() {
    console.log("Enviando informação")
    handleForm(form.email, form.password)
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <Text className="text-center font-extrabold text-2xl my-8">Log In</Text>
        <View className="w-full px-4 min-h-full">
          <View className="">
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
          </View>
          <TouchableOpacity
            className="rounded-xl justify-center items-center bg-teal-400 py-3 mt-4"
            activeOpacity={0.8}
            onPress={submit}
          >
            <Text className="font-medium text-lg">Entrar</Text>
          </TouchableOpacity>

          <View className="justify-center items-center pt-4 flex-row gap-2">
            <Text className="text-lg font-light">Não possui conta?</Text>
            <Link href="/sing-up" className="text-teal-400 underline font-medium text-lg">Criar!</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
