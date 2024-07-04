import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useId, useState } from 'react';
import { EvilIcons, Entypo } from '@expo/vector-icons';

const CurrencyInputBox = ({
  amount,
  onAmountChange,
  currencyOptions = [],
  currency,
  className = "",
  onPress,
  amountDisable
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const ammountInputId = useId();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.currencySelector}
        onPress={() => setIsClicked(!isClicked)}
      >
        <Text style={styles.amountText}>{currency}</Text>
        <EvilIcons name="chevron-right" size={28} color={'gray'} />
      </TouchableOpacity>
      <TextInput
        keyboardType='numeric'
        style={[styles.amount, { color: className }]}
        id={ammountInputId}
        value={amount.toString()}
        onChangeText={(amount) => onAmountChange && onAmountChange(Number(amount))}
        editable={!amountDisable}
      />
      {isClicked && (
        <Modal animationType='slide' transparent={true}>
          <View style={styles.dropdownArea}>
            <TouchableOpacity
              onPress={() => setIsClicked(false)}
              style={styles.modalClose}
            >
              <Entypo name="dots-three-horizontal" size={40} color="black" />
            </TouchableOpacity>
            <View>
              <FlatList
                data={currencyOptions}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.currencyItem}
                    onPress={() => {
                      onPress(item);
                      setIsClicked(false);
                    }}
                  >
                    <Text style={styles.textModal}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default CurrencyInputBox;

const styles = StyleSheet.create({
  container: {
    height: 100,
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
    paddingBottom: 50
  },
  modalClose: {
    alignItems: 'center',
  },
  currencyItem: {
    width: '85%',
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textModal: {
    fontSize: 16,
    fontWeight: '600',
  }
});
