import React from 'react'
import FlatlistApp from './Flatlist'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const HomeScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#b3e5fc', '#e1bee7', '#ffffff']}
      style={styles.background}
      start={[0, 0]}
      end={[1, 1]}
    >
      <Text style={styles.text}>React Native Course !!</Text>
      <ScrollView style={styles.container}
        scrollIndicatorInsets={false}
      >
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('textInput')}
        >
          <Text style={styles.btnText}>
            TextInput
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('flatlist')}
        >
          <Text style={styles.btnText}>
            FlatList
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('maplistview')}
        >
          <Text style={styles.btnText}>
            List Without FlatList
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('sectionlist')}
        >
          <Text style={styles.btnText}>
            SectionList
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('classcomponent')}
        >
          <Text style={styles.btnText}>
            Class Component
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 24,
    color: 'black',
    backgroundColor: '#e1bee7',
    height: 100,
    marginBottom: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    borderBottomWidth: 2
  },
  btn: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'mediumorchid'
  },
  btnText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'dimgray'
  }
})