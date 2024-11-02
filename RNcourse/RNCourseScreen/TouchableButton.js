import { Modal, Pressable, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";
import { useRandomColor } from "./hooks";
import MarkdownDisplay from "../components/MarkdownDisplay";

const TouchableButton = () => {
  const [visibleModal, setVisibleModal] = useState(false)
  const getColor = useRandomColor;
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={styles.button}>x.com</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: `${getColor()}` }]}>
          facebook
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: `${getColor()}` }]}>
          youtube
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: `${getColor()}` }]}>
          google
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: `${getColor()}` }]}>
          chatgpt
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: `${getColor()}` }]}>
          instagram
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: `${getColor()}` }]}>
          tik tok
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: `${getColor()}` }]}>
          snapchat
        </Text>
      </TouchableHighlight>
      <View style={
        {
          width: '100%',
          paddingRight: 10,
          paddingLeft: 10,
        }}>
        <Pressable
          style={[styles.showcodebtn, {margin: 0}]}
          onPress={() => setVisibleModal(true)}
        >
          <Text style={styles.showcodeText}>Show Code</Text>
        </Pressable>
      </View>
      <Modal visible={visibleModal} transparent={true}>
        <View style={styles.modalView}>
          <Pressable
            style={[
              styles.showcodebtn,
              {
                width: "100%",
                backgroundColor: "rgba(255, 0, 0, 0.7)",
                borderRadius: 0,
                margin: 0,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            ]}
            onPress={() => setVisibleModal(false)}
          >
            <Text style={[styles.showcodeText]}>Close Code</Text>
          </Pressable>
          <MarkdownDisplay>{code}</MarkdownDisplay>
        </View>
      </Modal>
    </View>
  );
};

export default TouchableButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btncontainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#bbb",
    textAlign: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 24,
    color: "#fff",
  },

  //modal style
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
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
  },
});


const code = `
# **TouchableHighlight**

\`\`\`javascript
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { useRandomColor } from "./hooks";

const TouchableButton = () => {
  const getColor = useRandomColor;
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={styles.button}>x.com</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: \`\${getColor()}\`\ }]}>
          facebook
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: \`\${getColor()}\`\ }]}>
          youtube
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: \`\${getColor()}\`\ }]}>
          google
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: \`\${getColor()}\`\ }]}>
          chatgpt
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: \`\${getColor()}\`\ }]}>
          instagram
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: \`\${getColor()}\`\ }]}>
          tik tok
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btncontainer}>
        <Text style={[styles.button, { backgroundColor: \`\${getColor()}\`\ }]}>
          snapchat
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default TouchableButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btncontainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#bbb",
    textAlign: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 24,
    color: "#fff",
  },
});

\`\`\`
`
