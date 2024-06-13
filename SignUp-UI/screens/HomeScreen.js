import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = (props) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='login' onPress={()=> props.navigation.navigate('Login')} />
    </View>
  )
}

export default HomeScreen