import {StyleSheet, View } from 'react-native'
import React, {useEffect, useState } from 'react'
import { useSpeedConvert, speedUnitsText } from '../hooks/useSpeed';
import { Button, InputTextBox } from '../components';

const SpeedScreen = () => {

  const [from, setFrom] = useState("Meter/second (m/s)");
  const [to, setTo] = useState("Kilometer/hour (km/h)");
  const [value, setValue] = useState(0);
  const [activeInput, setActiveInput] = useState(from);

  const handleNumberPress = (buttonValue) => {
    setValue(prevValue => (prevValue === 0 ? buttonValue : prevValue + buttonValue));
  };

  let fromAbbr = speedUnitsText[from]
  let toAbbr = speedUnitsText[to]
  
  const convert = () => {
    let convertValue = useSpeedConvert(Number(value), activeInput === from ? fromAbbr : toAbbr, activeInput === to ? fromAbbr : toAbbr);
    return convertValue.toFixed(4)
  }

  useEffect(()=> {
    setValue(0)
  }, [activeInput])

  const clear = () => {
    setValue(0)
  }

  return (
    <View style={styles.mainContainer}>
      <InputTextBox
        value={activeInput === from ? value : convert()}
        valueText={from}
        style={activeInput === from ? {color: "orange"} : null}
        onPress={() => setActiveInput(from)}
        labelData={speedUnitsText}
        onModalInputText={(item) => setFrom(item)}
        modalStyle={{height: '70%', top: "30%"}}
        modalName="Speed"
      />
      <InputTextBox
        value={activeInput === to ? value : convert()}
        valueText={to}
        style={activeInput === to ? {color: "orange"} : null}
        onPress={() => setActiveInput(to)}
        labelData={speedUnitsText}
        onModalInputText={(item) => setTo(item)}
        modalStyle={{height: '70%', top: "30%"}}
        modalName="Speed"
      />
      <View style={{ flex: 2 }}>
        <View style={styles.row}>
          <Button title="7" onPress={() => handleNumberPress("7")}
            styleText={styles.btnText} style={styles.btn} />
          <Button title="8" onPress={() => handleNumberPress("8")}
            styleText={styles.btnText} style={styles.btn} />
          <Button title="9" onPress={() => handleNumberPress("9")}
            styleText={styles.btnText} style={styles.btn} />
          <Button title="AC" onPress={clear}
            styleText={{color: "white"}} style={{backgroundColor: "red"}} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => handleNumberPress("4")}
            styleText={styles.btnText} style={styles.btn} />
          <Button title="5" onPress={() => handleNumberPress("5")}
            styleText={styles.btnText} style={styles.btn} />
          <Button title="6" onPress={() => handleNumberPress("6")}
            styleText={styles.btnText} style={styles.btn} />
          <Button title="⌫"
            onPress={() => setValue(value.toString().slice(0, -1))}
            styleText={{color: "white"}} style={{backgroundColor: 'orange'}} />
        </View>
        <View style={styles.row}>
          <Button title="1" onPress={() => handleNumberPress("1")}
            styleText={styles.btnText} style={styles.btn} />
          <Button title="2" onPress={() => handleNumberPress("2")}
            styleText={styles.btnText} style={styles.btn} />
          <Button title="3" onPress={() => handleNumberPress("3")}
            styleText={styles.btnText} style={styles.btn} />
        </View>
        <View style={styles.row}>
          <Button title="0" onPress={() => handleNumberPress("0")}
            styleText={styles.btnText} style={styles.btn} />
          <Button title="00" onPress={() => handleNumberPress("00")}
            styleText={styles.btnText} style={styles.btn} />
          <Button title="." onPress={() => handleNumberPress(".")}
            styleText={styles.btnText} style={styles.btn} />
        </View>
      </View>
    </View>
  )
}

export default SpeedScreen

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  row: {
    width: "100%",
    flexDirection: 'row'
  },
  btnText: {
    color: 'black',
    fontSize: 28,
    fontWeight: '500'
  },
  btn: {
    backgroundColor: 'pink'
  },
  activeInput: {
    color: 'orange'
  },
  inactiveInput: {
  }
})