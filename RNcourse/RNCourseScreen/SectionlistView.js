import { Modal, Pressable, SectionList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MarkdownDisplay from "../components/MarkdownDisplay";

const foods = [
  {
    id: 0,
    title: "Fruits",
    data: ["Apple", "Banana", "Orange", "Mango"],
  },
  {
    id: 1,
    title: "Vegetables",
    data: ["Carrot", "Broccoli", "Spinach", "Potato"],
  },
  {
    id: 2,
    title: "Dairy",
    data: ["Milk", "Cheese", "Yogurt"],
  },
  {
    id: 3,
    title: "Grains",
    data: ["Rice", "Bread", "Oats", "Pasta"],
  },
  {
    id: 4,
    title: "Proteins",
    data: ["Chicken", "Beef", "Fish", "Tofu"],
  },
];

const RNSectionList = () => {
  const [visibleModal, setVisibleModal] = useState(false)
  return (
    <LinearGradient
      colors={["#b3e5de", "#e1be97", "#fff090"]}
      style={styles.background}
      start={[0, 0]}
      end={[1, 1]}
    >
      <View style={styles.container}>
      <SectionList
        sections={foods}
        renderItem={({ item }) => (
        <View style={styles.sectionView}>
          <Text style={styles.sectionText}>{item}</Text>
        </View>)}
        renderSectionHeader={({section: {title}}) => (
        <Text
          style={styles.sectionHeader}
        >{title}</Text>)}
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
    </LinearGradient>
  );
};

export default RNSectionList;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 25, 0, 0.5)",
  },
  sectionHeader: {
    color: 'whitesmoke',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  sectionView: {
    marginLeft: 10,
  },
  sectionText: {
    height: 40,
    textAlignVertical: 'center',
    paddingLeft: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginBottom: 5,
    fontSize: 16,
    color: 'white'
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
});


const code = `
# **SectionList View**
\`\`\`javascript
import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const foods = [
  {
    id: 0,
    title: "Fruits",
    data: ["Apple", "Banana", "Orange", "Mango"],
  },
  {
    id: 1,
    title: "Vegetables",
    data: ["Carrot", "Broccoli", "Spinach", "Potato"],
  },
  {
    id: 2,
    title: "Dairy",
    data: ["Milk", "Cheese", "Yogurt"],
  },
  {
    id: 3,
    title: "Grains",
    data: ["Rice", "Bread", "Oats", "Pasta"],
  },
  {
    id: 4,
    title: "Proteins",
    data: ["Chicken", "Beef", "Fish", "Tofu"],
  },
];

const RNSectionList = () => {
  return (
    <LinearGradient
      colors={["#b3e5de", "#e1be97", "#fff090"]}
      style={styles.background}
      start={[0, 0]}
      end={[1, 1]}
    >
      <View style={styles.container}>
      <SectionList
        sections={foods}
        renderItem={({ item }) => (
        <View style={styles.sectionView}>
          <Text style={styles.sectionText}>{item}</Text>
        </View>)}
        renderSectionHeader={({section: {title}}) => (
        <Text
          style={styles.sectionHeader}
        >{title}</Text>)}
      />
      </View>
    </LinearGradient>
  );
};

export default RNSectionList;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 25, 0, 0.5)",
  },
  sectionHeader: {
    color: 'whitesmoke',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  sectionView: {
    marginLeft: 10,
  },
  sectionText: {
    height: 40,
    textAlignVertical: 'center',
    paddingLeft: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginBottom: 5,
    fontSize: 16,
    color: 'white'
  }
});
\`\`\`
`