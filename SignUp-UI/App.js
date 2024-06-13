import { StatusBar } from 'expo-status-bar';
import {Text, TouchableOpacity, View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <AppNavigation />
  );
}


// import { StatusBar } from "expo-status-bar";
// import { View, TouchableOpacity, Text } from "react-native";

// export default function App() {
//   return (
//     <View className="flex-1 justify-center items-center bg-white ">
//       <TouchableOpacity className="bg-teal-500 p-3 rounded-lg shadow-md shadow-gray-400">
//         <Text className="text-white text-3xl font-bold ">Hello World</Text>
//       </TouchableOpacity>
      
//       <StatusBar style="dark" />
//     </View>
//   );
// }

