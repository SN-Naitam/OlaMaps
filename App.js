import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import OtpScreen from './src/authscreens/OtpScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {

  return (
    <GestureHandlerRootView>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}
