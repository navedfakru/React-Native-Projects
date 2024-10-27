import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Button,
} from "react-native";
import {
  MaterialCommunityIcons,
  Fontisto,
  Feather,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function App() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          backgroundColor: "white",
          height: "90%",
          width: "100%",
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "black",
              fontWeight: "500",
              fontVariant: ["tabular-nums"],
              paddingBottom: 15,
            }}
          >
            Login
          </Text>
          <Text style={{ color: "#6B5E5E" }}>
            By singing in you are agreening
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              paddingVertical: 5,
            }}
          >
            <Text style={{ color: "#6B5E5E" }}>our{`${" "}`}</Text>
            <Text style={{ color: "#036BB9" }}>Term and Privacy policy</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "30%",
              paddingVertical: 30,
            }}
          >
            <Text
              style={{
                color: "#036BB9",
                borderBottomColor: "#6B5E5E",
                borderBottomWidth: 1,
              }}
            >
              Login
            </Text>
            <Text>Register</Text>
          </View>
          <View style={styles.inputView}>
            <Fontisto name="email" size={24} color="black" />
            <TextInput style={styles.input} placeholder="EmailAddress" />
          </View>
          <View style={styles.inputView}>
            <Feather name="lock" size={24} color="black" />
            <TextInput style={styles.input} placeholder="Passoword" />
            <Feather
              name="eye"
              size={24}
              color="black"
              style={{ justifyContent: "flex-end", paddingLeft: 13 }}
            />
          </View>
          <View style={styles.passwordChecked}>
            <View style={{ flexDirection: "row" }}>
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#4630EB" : undefined}
              />
              <Text style={{ paddingLeft: 5 }}>Remeber Passoword</Text>
            </View>
            <Text style={{ color: "#036BB9" }}>Forget Passoword</Text>
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
          <Text style={{ color: "#6B5E5E" }}>or connect with</Text>
          <View style={styles.loginwithBtnView}>
            <TouchableOpacity style={[styles.loginwithBtn]}>
              <FontAwesome5 name="facebook-f" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginwithBtn]}>
              <FontAwesome5 name="instagram" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginwithBtn, {backgroundColor: '#CB2027'}]}>
              <FontAwesome5 name="pinterest-p" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginwithBtn, {backgroundColor: '#007AB9'}]}>
            <FontAwesome name="linkedin" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require("./assets/imglogin.png")}
          style={styles.loginimg}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity activeOpacity={0.6} style={styles.fingerbtn}>
        <MaterialCommunityIcons name="fingerprint" size={60} color="white" />
      </TouchableOpacity>
      <View
        style={{
          height: "10%",
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "500", fontSize: 17 }}>
          Login with Touch
        </Text>
      </View>
      <StatusBar style="auto" backgroundColor="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#469fd1",
    justifyContent: "center",
    alignItems: "center",
  },
  fingerbtn: {
    position: "absolute",
    bottom: "5%",
    zIndex: 1,
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#0386d0",
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    borderWidth: 1,
  },
  loginimg: {
    height: 150,
    width: "60%",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignSelf: "center",
  },
  inputView: {
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
    borderBottomWidth: 1,
    alignItems: "center",
    verticalAlign: "middle",
    display: "flex",
    padding: 5,
  },
  input: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  passwordChecked: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  loginBtn: {
    backgroundColor: "#036BB9",
    width: "75%",
    alignItems: "center",
    marginVertical: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  loginwithBtnView: {
    flexDirection: "row",
    width: "70%",
    marginVertical: 20,
    justifyContent: 'space-between'
  },
  loginwithBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#3B5998",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
