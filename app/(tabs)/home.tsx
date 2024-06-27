import SearchInput from "@/components/forms/SearchInput";
import PostHome from "@/components/posts/PostHome";
import { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [data, setData] = useState(null);

  const url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=aey75HrhjZfTGzNNu3FQ2ywSaeIWTR0K'

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json.results)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <SafeAreaView>
      <View className="items-center justify-center">
        <View className="flex-row items-center p-4">
          <SearchInput />
        </View>
        {data !== null ?
          <>
            <Text className="py-8 text-3xl font-extrabold">Top Stories Today</Text>
            <FlatList
              className="mb-4"
              data={data}
              renderItem={
                ({ item }) =>
                  <PostHome item={item} />
              }
              keyExtractor={item => item.url}
            /></> : <View className=" h-full items-center justify-center"><ActivityIndicator size="large" color="#0000ff" /></View>
        }
      </View>
    </SafeAreaView >
  )
}
