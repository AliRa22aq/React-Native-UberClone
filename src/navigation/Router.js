import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DesitinationSearch';
import SearchResults from '../screens/SearchResults';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';


const Router = () => {
    
    const Stack = createStackNavigator();

  return (
      <View style={{height: '100%'}}> 
    <NavigationContainer> 
        {/* <DestinationSearch /> */}
      <Stack.Navigator 
            screenOptions= {{
                headerShown: false,
            }}
            > 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};

export default Router;
