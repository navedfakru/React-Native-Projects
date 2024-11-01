import { View, Text, ImageBackground, StyleSheet, ScrollView, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import MarkdownDisplay from "../components/MarkdownDisplay";

let data = [];

for (let index = 0; index < 100; index++) {
  let number = Math.random();
  data.push({ id: index, number: number });
}

const MappListViewApp = () => {

  const [visibleModal, setVisibleModal] = useState(false)

  return (
    <ImageBackground
      source={{ uri: "https://cdn.dummyjson.com/recipe-images/7.webp" }}
      style={{ flex: 1, paddingVertical: 30, paddingHorizontal: 20 }}
      resizeMode="cover"
    >
        <Text
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: 10,
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            borderRadius: 10,
            borderWidth: 2,
          }}
        >
          List Without FlatList
        </Text>
        <BlurView intensity={70} tint="dark" style={styles.blurContainer}>
        <ScrollView
          style={{
            width: "100%",
            marginBottom: 50,
          }}
        >
          {data.map((item) => (
            <View
              key={item.id}
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{
                  width: 50,
                  height: 50,
                  fontSize: 25,
                  backgroundColor: "rgba(255, 0, 0, 0.4)",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  textAlign: "center",
                  textAlignVertical: "center",
                  color: "white",
                  marginTop: 10,
                  borderWidth: 1,
                  borderBottomWidth: 0,
                  fontWeight: "bold",
                  borderColor: 'white'
                }}
              >
                {item.id}
              </Text>
              <Text
                style={{
                  width: "100%",
                  backgroundColor: "rgba(0,0,0, 0.5)",
                  height: 60,
                  borderRadius: 10,
                  borderTopLeftRadius: 0,
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontSize: 20,
                  color: "white",
                  fontWeight: "700",
                  borderWidth: 1,
                }}
              >
                {item.number}
              </Text>
            </View>
          ))}
        </ScrollView>
      </BlurView>
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
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

export default MappListViewApp;
const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  showcodebtn: {
    height: 60,
    backgroundColor: "rgba(0, 0, 255, 0.5)",
    // margin: 20,
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
})


const code = `
# **List Without FlatList**
\`\`\`python
import { View, Text, ImageBackground, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";

let data = [];

for (let index = 0; index < 100; index++) {
  let number = Math.random();
  data.push({ id: index, number: number });
}

const MappListViewApp = () => {
  return (
    <ImageBackground
      source={{ uri: "https://cdn.dummyjson.com/recipe-images/7.webp" }}
      style={{ flex: 1, paddingVertical: 30, paddingHorizontal: 20 }}
      resizeMode="cover"
    >
        <Text
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: 10,
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            borderRadius: 10,
            borderWidth: 2,
          }}
        >
          List Without FlatList
        </Text>
        <BlurView intensity={70} tint="dark" style={styles.blurContainer}>
        <ScrollView
          style={{
            width: "100%",
            marginBottom: 50,
          }}
        >
          {data.map((item) => (
            <View
              key={item.id}
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{
                  width: 50,
                  height: 50,
                  fontSize: 25,
                  backgroundColor: "rgba(255, 0, 0, 0.4)",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  textAlign: "center",
                  textAlignVertical: "center",
                  color: "white",
                  marginTop: 10,
                  borderWidth: 1,
                  borderBottomWidth: 0,
                  fontWeight: "bold",
                  borderColor: 'white'
                }}
              >
                {item.id}
              </Text>
              <Text
                style={{
                  width: "100%",
                  backgroundColor: "rgba(0,0,0, 0.5)",
                  height: 60,
                  borderRadius: 10,
                  borderTopLeftRadius: 0,
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontSize: 20,
                  color: "white",
                  fontWeight: "700",
                  borderWidth: 1,
                }}
              >
                {item.number}
              </Text>
            </View>
          ))}
        </ScrollView>
      </BlurView>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

export default MappListViewApp;
const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  }
})

\`\`\`
`