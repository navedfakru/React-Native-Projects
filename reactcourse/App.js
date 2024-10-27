import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
      <LinearGradient
        // Background Linear Gradient
        colors={['#e91e63', '#673ab7', '#ef7ca3',]}
        style={styles.background}
        start={{ x: .1, y: 0.5 }}
        end={{ x: 1, y: 0.4 }}
        locations={[0, .7, .9]}
      >
      <LinearGradient
        // Button Linear Gradient
        colors={['green', '#3b5998', '#192f6a']}
        style={styles.button}>
        <Text style={styles.text}>Sign in with Facebook</Text>
      </LinearGradient>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});
