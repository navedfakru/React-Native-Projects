import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MarkdownDisplay from "../components/MarkdownDisplay";
import { useRandomColor } from "./hooks";

const FlexUI = () => {
  const getRandomColor = useRandomColor

  const [visibleModal, setVisibleModal] = useState(false)

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 4,
          backgroundColor: `${getRandomColor()}`,
          flexDirection: "row",
        }}
      >
        <View
          style={{ flex: 1, backgroundColor: `${getRandomColor()}`, margin: 5 }}
        ></View>
        <View
          style={{ flex: 1, backgroundColor: `${getRandomColor()}`, margin: 5 }}
        ></View>
        <View
          style={{ flex: 1, backgroundColor: `${getRandomColor()}`, margin: 5 }}
        ></View>
      </View>
      <View style={{ flex: 3, backgroundColor: `${getRandomColor()}`, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: `${getRandomColor()}`, margin: 5, height: 50, width: 50}}
        ></View>
      </View>
      <View style={{ flex: 2, backgroundColor: `${getRandomColor()}`, flexDirection: "row-reverse" }}>
        <View style={{flex: 3, backgroundColor: `${getRandomColor()}`}}></View>
        <View style={{flex: 2, backgroundColor: `${getRandomColor()}`}}></View>
        <View style={{flex: 1, backgroundColor: `${getRandomColor()}`}}></View>
      </View>
      <View style={{ flex: 1, backgroundColor: `${getRandomColor()}`, justifyContent: 'center' }}>
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
    </View>
  );
};

export default FlexUI;

const styles = StyleSheet.create({
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
# **Flex UI**
\`\`\`javascript
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexUI = () => {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 4,
          backgroundColor: \`\${getRandomColor()}\`\,
          flexDirection: "row",
        }}
      >
        <View
          style={{ flex: 1, backgroundColor: \`\${getRandomColor()}\`\, margin: 5 }}
        ></View>
        <View
          style={{ flex: 1, backgroundColor: \`\${getRandomColor()}\`\, margin: 5 }}
        ></View>
        <View
          style={{ flex: 1, backgroundColor: \`\${getRandomColor()}\`\, margin: 5 }}
        ></View>
      </View>
      <View style={{ flex: 3, backgroundColor: \`\${getRandomColor()}\`\, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
        <View
          style={{ backgroundColor: \`\${getRandomColor()}\`\, margin: 5, height: 50, width: 50}}
        ></View>
      </View>
      <View style={{ flex: 2, backgroundColor: \`\${getRandomColor()}\`\, flexDirection: "row-reverse" }}>
        <View style={{flex: 3, backgroundColor: \`\${getRandomColor()}\`\}}></View>
        <View style={{flex: 2, backgroundColor: \`\${getRandomColor()}\`\}}></View>
        <View style={{flex: 1, backgroundColor: \`\${getRandomColor()}\`\}}></View>
      </View>
      <View style={{ flex: 1, backgroundColor: \`\${getRandomColor()}\`\ }}></View>
    </View>
  );
};

export default FlexUI;

const styles = StyleSheet.create({});

\`\`\`
`