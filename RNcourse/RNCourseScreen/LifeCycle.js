import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function LifeCycle() {
  return (
    <LinearGradient
      colors={['lightpink', 'whitesmoke', 'pink']}
      style={styles.container}
      start={{x: 0.1 , y: 0.1}}
    >
      <View
        style={{flex: 1}}
      >
        <Text>Hellow</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
