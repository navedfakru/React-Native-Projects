import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons, Entypo } from '@expo/vector-icons'

const AreaInputBox = ({
  value,
  valueText,
  style,
  onPress,
  labelData = {},
  onModalMetricUnits,
  onModalImerialUnits
}) => {
  const [modalClicked, setModalClicked] = useState(false);
  // console.log(modalClicked)

  // console.log(String(value).length)
  // console.log(labelData)
  const metricAreaUnits = Object.keys(labelData.metricAreaUnits)
  const imperialAreaUnits = Object.keys(labelData.imperialAreaUnits)

  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.inputBox} >
        <TouchableOpacity onPress={() => setModalClicked(!modalClicked)} style={styles.header}>
          <Text>{valueText}</Text>
          <EvilIcons name="chevron-right" size={28} color={'gray'} />
        </TouchableOpacity>
        <TextInput
          style={[
            String(value).length > 17 ? styles.value2 : styles.value,
            style]}
          value={value.toString()}
          scrollEnabled
          editable={false}
        />
      </TouchableOpacity>
      {modalClicked && (
        <Modal animationType='slide' transparent={false}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalClicked(false)}
              style={styles.modalClose}
            >
              <Entypo name="dots-three-horizontal" size={40} color="#ecfeff" />
            </TouchableOpacity>
            <ScrollView>
              <View style={styles.viewLabel}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic', color: '#fb923c' }}>metricAreaUnits</Text>
              </View>
              {
                metricAreaUnits.map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={styles.modalBtn}
                    onPress={() => {
                      onModalMetricUnits(item)
                      setModalClicked(!modalClicked)
                    }}
                  >
                    <Text style={styles.textModal}>{item}</Text>
                  </TouchableOpacity>
                ))
              }
              <View style={styles.viewLabel}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic', color: '#fb923c' }}>imperialAreaUnits</Text>
              </View>
              {
                imperialAreaUnits.map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={styles.modalBtn}
                    onPress={() => {
                      onModalImerialUnits(item)
                      setModalClicked(!modalClicked)
                    }}
                  >
                    <Text style={styles.textModal}>{item}</Text>
                  </TouchableOpacity>
                ))
              }
            </ScrollView>
          </View>
        </Modal>
      )}
    </View>
  )
}

export default AreaInputBox

const styles = StyleSheet.create({
  inputBox: {
    height: 100,
    backgroundColor: "white",
    margin: 8,
    borderRadius: 10,
    elevation: 5
  },
  header: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingLeft: 8,
  },
  value: {
    padding: 8,
    fontSize: 34,
    fontWeight: '600',
    color: 'black'
  },
  value2: {
    padding: 8,
    fontSize: 18,
    fontWeight: '500',
    color: 'black'
  },
  modalView: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 10,
    backgroundColor: '#fdf2f8',
    elevation: 10,
    alignSelf: 'center',
    paddingBottom: 50,
  },
  modalClose: {
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#9d174d",
    borderBottomWidth: 1,
    borderBottomColor: '#8e8e8e',
  },
  modalBtn: {
    width: '85%',
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10
  },
  textModal: {
    fontSize: 16,
    fontWeight: '600',
  },
  viewLabel: {
    width: '85%',
    justifyContent: 'center',
    height: 40,
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#8e8e8e',
  }
})