import FlagPost from "@/components/forms/FlagPost";
import InteractionButtons from "@/components/posts/InteractionButtons";
import { FontAwesome } from "@expo/vector-icons";
import { formatDate } from "date-fns";
import { Link, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ArticleDetailScreen() {
  // Parametros
  const { post } = useLocalSearchParams();

  if (post == undefined) {
    return (
      <SafeAreaView>
        <View className=" h-full items-center justify-center"><Text>Ocorreu um erro</Text></View>
      </SafeAreaView>
    )
  }

  // Pegar item
  const [item, setItem] = useState(null);

  const url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=aey75HrhjZfTGzNNu3FQ2ywSaeIWTR0K'

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        const selectedItem = json.results.find((i: any) => i.url === decodeURIComponent(post.toString()));
        setItem(selectedItem);
      })
      .catch(error => console.error(error));
  }, [post]);

  if (!item) {
    return (
      <SafeAreaView>
        <View className=" h-full items-center justify-center"><ActivityIndicator size="large" color="#0000ff" /></View>
      </SafeAreaView>
    )
  }

  /* {
   * "abstract": "American Ballet Theater brings Wayne McGregor’s “Woolf Works,” which evokes elements of three novels and the writer’s biography, to New York.", 
   * "byline": "By Joshua Barone", 
   * "created_date": "2024-06-24T12:02:53-04:00", 
   * "des_facet": ["Dancing", "Woolf Works (Ballet)"], 
   * "geo_facet": [], 
   * "item_type": "Article", 
   * "kicker": "", 
   * "material_type_facet": "", 
   * "multimedia": [
   *         {"caption": "American Ballet Theater performing Wayne McGregor’s ”Woolf Works” in California in spring.", 
   *          "copyright": "Ravi Deepres", 
   *          "format": "Super Jumbo", 
   *          "height": 1365, 
   *          "subtype": "photo", 
   *          "type": "image", 
   *          "url": "https://static01.nyt.com/images/2024/06/25/multimedia/24woolf-works-wkgz/24woolf-works-wkgz-superJumbo.jpg", 
   *          "width": 2048}, 
   *         {"caption": "American Ballet Theater performing Wayne McGregor’s ”Woolf Works” in California in spring.", 
   *          "copyright": "Ravi Deepres", 
   *          "format": "threeByTwoSmallAt2X", 
   *          "height": 400, 
   *          "subtype": "photo", 
   *          "type": "image", 
   *          "url": "https://static01.nyt.com/images/2024/06/25/multimedia/24woolf-works-wkgz/24woolf-works-wkgz-threeByTwoSmallAt2X.jpg", 
   *          "width": 600}, 
   *         {"caption": "American Ballet Theater performing Wayne McGregor’s ”Woolf Works” in California in spring.", 
   *          "copyright": "Ravi Deepres", 
   *          "format": "Large Thumbnail", 
   *          "height": 150, 
   *          "subtype": "photo", 
   *          "type": "image", 
   *          "url": "https://static01.nyt.com/images/2024/06/25/multimedia/24woolf-works-wkgz/24woolf-works-wkgz-thumbLarge.jpg", 
   *          "width": 150
   *          }], 
   * "org_facet": ["American Ballet Theater"], 
   * "per_facet": ["Ferri, Alessandra", "Jaffe, Susan", "McGregor, Wayne", "Teuscher, Devon", "Woolf, Virginia"], 
   * "published_date": "2024-06-24T12:02:53-04:00", 
   * "section": "arts", 
   * "short_url": "", 
   * "subsection": "dance", 
   * "title": "Virginia Woolf, but Make It a Polyphonic, Sensory Ballet", 
   * "updated_date": "2024-06-26T13:16:57-04:00", 
   * "uri": "nyt://article/e35a65fb-fef6-5cde-a456-d7522745ceca", 
   * "url": "https://www.nytimes.com/2024/06/24/arts/dance/woolf-works-abt.html"}*/

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="h-full">
          <Image
            source={{ uri: item["multimedia"][1]["url"] }}
            style={{
              width: "100%",
              height: 250,
              resizeMode: "cover"
            }}
          />

          <View className="w-full mt-4 px-4 space-y-2">
            <View className="flex-row ml-[-1]">
              {item["item_type"] != "" && <FlagPost text={item["item_type"]} />}
              {item["section"] != "" && <FlagPost text={item["section"]} />}
              {item["subsection"] != "" && <FlagPost text={item["subsection"]} />}
            </View>
            <Text className="text-black text-2xl font-extrabold">{item["title"]}</Text>

            <Text className="text-black text-md font-thin">{item["byline"]},
              <Text> {formatDate(item["created_date"], 'dd/MM/yyyy - HH:mm')} </Text>
            </Text>
            <Text className="text-black text-lg">{item["abstract"]} </Text>

            <InteractionButtons />
          </View>
          <Link replace href={item["url"]} asChild>
            <TouchableOpacity
              className="rounded-xl flex-shrink justify-center items-center bg-teal-400 py-3 mx-4"
              activeOpacity={0.8}
            >
              <Text className="font-medium text-lg">Acessar Noticia</Text>
            </TouchableOpacity>
          </Link>
        </View>

      </ScrollView>
    </SafeAreaView >

  )
}
