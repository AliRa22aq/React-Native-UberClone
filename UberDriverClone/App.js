/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Map from './src/components/Map';
import HomeScreen from './src/screens/HomeScreen/indx';



const App = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar  />
      <HomeScreen />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
