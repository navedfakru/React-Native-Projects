import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import React, { useState } from 'react';
import { modalStyles, MarkdownDisplay } from './index';

const ModalDisplay = ({code}) => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>
      <View style={
        {
          width: '100%',
        }}>
        <Pressable
          style={[modalStyles.showcodebtn]}
          onPress={() => setVisibleModal(true)}
        >
          <Text style={modalStyles.showcodeText}>Show Code</Text>
        </Pressable>
      </View>
      <Modal visible={visibleModal} transparent={true}>
        <View style={modalStyles.modalView}>
          <Pressable
            style={[
              modalStyles.showcodebtn,
              {
                width: "100%",
                backgroundColor: "rgba(255, 0, 0, 0.7)",
                borderRadius: 0,
                margin: 0,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            ]}
            onPress={() => setVisibleModal(false)}
          >
            <Text style={[modalStyles.showcodeText]}>Close Code</Text>
          </Pressable>
          <MarkdownDisplay>{code}</MarkdownDisplay>
        </View>
      </Modal>
    </View>
  )
}

export default ModalDisplay

const styles = StyleSheet.create({})