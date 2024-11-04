import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRandomColor } from "../hooks";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MarkdownDisplay } from "../../components";

const Stack = createStackNavigator();
const NavigationApp = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="drawer"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomNavigator} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};

const Setting = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Text
        style={{
          fontFamily: "InterBlack",
          fontSize: 30,
          color: "whitesmoke",
        }}
      >
        Setting
      </Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 70 },
      }}
    >
      <Tab.Screen
        name="BHome"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <MaterialCommunityIcons
                    name="home"
                    size={24}
                    color="blue"
                    style={{
                      backgroundColor: "rgba(0, 0, 255, 0.2)",
                      padding: 10,
                      borderRadius: 10,
                    }}
                  />
                ) : (
                  <MaterialCommunityIcons name="home" size={24} color="black" />
                )}
              </View>
            );
          },
          title: "Home",
        }}
      />
      <Tab.Screen
        name="Albums"
        component={Albums}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <MaterialCommunityIcons
                    name="album"
                    size={24}
                    color="blue"
                    style={{
                      backgroundColor: "rgba(0, 0, 255, 0.2)",
                      padding: 10,
                      borderRadius: 10,
                    }}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="album"
                    size={24}
                    color="black"
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Code"
        component={Code}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <MaterialCommunityIcons
                    name="code-greater-than"
                    size={24}
                    color="blue"
                    style={{
                      backgroundColor: "rgba(0, 0, 255, 0.2)",
                      padding: 10,
                      borderRadius: 10,
                    }}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="code-greater-than"
                    size={24}
                    color="black"
                  />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Home = () => {
  const RandomColor = useRandomColor;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        marginHorizontal: 20,
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Array(10)}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: 200,
              width: "100%",
              backgroundColor: "wheat",
              marginBottom: 10,
              borderRadius: 10,
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                borderWidth: 2,
                backgroundColor: `${RandomColor()}`,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontFamily: 'InterBlack',
                  fontSize: 40,
                  color: 'white'
                }}
              >{index}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const Albums = () => {
  const RandomColor = useRandomColor;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <FlatList
        data={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' , 'J', 'K', 'L', 'M', 'N']}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              style={{
                height: 150,
                flex: 2,
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'whitesmoke'
              }}
            >
              <View style={{
                height: 90,
                width: 90,
                borderWidth: 2,
                borderRadius: 50,
                backgroundColor: `${RandomColor()}`,
                justifyContent: 'center', 
                alignItems: 'center'
              }}>
                <Text
                  style={{
                    fontFamily: 'InterBlack',
                    fontSize: 40,
                    color: 'white',
                  }}
                >{item}</Text>
              </View>
            </View>
          );
        }}
        numColumns={2}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
};

const Code = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        paddingHorizontal: 10
      }}
    >
      <MarkdownDisplay>{code}</MarkdownDisplay>
    </View>
  );
};

export default NavigationApp;


const code = `
# **Tab Drawer Stack Navigation**
\`\`\`javascript
import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRandomColor } from "../hooks";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();
const NavigationApp = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="drawer"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomNavigator} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};

const Setting = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Text
        style={{
          fontFamily: "InterBlack",
          fontSize: 30,
          color: "whitesmoke",
        }}
      >
        Setting
      </Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 70 },
      }}
    >
      <Tab.Screen
        name="BHome"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <MaterialCommunityIcons
                    name="home"
                    size={24}
                    color="blue"
                    style={{
                      backgroundColor: "rgba(0, 0, 255, 0.2)",
                      padding: 10,
                      borderRadius: 10,
                    }}
                  />
                ) : (
                  <MaterialCommunityIcons name="home" size={24} color="black" />
                )}
              </View>
            );
          },
          title: "Home",
        }}
      />
      <Tab.Screen
        name="Albums"
        component={Albums}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <MaterialCommunityIcons
                    name="album"
                    size={24}
                    color="blue"
                    style={{
                      backgroundColor: "rgba(0, 0, 255, 0.2)",
                      padding: 10,
                      borderRadius: 10,
                    }}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="album"
                    size={24}
                    color="black"
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Code"
        component={Code}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <MaterialCommunityIcons
                    name="code-greater-than"
                    size={24}
                    color="blue"
                    style={{
                      backgroundColor: "rgba(0, 0, 255, 0.2)",
                      padding: 10,
                      borderRadius: 10,
                    }}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="code-greater-than"
                    size={24}
                    color="black"
                  />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Home = () => {
  const RandomColor = useRandomColor;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        marginHorizontal: 20,
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Array(10)}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: 200,
              width: "100%",
              backgroundColor: "wheat",
              marginBottom: 10,
              borderRadius: 10,
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                borderWidth: 2,
                backgroundColor: \`\${RandomColor()}\`\,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontFamily: 'InterBlack',
                  fontSize: 40,
                  color: 'white'
                }}
              >{index}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const Albums = () => {
  const RandomColor = useRandomColor;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <FlatList
        data={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' , 'J', 'K', 'L', 'M', 'N']}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              style={{
                height: 150,
                flex: 2,
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'whitesmoke'
              }}
            >
              <View style={{
                height: 90,
                width: 90,
                borderWidth: 2,
                borderRadius: 50,
                backgroundColor: \`\${RandomColor()}\`\,
                justifyContent: 'center', 
                alignItems: 'center'
              }}>
                <Text
                  style={{
                    fontFamily: 'InterBlack',
                    fontSize: 40,
                    color: 'white',
                  }}
                >{item}</Text>
              </View>
            </View>
          );
        }}
        numColumns={2}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
};

const Code = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(255, 0, 0, 0.3)",
      }}
    >
      <Text
        style={{
          fontFamily: "InterBlack",
          fontSize: 30,
          color: "whitesmoke",
        }}
      >
        Home
      </Text>
    </View>
  );
};

export default NavigationApp;

\`\`\`
`