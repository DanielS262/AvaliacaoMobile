import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/home/index.js'
import Entregas from './pages/entregas/index.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Delivery Home" component={Home} />
        <Stack.Screen name="Delivery entregas" component={Entregas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}