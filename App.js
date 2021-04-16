/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';

import Login from "./components/Login/login"
import Home from "./components/Home/home"
import Screen2 from "./components/Screen2/screen2"


const config = {
  animation: 'spring',
  config: {
    stiffness: 10000,
    damping: 500,
    mass: 2,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
})

const options = {
  cardStyleInterpolator: forFade,
  // cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
  transitionSpec: {
    open: config,
    close: config,
  },
}

const Stack = createStackNavigator();



const App = () => {

  return (
    <NavigationContainer theme={{ colors: { background: '#000' } }}>      
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen  name="Login" component={Login}  options={options}  />
        <Stack.Screen  name="Home" component={Home}  options={options}  />
        <Stack.Screen name="Screen2"  component={Screen2} options={options}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
