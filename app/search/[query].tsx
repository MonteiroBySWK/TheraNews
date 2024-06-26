import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
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
        <View className="p-4">
          <Text className="text-2xl font-bold">Results for <Text className="text-green-500">"{query}"</Text></Text>
          < FlatList
            data={results}
            keyExtractor={(item) => item['_id']}
            renderItem={({ item }) => (
              <View className="border-b-black border-b pb-4">
                <Text className="font-semibold text-lg">{item['headline']['main']}</Text>
                <Text>{item['snippet']}</Text>
              </View>)}
          />
        </View> : <View className=" h-full items-center justify-center"><ActivityIndicator size="large" color="#0000ff" /></View >
      }
    </SafeAreaView>
  )
}
