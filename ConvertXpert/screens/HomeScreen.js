import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {useNavigation} from '@react-navigation/native';


const HomeScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Currency')}
        >
          <Image style={styles.image} source={require('../assets/icon/exchange.png')} />
        </TouchableOpacity>
        <Text style={styles.btnText}>Currency</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Length')}
        >
          <Image style={styles.image} source={require('../assets/icon/length.png')} />
        </TouchableOpacity>
        <Text style={styles.btnText}>Length</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Area')}
        >
          <Image style={styles.image} source={require('../assets/icon/area.png')} />
        </TouchableOpacity>
        <Text style={styles.btnText}>Area</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Volume')}
        >
          <Image style={styles.image} source={require('../assets/icon/volume.png')} />
        </TouchableOpacity>
        <Text style={styles.btnText}>Volume</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Weight')}
        >
          <Image style={styles.image} source={require('../assets/icon/weight.png')} />
        </TouchableOpacity>
        <Text style={styles.btnText}>Weight</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Temperature')}
        >
          <Image style={styles.image} source={require('../assets/icon/temperature.png')} />
        </TouchableOpacity>
        <Text style={styles.btnText}>Temperature</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Speed')}
        >
          <Image style={styles.image} source={require('../assets/icon/speed.png')} />
        </TouchableOpacity>
        <Text style={styles.btnText}>Speed</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Pressure')}
        >
          <Image style={styles.image} source={require('../assets/icon/pressure.png')} />
        </TouchableOpacity>
        <Text style={styles.btnText}>Pressure</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Power')}
        >
          <Image style={styles.image} source={require('../assets/icon/power.png')} />
        </TouchableOpacity>
        <Text style={styles.btnText}>Power</Text>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(241 245 249)',
    justifyContent: 'center',
    gap: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center'
  },
  buttonView: {
    height: 150,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 50,
    width: 50
  },
  button: {
    borderRadius: 50,
    padding: 20,
    backgroundColor: 'white',
    elevation: 10
  },
  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'black',
    textAlign: 'center',
  }
})