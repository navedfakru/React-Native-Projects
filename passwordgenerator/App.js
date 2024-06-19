import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function App() {

  const [length, setLength] = useState(8);
  const [password, setPassowrd] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~`!@#$%^&*()_+=-{}[]<>?"

    for (let i = 0; i < length; i++) {
      let strIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(strIndex)
    }

    setPassowrd(pass)

  }, [length, numberAllowed, charAllowed, setPassowrd])

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.focus()
      Clipboard.setStringAsync(password)
      Alert.alert(`${password}`)
    }
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.inputView}>
          <TextInput
            ref={passwordRef}
            style={styles.input}
            value={password}
            placeholder='password'
            readOnly
          />
        </View>
        <TouchableOpacity onPress={copyPasswordToClipboard} style={styles.copyBtn}>
          <Text style={styles.headerText}>COPY</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.sliderView}>
          <Text style={styles.sliderText1}>Lenght</Text>
          <Text style={styles.sliderText2}>{length}</Text>
          <Slider
            style={styles.slider}
            minimumValue={8}
            maximumValue={20}
            value={length}
            onValueChange={(value) => setLength(Math.floor(value))}
          />
        </View>
        <View style={styles.sliderSetting}>
          <TouchableOpacity
            onPress={() => {
              setNumberAllowed((prev) => !prev)
            }}
            style={[styles.numberCharBtn, numberAllowed && styles.selectednumberCharBtn]}
          >
            <Text style={styles.numberCharText}>With Number</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCharAllowed((prev) => !prev)
            }}
            style={[styles.numberCharBtn, charAllowed && styles.selectednumberCharBtn]}>
            <Text style={styles.numberCharText}>With Character</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(229 231 235)'
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 2.5,
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 20,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    color: 'black'
  },
  inputView: {
    flex: 2,
    justifyContent: 'center',
  },
  copyBtn: {
    justifyContent: 'center',
    backgroundColor: 'rgb(37 99 235)',
    marginHorizontal: 20,
    borderRadius: 5,
    padding: 20
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  slider: {
    alignSelf: 'center',
    height: 40,
    width: 300,
    backgroundColor: 'rgb(243 244 246)',
    borderRadius: 20,
    borderWidth: 2
  },
  sliderView: {
    flex: 1,
    gap: 30
  },
  sliderSetting: {
    flex: 1,
    gap: 50
  },
  sliderText1: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40
  },
  sliderText2: {
    fontSize: 30,
    color: 'rgb(239 68 68)',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  numberCharText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  numberCharBtn: {
    padding: 15,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 25,
  },
  selectednumberCharBtn: {
    borderWidth: 2,
    borderColor: '#DAA520',
  }
});
