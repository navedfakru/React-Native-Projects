import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View,} from 'react-native';
import randomcolor from './randomcolor';

export default function App() {
  const [value, setValue] = useState(10)

  const box = Array(value).fill().map((_, i) => i + 1)

  const randomColor = randomcolor
  return (
    <View style={styles.container}>
      <Text>React Native Version: 0.74.5</Text>
      <Slider
        minimumValue={0}
        maximumValue={1800}
        value={value}
        onValueChange={value => setValue(value)}
        step={1}
        thumbTintColor='red'
      />
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10
      }}>Value:- {value}</Text>
      <View style={{width: 300, height: 600, backgroundColor: 'yellow', alignSelf: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
        <FlatList 
          data={box}
          renderItem={(item) => (
            <View style={{
              width: 10,
              height: 10,
              backgroundColor: `${randomColor()}`
            }}></View>
          )}
          numColumns={30}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 20,
    paddingTop: 50
  },
});
