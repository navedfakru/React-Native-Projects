import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const State = () => {
  const [name, setName] = useState("Naved")

  const updateName = () => {
    setName("Naved Ali Sir")
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 22}}>{name}</Text>
      <Button title='update' onPress={() => updateName()} />
    </View>
  )
}

export default State;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    paddingTop: 20
  }
})