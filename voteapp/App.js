import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const image1 =
  "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305182658/HTML-tutorial.jpg";
const image2 =
  "https://media.geeksforgeeks.org/wp-content/uploads/20230427130955/CSS-Tutorial.webp";
const image3 =
  "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg";
const image4 =
  "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230310153232/ReactJS-Tutorial.jpg";

const image = [
  { img: image1, name: "Vote for HTML", id: 'image1'},
  { img: image2, name: "Vote for CSS", id: 'image2'},
  { img: image3, name: "Vote for JS", id: 'image3' },
  { img: image4, name: "Vote for ReactJS", id: 'image4' },
];

export default function App() {
  const [votes, setVotes] = useState({
    image1: 0,
    image2: 0,
    image3: 0,
    image4: 0,
  });

  const castVote = (imageKey) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [imageKey]: prevVotes[imageKey] + 1,
    }));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vote App</Text>
      <View style={{ width: "100%", flex: 1 }}>
        <FlatList
          data={image}
          renderItem={({ item, index }) => (
            <View
              style={{
                backgroundColor: "#D2E0FB",
                alignItems: "center",
                flex: 2,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Image
                source={{ uri: item.img }}
                style={{height: 100, width: '90%'}}
                resizeMode="contain"
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "green",
                  marginVertical: 10,
                  padding: 10,
                  borderRadius: 10,
                }}
                activeOpacity={.5}
                onPress={() => castVote(item.id)}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
              <Text style={{backgroundColor: 'white', padding: 10, fontWeight: '700', borderRadius: 5, borderWidth: 1}}>Vote: {votes[item.id]}</Text>
            </View>
          )}
          numColumns={2}
          contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
          columnWrapperStyle={{ gap: 10 }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    color: "green",
    fontSize: 30,
    marginVertical: 20,
    fontWeight: "bold",
  },
});
