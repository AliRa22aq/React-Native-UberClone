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
  View

} from 'react-native';
import DestinationSearch from './src/screens/DesitinationSearch';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {

  return (
    // <SafeAreaView >
    <SafeAreaView> 
      <StatusBar barStyle='dark-content' />
      {/* <HomeScreen /> */}
      <DestinationSearch />
    </SafeAreaView>
    // </SafeAreaView>
  );
};


export default App;
