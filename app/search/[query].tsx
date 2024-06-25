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
      {results !== null ?
        < FlatList
          data={results}
          keyExtractor={(item) => item['id']
          }
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Text>{item['headline']['main']}</Text>
              <Text>{item['snippet']}</Text>
            </View>)}
        /> : <View className=" h-full items-center justify-center"><ActivityIndicator size="large" color="#0000ff" /></View >
      }
    </SafeAreaView>
  )
}
