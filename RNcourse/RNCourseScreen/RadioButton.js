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
