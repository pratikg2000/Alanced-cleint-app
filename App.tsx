import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ClientNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <ClientNavigation />
    </NavigationContainer>
  );
};

export default App;
