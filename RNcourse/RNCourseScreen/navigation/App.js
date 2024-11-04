import { Button, TouchableOpacity, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import {MaterialIcons} from "@expo/vector-icons"
// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const App = () => {
  const navigation = useNavigation();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: {backgroundColor: 'blue'},
            headerTintColor: 'orange',
             headerLeft: () => (
              <TouchableOpacity style={{marginLeft: 15}} onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const Home = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0, 0, 0, 0.5)', paddingHorizontal: 20}}>
      <Text style={{ fontSize: 30, fontFamily: 'InterBlack', color: 'whitesmoke' }}>Welcome</Text>
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          width: '100%',
          padding: 20,
          borderRadius: 10,
          borderWidth: 1,
          margin: 10
        }}
      >
        <Text
          style={{
            fontFamily: 'InterBold',
            fontSize: 16,
            color: 'black',
            marginBottom: 10,
            borderEndWidth: 1
          }}
        >Name: {props.route.params.name}</Text>
        <Text
          style={{
            fontFamily: 'InterBold',
            fontSize: 16,
            color: 'black',
            marginBottom: 10
          }}
        >Name: {props.route.params.email}</Text>
      </View>
    </View>
  );
};

const LoginScreen = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      <Text style={{ fontSize: 30, fontFamily: 'InterBlack', color: 'whitesmoke' }}>Login Screen</Text>
      <View
        style={{width: '100%', padding: 20, backgroundColor: 'white', borderRadius: 5}}
      >
        <TextInput
          placeholder="username"
          value={name}
          onChangeText={(text) => setName(text)}
          style={{
            width: '100%',
            height: 40,
            padding: 10,
            color: 'black',
            borderRadius: 5,
            borderWidth: 1,
            marginBottom: 20,
            fontFamily: 'InterBold'
          }}
        />
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            width: '100%',
            height: 40,
            padding: 10,
            color: 'black',
            borderRadius: 5,
            borderWidth: 1,
            fontFamily: 'InterBold'
          }}
        />
      </View>
      <Button
        title="go to home"
        onPress={() => props.navigation.navigate("Home", {name, email})}
      />
    </View>
  );
};
