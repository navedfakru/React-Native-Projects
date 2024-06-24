import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useId, useState } from 'react'
import { EvilIcons, Entypo } from '@expo/vector-icons';

const CurrencyInputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  currency,
  amountDisable = true,
  currencyDisable = false,
  className = "",
},props) => {

  const [isClicked, setIsClicked] = useState(false);
  const [selectCurrency, setSelectCurrency] = useState(currency);

  const ammountInputId = useId()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.currencySelector}
        onPress={() => {
          setIsClicked(!isClicked)
        }}
      >
        <Text style={styles.amountText}>{props.selectCurrency}</Text>
        <EvilIcons name="chevron-right" size={28} color={'gray'} />
      </TouchableOpacity>
      {isClicked ? (
        <Modal animationType='slide' transparent={true}>
          <View style={styles.dropdownArea}>
            <TouchableOpacity
              onPress={() => setIsClicked(false)}
              style={styles.modalClose}
            >
              <Entypo name="dots-three-horizontal" size={40} color="black" />
            </TouchableOpacity>
            <View>
              <View style={{ marginBottom: 200 }}>
                <FlatList data={currencyOptions} renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={styles.currencyItem}
                    onPress={() => {
                      setSelectCurrency(item)
                      setIsClicked(false)
                    }}
                  >
                    <Text style={styles.textModal}>{item}</Text>
                  </TouchableOpacity>
                )}
                />
              </View>
            </View>
          </View>
        </Modal>
      ) : null}
      <TextInput
        keyboardType='numeric'
        style={[styles.amount, { color: className }]}
        id={ammountInputId}
        value={amount}
        onChangeText={(amount) => onAmountChange && onAmountChange(Number(amount))}
        editable={amountDisable}
        {...props}
      />
    </View>
  )
}

CurrencyInputBox.propTypes = {
  selectCurrency: props.selectCurrency
}

export default CurrencyInputBox

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 40,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  currencySelector: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  amountText: {
    color: 'gray',
    fontSize: 14,
    alignContent: 'center',
    textAlign: 'center'
  },
  amount: {
    marginHorizontal: 10,
    fontSize: 30,
    fontWeight: '700'
  },
  dropdownArea: {
    width: '100%',
    height: '100%',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    marginTop: 10,
    backgroundColor: '#fff',
    elevation: 5,
    alignSelf: 'center',
  },
  modalClose: {
    alignItems: 'center'
  },
  searchInput: {
    width: '90%',
    height: 50,
    borderWidth: .5,
    borderRadius: 10,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    paddingLeft: 15,
    marginTop: 20
  },
  currencyItem: {
    width: '85%',
    height: 50,
    borderBottomWidth: .5,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  textModal: {
    fontSize: 16,
    fontWeight: '600'
  }
})