import Post from "@/components/posts/Post";
import { useState, useEffect } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=aey75HrhjZfTGzNNu3FQ2ywSaeIWTR0K')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (data !== null) console.log(data["results"])

  return (
    <SafeAreaView>
      <View className="items-center justify-center">
        <View>
          <Text className="text-bold text-3xl">Home</Text>
        </View>
        {data !== null ?
          <FlatList
            data={data["results"]}
            renderItem={({ item }) => <Post title={item.title} />}
            keyExtractor={item => item.id}
          /> : <Text>Loading</Text>}
      </View>
    </SafeAreaView>
  )
}
