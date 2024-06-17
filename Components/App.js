import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AppNavigation from './navigation/AppNavigation';

export default function App() {
  return (
    <AppNavigation />
  );
}