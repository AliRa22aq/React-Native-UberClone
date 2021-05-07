import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DesitinationSearch';
import SearchResults from '../screens/SearchResults';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';


const HomeNavigation = () => {
    
    const Stack = createStackNavigator();

  return (
      <Stack.Navigator 
            screenOptions= {{
                headerShown: false,
            }}
            > 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
      </Stack.Navigator>
  );
};

export default HomeNavigation;
