import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation/MyStack";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen'

const App = () => {

  const [loaded] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
    Inter: require('./assets/fonts/Inter_18pt-Regular.ttf'),
    InterSemi: require('./assets/fonts/Inter_18pt-SemiBold.ttf'),
    InterBold: require('./assets/fonts/Inter_18pt-Bold.ttf'),
    InterBlack: require('./assets/fonts/Inter_18pt-Black.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MyStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
