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
import SearchResults from './src/screens/SearchResults';

const App = () => {

  return (
    // <SafeAreaView >
    <SafeAreaView> 
      <StatusBar barStyle='dark-content' />
      {/* <HomeScreen /> */}
      {/* <DestinationSearch /> */}
      <SearchResults />
    </SafeAreaView>
    // </SafeAreaView>
  );
};


export default App;
