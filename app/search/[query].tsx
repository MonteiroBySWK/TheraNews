import PostSearch from "@/components/posts/PostSearch";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  // Pesquisa
  const { query } = useLocalSearchParams()
  const [results, setResults] = useState([])

  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=aey75HrhjZfTGzNNu3FQ2ywSaeIWTR0K`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setResults(json.response.docs);
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <SafeAreaView>
      {results.length !== 0 ?
        <View className="py-4">
          <Text className="text-2xl font-bold p-4">Results for <Text className="text-green-500 font-bold">{query}</Text></Text>
          < FlatList
            data={results}
            keyExtractor={(item) => item['_id']}
            renderItem={({ item }) => <PostSearch item={item} />}
          />
        </View> : <View className=" h-full items-center justify-center"><ActivityIndicator size="large" color="#0000ff" /></View >
      }
    </SafeAreaView>
  )
}
