import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import styles from "./App.Style";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./Screen/WelcomeScreen";

SplashScreen.preventAutoHideAsync();

function SignUpScreen({navigation}) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Create an {"\n"}account</Text>

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <FontAwesome
          name="user"
          size={24}
          color="#626262"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Fontisto
          name="email"
          size={24}
          color="#626262"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Fontisto name="locked" size={24} color="#626262" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={secureText}
        />
        {secureText ? (
          <MaterialCommunityIcons
            name="eye-off"
            size={24}
            color="#626262"
            style={styles.secureIcon}
            onPress={() => setSecureText(!secureText)}
          />
        ) : (
          <MaterialCommunityIcons
            name="eye"
            size={24}
            color="#626262"
            style={styles.secureIcon}
            onPress={() => setSecureText(!secureText)}
          />
        )}
      </View>
      <View style={styles.inputContainer}>
        <Fontisto name="locked" size={24} color="#626262" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={secureText}
        />
        {secureText ? (
          <MaterialCommunityIcons
            name="eye-off"
            size={24}
            color="#626262"
            style={styles.secureIcon}
            onPress={() => setSecureText(!secureText)}
          />
        ) : (
          <MaterialCommunityIcons
            name="eye"
            size={24}
            color="#626262"
            style={styles.secureIcon}
            onPress={() => setSecureText(!secureText)}
          />
        )}
      </View>
      <View style={styles.policyView}>
        <Text style={styles.policyText}>
          By clicking the{" "}
          <Text style={[styles.policyText, { color: "#FF4B26", elevation: 10, shadowColor: "#FF4B26", shadowOpacity: 0.8, shadowOffset: {height: 10, width: 10}  }]}>
            Register
          </Text>{" "}
          button, you agree to{`\n`}the public offer
        </Text>
      </View>
      <View style={styles.nextButtonView}>
        <Text style={styles.registerText}>Register</Text>
        <TouchableOpacity
          style={styles.arrowBtn}
          onPress={() => navigation.navigate("Welcome", {
            username, email, password, confirmPassword
          })}
        >
          <Feather name="arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 12, color: "#676767", fontFamily: 'Gilroy-SemiBold'}}>sign up with</Text>
      <View style={styles.signupwithView}>
        <TouchableOpacity
          style={styles.signupwithBtn}
        >
          <Image
            source={require('./assets/google.png')}
            resizeMode="contain"
            style={{height: 25, width: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupwithBtn}
        >
          <FontAwesome5 name="apple" size={25} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupwithBtn}
        >
          <FontAwesome5 name="facebook-f" size={24} color="#3D4DA6" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={SignUpScreen} options={{headerShown: false}} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default function App() {
  const [loaded, error] = useFonts({
    "Gilroy-Black": require("./assets/fonts/Gilroy-Black.ttf"),
    "Gilroy-Bold": require("./assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-ExtraBold": require("./assets/fonts/Gilroy-ExtraBold.ttf"),
    "Gilroy-Medium": require("./assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Regular": require("./assets/fonts/Gilroy-Regular.ttf"),
    "Gilroy-SemiBold": require("./assets/fonts/Gilroy-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <MyStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}