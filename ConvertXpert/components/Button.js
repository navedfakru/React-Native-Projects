import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ title, onPress, style, styleText }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.btn, style]}
    >
      <Text style={[styles.text, styleText]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  btn: {
    width: 72,
    height: 72,
    backgroundColor: "#4B5EFC",
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    elevation: 5
  },
  text: {
    fontSize: 32,
    color: "#FFFFFF"
  }
})