import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const CustomModal = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.maincontainer}>
      {show ? (
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text>Hello World!</Text>
            <Button title="close" onPress={() => setShow(false)} />
          </View>
        </View>
      ) : null}
      <Button title="open" onPress={() => setShow(true)} />
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(10, 10, 75, 0.5)",
  },
  body: {
    height: 300,
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "flex-end",
  },
});
