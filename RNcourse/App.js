import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  const resetFormData = () => {
    setName("")
    setPassword("")
    setEmail("")
    setDisplay(false)
  }

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 25 }}>Simple Form in React Native</Text>
      <TextInput
        placeholder="Enter User Name"
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Enter User Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Enter User Password"
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <View style={{marginBottom: 20}}>
      <Button title="print detail" onPress={() => setDisplay(true)} />
      </View>
      <Button color={'red'} title="clear detail" onPress={resetFormData} />
      <View>{display ? 
        <View style={{borderWidth: 1, borderColor: 'blue', width: '100%'}}>
          <Text style={styles.displayText}>User Name: {name}</Text>
          <Text style={styles.displayText}>User Email: {email}</Text>
          <Text style={styles.displayText}>User Password: {password}</Text>
        </View> : null}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: "blue",
    marginBottom: 10,
  },
  displayText: {
    fontSize: 15,
    marginBottom: 10
  }
});
