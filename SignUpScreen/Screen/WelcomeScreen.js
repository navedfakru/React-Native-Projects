import React from "react";
import { View, Text } from "react-native";
import styles from "./WelcomeScreen.Style";
import { useRoute } from "@react-navigation/native";

const WelcomeScreen = ({ navigation }) => {
  const route = useRoute();
  const username = route.params.username.toUpperCase()
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome</Text>
      <Text
        style={[
          styles.headerText,
          {
            color: "#FF4B26",
            elevation: 50,
            shadowColor: "#FF4B26",
            shadowOffset: { width: 0, height: 0.9 },
            shadowOpacity: 1,
            shadowRadius: 100,
            elevation: 10,
          },
        ]}
      >
        {username}
      </Text>
    </View>
  );
};

export default WelcomeScreen;
