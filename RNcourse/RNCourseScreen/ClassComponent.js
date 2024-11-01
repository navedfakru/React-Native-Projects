import { Text, StyleSheet, View, TextInput } from "react-native";
import React, { Component } from "react";
import MarkdownDisplay from "../components/MarkdownDisplay";

const code = 
` # **Class Component**
\`\`\`javascript
import { Text, StyleSheet, View, TextInput } from "react-native";
import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "React Native",
    };
  }
  upadateState(text) {
    this.setState({name: text})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.name}</Text>
        <TextInput
          placeholder="Enter name"
          onChangeText={(text) => this.upadateState(text)}
          style={styles.TextInput}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: "InterBlack",
    color: "red",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    height: 40,
    fontSize: 20
  }
});
\`\`\`
`

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "React Native",
    };
  }
  upadateState(text) {
    this.setState({name: text})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.name}</Text>
        <TextInput
          placeholder="Enter name"
          onChangeText={(text) => this.upadateState(text)}
          style={styles.TextInput}
        />
        <MarkdownDisplay>{code}</MarkdownDisplay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: "InterBlack",
    color: "red",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    height: 40,
    fontSize: 20
  }
});
