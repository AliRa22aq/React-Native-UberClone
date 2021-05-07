/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import DestinationSearch from './src/screens/DesitinationSearch';
import HomeScreen from './src/screens/HomeScreen';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';



const App = () => {
  const androidPermmision = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };


  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermmision();

    } else {
      // ios
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    // <SafeAreaView >
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {/* <HomeScreen /> */}
      {/* <DestinationSearch /> */}
      {/* <SearchResults /> */}
      {/* </SafeAreaView> */}
      <Router />
    </SafeAreaView>
  );
};

export default App;
