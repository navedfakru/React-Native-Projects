import {
  FlatList,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useTransition } from "react";
import { StatusBar } from "expo-status-bar";
import MarkdownDisplay from "../components/MarkdownDisplay";

const DATA = [
  {
    id: "1",
    title: "Data Structures",
  },
  {
    id: "2",
    title: "STL",
  },
  {
    id: "3",
    title: "C++",
  },
  {
    id: "4",
    title: "Java",
  },
  {
    id: "5",
    title: "Python",
  },
  {
    id: "6",
    title: "CP",
  },
  {
    id: "7",
    title: "ReactJs",
  },
  {
    id: "8",
    title: "NodeJs",
  },
  {
    id: "9",
    title: "MongoDb",
  },
  {
    id: "10",
    title: "ExpressJs",
  },
  {
    id: "11",
    title: "PHP",
  },
  {
    id: "12",
    title: "MySql",
  },
];

let random = [];

for (let index = 0; index < 1000; index++) {
  random.push(Math.random());
}
const FlatlistApp = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <ImageBackground
      source={{ uri: "https://cdn.dummyjson.com/recipe-images/7.webp" }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 20 }}
          renderItem={({ item }) => (
            <View style={styles.itemView}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          )}
        />
        <Pressable
          style={styles.showcodebtn}
          onPress={() => setVisibleModal(true)}
        >
          <Text style={styles.showcodeText}>Show Code</Text>
        </Pressable>
          <Modal 
            visible={visibleModal} 
            transparent={true}
          >
            <View style={styles.modalView}>
              <Pressable
                style={
                  [
                    styles.showcodebtn,
                    {
                      width: '100%',
                      backgroundColor: 'rgba(255, 0, 0, 0.7)',
                      borderRadius: 0,
                      margin: 0,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20
                    }
                  ]
                }
                onPress={() => setVisibleModal(false)}
              >
                <Text style={[styles.showcodeText]}>Close Code</Text>
              </Pressable>
              <MarkdownDisplay>{code}</MarkdownDisplay>
            </View>
          </Modal>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

export default FlatlistApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    width: "100%",
    backgroundColor: "rgba(250, 250, 250, 0.4)",
    flex: 1,
  },
  itemView: {
    width: "100%",
    height: 60,
    backgroundColor: "rgba(28, 25, 23, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  showcodebtn: {
    height: 60,
    backgroundColor: "rgba(0, 0, 255, 0.5)",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  showcodeText: {
    fontFamily: "InterBlack",
    fontSize: 16,
    color: "whitesmoke",
  },
  modalView: {
    height: '100%',
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    margin: 10,
    alignItems: 'center'
  },
});

const code = `
# **FlatList**
\`\`\`
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const DATA = [
  {
    id: "1",
    title: "Data Structures",
  },
  {
    id: "2",
    title: "STL",
  },
  {
    id: "3",
    title: "C++",
  },
  {
    id: "4",
    title: "Java",
  },
  {
    id: "5",
    title: "Python",
  },
  {
    id: "6",
    title: "CP",
  },
  {
    id: "7",
    title: "ReactJs",
  },
  {
    id: "8",
    title: "NodeJs",
  },
  {
    id: "9",
    title: "MongoDb",
  },
  {
    id: "10",
    title: "ExpressJs",
  },
  {
    id: "11",
    title: "PHP",
  },
  {
    id: "12",
    title: "MySql",
  },
];

let random = [];

for (let index = 0; index < 1000; index++) {
  random.push(Math.random())
}
const FlatlistApp = () => {
  return (
    <ImageBackground
      source={{ uri: "https://cdn.dummyjson.com/recipe-images/7.webp" }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 20}}
          renderItem={({ item }) => (
            <View style={styles.itemView}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

export default FlatlistApp;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: { 
    width: "100%",
    backgroundColor: 'rgba(250, 250, 250, 0.4)'
  },
  itemView: {
    width: "100%",
    height: 60,
    backgroundColor: "rgba(28, 25, 23, 0.5)",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 10
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
});

\`\`\`
`;
