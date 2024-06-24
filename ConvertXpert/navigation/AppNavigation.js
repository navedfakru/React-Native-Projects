import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AreaScreen, CurrencyScreen, HomeSreen, LenghtScreen, PowerScreen, PressureScreen, SpeedScreen, TemperatureScreen, VolumeScreen, WeightScreen } from '../screens'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeSreen} />
        <Stack.Screen name='Currency' options={{ headerShown: false }} component={CurrencyScreen} />
        <Stack.Screen name='Area' options={{ headerShown: true }} component={AreaScreen} />
        <Stack.Screen name='Length' options={{ headerShown: true }} component={LenghtScreen} />
        <Stack.Screen name='Power' options={{ headerShown: true }} component={PowerScreen} />
        <Stack.Screen name='Pressure' options={{ headerShown: true }} component={PressureScreen} />
        <Stack.Screen name='Speed' options={{ headerShown: true }} component={SpeedScreen} />
        <Stack.Screen name='Temperature' options={{ headerShown: true }} component={TemperatureScreen} />
        <Stack.Screen name='Volume' options={{ headerShown: true }} component={VolumeScreen} />
        <Stack.Screen name='Weight' options={{ headerShown: true }} component={WeightScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation