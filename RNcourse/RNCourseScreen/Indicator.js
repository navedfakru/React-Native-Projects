import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRandomColor } from "./hooks";
import { ModalDisplay } from "../components";

const Indicator = () => {
  const [show, setShow] = useState(false);
  const [colors, setColors] = useState([]);

  const displayIndicator = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
      const newColors = Array(14)
        .fill()
        .map(() => useRandomColor());
      setColors(newColors);
    }, 3000);
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.btn}>
        <Button title="Acitivty indicator" onPress={displayIndicator} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
        renderItem={({ item, index }) => (
          <View
            style={[styles.box, { backgroundColor: colors[index] || "white" }]}
          >
            <ActivityIndicator size={100} color={"black"} animating={show} />
          </View>
        )}
      />
      <ModalDisplay code={code} />
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  box: {
    flex: 1,
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
  },
  btn: {
    paddingVertical: 20,
  },
});

const code = `
# **ActivityIndicator** 
\`\`\`javascript
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRandomColor } from "./hooks";

const Indicator = () => {
  const [show, setShow] = useState(false);
  const [colors, setColors] = useState([]);

  const displayIndicator = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
      const newColors = Array(14)
        .fill()
        .map(() => useRandomColor());
      setColors(newColors);
    }, 5000);
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.btn}>
        <Button title="Acitivty indicator" onPress={displayIndicator} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
        renderItem={({ item, index }) => (
          <View
            style={[styles.box, { backgroundColor: colors[index] || "white" }]}
          >
            <ActivityIndicator size={100} color={"black"} animating={show} />
          </View>
        )}
      />
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  box: {
    flex: 1,
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
  },
  btn: {
    paddingVertical: 20,
  },
});

\`\`\`
`
