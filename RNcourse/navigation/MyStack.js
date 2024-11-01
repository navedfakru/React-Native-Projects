import { createStackNavigator } from "@react-navigation/stack";
import { ClassComponent, FlatlistApp, HomeScreen, Input, LifeCycle, MappListViewApp, RNSectionList } from "../RNCourseScreen";
import { LinearGradient } from "expo-linear-gradient";
import {MaterialIcons} from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator()

const MyStack = () => {

  const navigation = useNavigation()


  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="lifecyle" component={LifeCycle} options={{
        headerBackground: () => (
          <LinearGradient
            colors={['#b3e5fc', '#e1bee7', '#ffffff']}
            style={{ flex: 1 }}
            start={[0, 0]}
            end={[1, 1]}
          />
        ),
        headerTitle: "Class Component",
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
          </TouchableOpacity>
        ),
      }} />
      <Stack.Screen name="classcomponent" component={ClassComponent} options={{
        headerBackground: () => (
          <LinearGradient
            colors={['#b3e5fc', '#e1bee7', '#ffffff']}
            style={{ flex: 1 }}
            start={[0, 0]}
            end={[1, 1]}
          />
        ),
        headerTitle: "Class Component",
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
          </TouchableOpacity>
        ),
      }} />
      <Stack.Screen name="sectionlist" component={RNSectionList} options={{
        headerBackground: () => (
          <LinearGradient
            colors={['#b3e5fc', '#e1bee7', '#ffffff']}
            style={{ flex: 1 }}
            start={[0, 0]}
            end={[1, 1]}
          />
        ),
        headerTitle: "SectionList",
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
          </TouchableOpacity>
        ),
      }} />
      <Stack.Screen name="textInput" component={Input} options={{
        headerBackground: ({navigation}) => (
          <LinearGradient
            colors={['#b3e5fc', '#e1bee7', '#ffffff']}
            style={{ flex: 1 }}
            start={[0, 0]}
            end={[1, 1]}
          />
        ),
        headerTitle: "TextInput",
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
          </TouchableOpacity>
        ),
      }} />
      <Stack.Screen name="flatlist" component={FlatlistApp} options={{
        headerBackground: ({navigation}) => (
          <LinearGradient
            colors={['#b3e5fc', '#e1bee7', '#ffffff']}
            style={{ flex: 1 }}
            start={[0, 0]}
            end={[1, 1]}
          />
        ),
        headerTitle: "FlatList",
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
          </TouchableOpacity>
        ),
      }} />
      <Stack.Screen name="maplistview" component={MappListViewApp} options={{
        headerBackground: ({navigation}) => (
          <LinearGradient
            colors={['#b3e5fc', '#e1bee7', '#ffffff']}
            style={{ flex: 1 }}
            start={[0, 0]}
            end={[1, 1]}
          />
        ),
        headerTitle: "MapListView",
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
          </TouchableOpacity>
        ),
      }} />
    </Stack.Navigator>
  )
}

export default MyStack;

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 15,
  },
})