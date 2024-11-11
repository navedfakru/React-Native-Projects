import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './redux/action';
import { useEffect, useState } from 'react';

export default function Products(props) {
  const [isAdded, setIsAdded] = useState(false)
  const dispatch = useDispatch()
  const item = props.item;
  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id))
  }
  const storeItem = useSelector((state) => state.reducer)
  useEffect(() => {
    let result = storeItem.filter((element) => {
      return element.id === item.id
    })
    if(result.length) {
      setIsAdded(true)
    } else {
      setIsAdded(false)
    }
  }, [storeItem])
  return (
    <View key={item.id} style={styles.container}>
      <Text style={{fontSize: 24, color: 'rgba(0, 0, 0, 0.6)', fontWeight: '700'}}>{item.title}</Text>
      <Text style={{fontSize: 20, color: 'rgba(0, 0, 0, 0.6)', fontWeight: '500'}}>Price: {item.price}</Text>
      <Image source={{uri: item.thumbnail}} style={{height: 300, width: 300}} resizeMode='contain' resizeMethod='resize' />
      {
        isAdded ?
        <Button title='Remove to card' color={'red'} onPress={() => handleRemoveFromCart(item)} />
        : <Button title='Add to Cart' onPress={() => handleAddToCart(item)} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    margin: 20,
    borderRadius: 20,
    borderWidth: 2,
  },
});
