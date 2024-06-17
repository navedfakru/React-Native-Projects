import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name='User' options={{headerShown: false}} component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation