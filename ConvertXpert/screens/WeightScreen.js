import {StyleSheet, View } from 'react-native'
import React, {useEffect, useState } from 'react'
import { useWeightConvert, weightUnitsText } from '../hooks/useWeight';
import { WeightInputBox, Button } from '../components';


const units = {
  ...weightUnitsText.metricWeightUnits,
  ...weightUnitsText.imperialWeightUnits
}


const WeightScreen = () => {

  const [from, setFrom] = useState("Kilogram (kg)");
  const [to, setTo] = useState("Gram (g)");
  const [value, setValue] = useState(0);
  const [activeInput, setActiveInput] = useState(from);

  const handleNumberPress = (buttonValue) => {
    setValue(prevValue => (prevValue === 0 ? buttonValue : prevValue + buttonValue));
  };

  const convert = 
  useWeightConvert(value, activeInput === from ? units[from] : units[to], activeInput === to ? units[from] : units[to]);

  useEffect(()=> {
    setValue(0)
  }, [activeInput])

  const clear = () => {
    setValue(0)
  }

  return (
    <View style={styles.mainContainer}>
      <WeightInputBox
        value={activeInput === from ? value : convert}
        valueText={from}
        style={activeInput === from ? {color: "orange"} : null}
        onPress={() => setActiveInput(from)}
        labelData={weightUnitsText}
        onModalImerialUnits={(item) => setFrom(item)}
        onModalMetricUnits={(item) => setFrom(item)}
      />
      <WeightInputBox
        value={activeInput === to ? value : convert}
        valueText={to}
        style={activeInput === to ? {color: "orange"} : null}
        onPress={() => setActiveInput(to)}
        labelData={weightUnitsText}
        onModalImerialUnits={(item) => setTo(item)}
        onModalMetricUnits={(item) => setTo(item)}
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

export default WeightScreen

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