import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './components/stack/Stack'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

export default App;
