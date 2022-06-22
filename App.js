/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import CrewMember from './src/containers/crewMember';

import BottomTabs from './src/containers/home';
import {useInternetStatus} from './src/containers/utils/internet';

const Stack = createNativeStackNavigator();
const App = () => {
  const internet = useInternetStatus();
console.log(internet)
  return (
    <NavigationContainer>
      {internet === false ? (
        <SafeAreaView>
          <Text>Unfriendly UI message: No internet connection</Text>
        </SafeAreaView>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={BottomTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CrewMember"
            component={CrewMember}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
