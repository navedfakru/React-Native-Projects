import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [date, setDate] = useState(new Date())
  const timerID = useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => clearInterval(timerID)
  }, [])
  return (
    <ScrollView 
      style={styles.container}
    >
      <View style={styles.dateView}>
        <Text style={styles.dateText}>{date.toLocaleString()}</Text>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.dateText}>{date.toDateString()}</Text>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.dateText}>{date.toISOString()}</Text>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.dateText}>{date.toString()}</Text>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.dateText}>{date.toLocaleTimeString()}</Text>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.dateText}>{date.toUTCString()}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
  dateView: {
    height: '50',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  dateText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
});
