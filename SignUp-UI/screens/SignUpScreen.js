import { View, Text, Button } from 'react-native'
import React from 'react'

const SignUpScreen = (props) => {
  return (
    <View>
      <Text>SignUpScreen</Text>
      <Button title='Welcome' onPress={()=>props.navigation.navigate('Welcome')} />
    </View>
  )
}

export default SignUpScreen