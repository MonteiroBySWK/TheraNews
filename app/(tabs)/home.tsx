import SearchInput from "@/components/forms/SearchInput";
import PostHome from "@/components/posts/PostHome";
import { useState, useEffect } from "react";
import { ActivityIndicator, SectionList, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [data, setData] = useState(null);

  const url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=aey75HrhjZfTGzNNu3FQ2ywSaeIWTR0K'

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json.results)
        console
      })
      .catch(error => {
        console.error(error)
      })
  }, [url])

  return (
    <SafeAreaView>
      <View className="items-center justify-center">
        <View className="items-center px-4">
          <Text className="text-lg text-black font-bold py-4">Thera News</Text>
          <SearchInput />
        </View>
        {data !== null ?
          <>
            <SectionList sections={[{ title: "Top Stories", data: data }]}
              renderItem={({ item }) =>
                <PostHome item={item} />
              }
              renderSectionHeader={({ section }) => (
                <Text className="py-5 text-3xl pl-5 pr-4 font-extrabold">{section.title}</Text>
              )}
              keyExtractor={item => item.url}
            />
          </> : <View className=" h-full items-center justify-center"><ActivityIndicator size="large" color="#0000ff" /></View>
        }
      </View>
      <StatusBar backgroundColor="#000000" />
    </SafeAreaView >
  )
}
