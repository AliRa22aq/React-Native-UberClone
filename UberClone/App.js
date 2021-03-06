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
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';

import { withAuthenticator } from 'aws-amplify-react-native'

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)


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
      <Router />
    </SafeAreaView>
  );
};

export default withAuthenticator(App)
