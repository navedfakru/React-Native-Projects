import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { products } from './components/data'
import Header from './components/Header';
import Products from './components/Product';
import { Provider } from 'react-redux';
import store from './components/redux/store';

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <ScrollView>
          {
            products.map((item) => (
              <Products item={item} />
            ))
          }
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});
