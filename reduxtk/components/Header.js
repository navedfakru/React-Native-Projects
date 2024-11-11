import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Header() {
  const [itemCart, setItemCart] = useState(0)
  const storeitem = useSelector((state)=> state.reducer)
  useEffect(() => {
    setItemCart(storeitem.length)
  }, [storeitem])
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}>{itemCart}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 255, 0.3)'
  },
});
