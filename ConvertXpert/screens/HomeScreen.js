import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <StatusBar  style='auto'  />
      <View style={{flex: 1}}></View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})