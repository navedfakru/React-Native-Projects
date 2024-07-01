import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons'

const LenghtInputBox = ({ value, valueText, style, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.inputBox} >
        <TouchableOpacity style={styles.header}>
          <Text>{valueText}</Text>
          <EvilIcons name="chevron-right" size={28} color={'gray'} />
        </TouchableOpacity>
        {/* <Text style={[styles.value, style]}>{value}</Text> */}
        <TextInput
          style={[styles.value, style]}
          value={value.toString()}
          scrollEnabled
          editable={false}
        />
      </TouchableOpacity>
    </View>
  )
}

export default LenghtInputBox

const styles = StyleSheet.create({
  inputBox: {
    height: 100,
    backgroundColor: "white",
    margin: 8,
    borderRadius: 10,
    elevation: 5
  },
  header: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingLeft: 8,
  },
  value: {
    padding: 8,
    fontSize: 34,
    fontWeight: '600',
    color: 'black'
  }
})