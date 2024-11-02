import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MarkdownDisplay, modalStyles } from "../components";


const RadioButton = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);
  const [visibleModal, setVisibleModal] = useState(false)
  return ( 
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.radiocontainer}
        onPress={() => setSelectedRadio(1)}
      >
        <View style={styles.radio}>
          {
            selectedRadio == 1 ? <View style={styles.radiobutton}></View> : null
          }
        </View>
        <Text style={styles.radioText}>Radio 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.radiocontainer}
        onPress={() => setSelectedRadio(2)}
      >
        <View style={styles.radio}>
          {
            selectedRadio == 2 ? <View style={styles.radiobutton}></View> : null
          }
        </View>
        <Text style={styles.radioText}>Radio 1</Text>
      </TouchableOpacity>
      {/* Modal components */}
      <View style={
        {
          width: '100%',
          paddingRight: 10,
          paddingLeft: 10,

        }}>
        <Pressable
          style={[modalStyles.showcodebtn, {top: 200}]}
          onPress={() => setVisibleModal(true)}
        >
          <Text style={modalStyles.showcodeText}>Show Code</Text>
        </Pressable>
      </View>
      <Modal visible={visibleModal} transparent={true}>
        <View style={modalStyles.modalView}>
          <Pressable
            style={[
              modalStyles.showcodebtn,
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
            <Text style={[modalStyles.showcodeText]}>Close Code</Text>
          </Pressable>
          <MarkdownDisplay>{code}</MarkdownDisplay>
        </View>
      </Modal>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  radiocontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    gap: 10
  },
  radio: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  radiobutton: {
    height: 30,
    width: 30,
    backgroundColor: 'blue',
    borderRadius: 15
  },
  radioText: {
    fontSize: 24,
    color: 'orange'
  }
});


const code = `
# **Radio Button**
\`\`\`javascript
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const RadioButton = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.radiocontainer}
        onPress={() => setSelectedRadio(1)}
      >
        <View style={styles.radio}>
          {
            selectedRadio == 1 ? <View style={styles.radiobutton}></View> : null
          }
        </View>
        <Text style={styles.radioText}>Radio 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.radiocontainer}
        onPress={() => setSelectedRadio(2)}
      >
        <View style={styles.radio}>
          {
            selectedRadio == 2 ? <View style={styles.radiobutton}></View> : null
          }
        </View>
        <Text style={styles.radioText}>Radio 1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  radiocontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    gap: 10
  },
  radio: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  radiobutton: {
    height: 30,
    width: 30,
    backgroundColor: 'blue',
    borderRadius: 15
  },
  radioText: {
    fontSize: 24,
    color: 'orange'
  }
});

\`\`\`
`