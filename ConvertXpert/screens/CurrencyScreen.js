import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { CurrencyInputBox, Button } from '../components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useCurrencyInfo from '../hooks/useCurrencyInfo';
import currencyCountry from './data/currencyCountrydata';


const CurrencyScreen = () => {
  const [from, setFrom] = useState('US Dollar USD');
  const [to, setTo] = useState('Indian Rupee INR');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(currencyCountry[from]);

  const option = Object.keys(currencyCountry);

  useEffect(() => {
    if (currencyInfo && amount) {
      const rate = currencyInfo[currencyCountry[to]];
      const convertRate = amount * rate
      setConvertedAmount(convertRate.toFixed(4));
    } else if (amount == 0) {
      setConvertedAmount(0)
    }
  }, [currencyInfo, amount, from, to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    setConvertedAmount(amount);
  };

  const handleNumberPress = (buttonValue) => {
    if(amount === 0){
      setAmount(buttonValue)
    } else {
      setAmount(amount + buttonValue)
    }
  }

  const clear = () => {
    setAmount(0)
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerInputs}>
        <View style={{ flex: 2.5, gap: 5 }}>
          <TouchableOpacity
            activeOpacity={0.9}
          >
            <CurrencyInputBox
              amount={amount}
              currencyOptions={option}
              currency={from}
              onAmountChange={(amount) => setAmount(amount) && convert()}
              className={'rgb(251 146 60)'}
              onPress={(item) => setFrom(item)}
              amountDisable={true}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <CurrencyInputBox
              amount={convertedAmount}
              currencyOptions={option}
              currency={to}
              className={'black'}
              onPress={(item) => setTo(item)}
              amountDisable={true}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={swap} style={styles.swap}>
          <MaterialCommunityIcons name="swap-vertical" size={48} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2}}>
        <View style={styles.row}>
          <Button title="7" onPress={() => handleNumberPress("7")} />
          <Button title="8" onPress={() => handleNumberPress("8")} />
          <Button title="9" onPress={() => handleNumberPress("9")} />
          <Button title="AC" onPress={clear} style={{backgroundColor: "red"}} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => handleNumberPress("4")} />
          <Button title="5" onPress={() => handleNumberPress("5")} />
          <Button title="6" onPress={() => handleNumberPress("6")} />
          <Button title="⌫" onPress={() => setAmount(amount.toString().slice(0, -1))} style={{backgroundColor: "orange"}} />
        </View>
        <View style={styles.row}>
          <Button title="1" onPress={() => handleNumberPress("1")} />
          <Button title="2" onPress={() => handleNumberPress("2")} />
          <Button title="3" onPress={() => handleNumberPress("3")} />
        </View>
        <View style={styles.row}>
          <Button title="0" onPress={() => handleNumberPress("0")} />
          <Button title="00" onPress={() => handleNumberPress("00")} />
          <Button title="." onPress={() => handleNumberPress(".")} />
        </View>
      </View>
    </View>
  );
};

export default CurrencyScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgb(241 245 249)',
    flex: 1
  },
  containerInputs: {
    flexDirection: 'row',
    margin: 10
  },
  swap: {
    backgroundColor: 'white',
    width: 70,
    marginLeft: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  row: {
    width: "100%",
    flexDirection: 'row'
  }
});

