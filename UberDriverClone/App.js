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
  StyleSheet,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/indx';

import { withAuthenticator } from 'aws-amplify-react-native'
import {API, Auth, graphqlOperation} from 'aws-amplify'

import Amplify from 'aws-amplify'
import config from './aws-exports'
import { getCarId } from './src/graphql/queries';
import { createCar } from './src/graphql/mutations';
Amplify.configure(config)



const App = () => {

  useEffect(()=>{
    const updateUserCar = async () => {
      // get authenticated user
      const authenticatedUser = await Auth.currentAuthenticatedUser({bypassCache: true})
      // console.log(authenticatedUser)
      if(!authenticatedUser){
        return;
      }

      const carData = await API.graphql(
        graphqlOperation(
          getCarId, {
            id: authenticatedUser.attributes.sub
          }
        )
      )
        // console.log('carData')
        // console.log(carData)

        // Check if user have a car
        if(!!carData.data.getCar){
          console.log("User Already has a car assigned");
          return;
        }

        //If not then create a new car for him
        const newCar = {
          id: authenticatedUser.attributes.sub,
          type: 'UberX',
          userId: authenticatedUser.attributes.sub
        }

        await API.graphql(
          graphqlOperation(
            createCar, {
              input: newCar
            }
          )
        )
      

    }
    updateUserCar();
  
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar  />
      <HomeScreen />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default withAuthenticator(App);